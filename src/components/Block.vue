<template>
  <div
    class="toast"
    v-bind:class="[toastMessage.status]"
    aria-live="polite"
    style="display: block;"
    @click="emitEvent(toastMessage.emitEventName, toastMessage.emitEventValue)"
    @mouseover="pauseProgress(toastMessage)"
    @mouseleave="resumeProgress(toastMessage)"
  >
    <div
      v-if="toastMessage.showProgress"
      class="toast-progress"
      :style="{ width: getCurrentProgress(toastMessage) + '%' }"
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
import { Mixins } from "vue-property-decorator";

@Component({
  name: "block"
})
export default class Block extends Mixins(Vue, ToastMixins) {
  @Prop({ type: Object, required: true })
  toastMessage!: ToastDataType;

  mounted() {
    if (this.toastMessage.timeout > 0) this.startTimeout(this.toastMessage);
  }
}
</script>
