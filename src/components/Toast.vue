<template>
  <div id="vue-toaster">
    <template v-for="(dataSet, index) in dataSets">
      <div
        v-if="dataSet.data.length > 0"
        class="toast-container"
        :class="[dataSet.position]"
        :key="index"
      >
        <component
          v-for="message in dataSet.data"
          v-bind:is="message.toastType"
          :key="message.id"
          :toastMessage="message"
        ></component>
      </div>
      <template v-else></template>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "../utils/vue-imports";
import { Events } from "../ts/event-bus";
import { ToastDataType as T } from "../ts/model";
import Snackbar from "./Snackbar.vue";
import Block from "./Block.vue";
import Action from "./Action.vue";

@Component({
  name: "Toast",
  components: {
    snackbar: Snackbar,
    block: Block,
    action: Action
  }
})
export default class Toast extends Vue {
  topRightMessages: Array<T> = [];
  topLeftMessages: Array<T> = [];
  topCenterMessages: Array<T> = [];
  topFullMessages: Array<T> = [];
  bottomRightMessages: Array<T> = [];
  bottomLeftMessages: Array<T> = [];
  bottomCenterMessages: Array<T> = [];
  bottomFullMessages: Array<T> = [];

  dataSets = [
    {
      position: "toast-top-right",
      data: this.topRightMessages
    },
    {
      position: "toast-top-left",
      data: this.topLeftMessages
    },
    {
      position: "toast-top-center",
      data: this.topCenterMessages
    },
    {
      position: "toast-top-full-width",
      data: this.topFullMessages
    },
    {
      position: "toast-bottom-left",
      data: this.bottomLeftMessages
    },
    {
      position: "toast-bottom-right",
      data: this.bottomRightMessages
    },
    {
      position: "toast-bottom-center",
      data: this.bottomCenterMessages
    },
    {
      position: "toast-bottom-full-width",
      data: this.bottomFullMessages
    }
  ];

  mounted() {
    Events.$on("add", this.addMessage);
    Events.$on("delete-message", this.removeMessage);
  }

  addMessage(payload: T) {
    const newMessage = { ...payload };
    newMessage.id = Math.random();
    eval("this." + newMessage.position + "Messages").unshift(newMessage);
  }

  removeMessage(...args: [string, number]) {
    const [position, id] = args;
    const arrayRef = eval("this." + position + "Messages");
    arrayRef.splice(
      arrayRef.findIndex(function(i: T) {
        return i.id == id;
      }),
      1
    );
  }
}
</script>
