import Vue from "vue";
import { Events } from "./event-bus";
import { ToastDataType } from "./model";

export const ToastMixins = Vue.extend({
  methods: {
    deleteMessage(position: string, payload: number) {
      Events.$emit("delete-message", position, payload);
      return true;
    },

    emitEvent(emitName: string, emitValue: unknown) {
      if (emitName != undefined) this.$root.$emit(emitName, emitValue);
    },

    startTimeout(toastData: ToastDataType, startFrom = 0) {
      const startTime = performance.now();
      const start = () => {
        toastData.animate = requestAnimationFrame(timestamp => {
          const timeElapsed = timestamp + startFrom - startTime;
          if (toastData.pauseTime) {
            cancelAnimationFrame(toastData.animate);
            return;
          } else if (timeElapsed < toastData.timeout) {
            const progress = timeElapsed / toastData.timeout;
            toastData.progress = progress;
            start();
          } else {
            toastData.progress = 1;
            cancelAnimationFrame(toastData.animate);
            this.deleteMessage(toastData.position, toastData.id);
            return;
          }
        });
      };

      start();
    },

    pauseProgress(toastData: ToastDataType) {
      if (toastData.timeout <= 0) return;

      toastData.pauseTime = true;
    },

    resumeProgress(toastData: ToastDataType) {
      if (toastData.timeout <= 0) return;
      toastData.pauseTime = false;
      this.startTimeout(toastData, toastData.timeout * toastData.progress);
    },

    getCurrentProgress(toastData: ToastDataType) {
      if (toastData.progress == undefined) toastData.progress = 0;
      if (Math.round(toastData.progress * 100) === 100) {
        return 100;
      }
      return toastData.progress * 100;
    }
  }
});
