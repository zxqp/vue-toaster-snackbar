<template>
  <div
    class="toast"
    v-bind:class="[toastMessage.status]"
    aria-live="polite"
    style="display: block;"
    @click="emitEvent(toastMessage.emitEventName, toastMessage.emitEventValue)"
  >
    <div
      v-if="toastMessage.showProgress"
      class="toast-progress"
      style="width: 0%;"
    ></div>
    <button
      type="button"
      class="toast-close-button"
      role="button"
      @click="deleteMessage(toastMessage.position, toastMessage.id)"
    >
      ×
    </button>
    <div class="toast-title">{{ toastMessage.message }}</div>
    <div class="toast-message">{{ toastMessage.description }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "../utils/vue-imports";
import { ToastDataType } from "../ts/model";
import { ToastMixins } from "../ts/mixin";

@Component({
  name: "block",
  mixins: [ToastMixins]
})
export default class Block extends Vue {
  @Prop({ type: Object, required: true })
  toastMessage!: ToastDataType;
}
</script>
