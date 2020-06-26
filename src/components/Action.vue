<template>
  <div
    class="toast"
    v-bind:class="[toastMessage.status]"
    aria-live="polite"
    style="display: block;"
  >
    <button
      type="button"
      class="toast-close-button"
      role="button"
      @click="deleteMessage(toastMessage.position, toastIndex)"
    >
      ×
    </button>
    <div class="toast-title">{{ toastMessage.message }}</div>
    <div class="toast-message">{{ toastMessage.description }}</div>
    <div
      v-for="toastAction in toastMessage.actionButtons"
      :key="toastAction.index"
    >
      <button
        @click="
          emitEvent(toastAction.emitEventName, toastAction.emitEventValue)
        "
      >
        {{ toastAction.label }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "../utils/vue-imports";
import { ToastDataType } from "../ts/model";
import { ToastMixins } from "../ts/mixin";

@Component({
  name: "action",
  mixins: [ToastMixins]
})
export default class Action extends Vue {
  @Prop({ type: Object, required: true })
  toastMessage!: ToastDataType;
  toastIndex = this.$vnode.key;
}
</script>
