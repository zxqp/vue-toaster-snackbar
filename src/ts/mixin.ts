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

    startTimeout(messageData: ToastDataType, startFrom = 0) {
      // performance.now() will give more precision to be used for a smooth prograss bar
      const startTime = performance.now();

      const start = () => {
        // start animation calculating
        messageData.animate = requestAnimationFrame(timestamp => {
          const timeElapsed = timestamp + startFrom - startTime;

          // check if is message object already was removed
          // or prograss a toast message was hovered on
          // if (!this.exists(messageData) || messageData.pauseTime) {
          if (messageData.pauseTime) {
            // cancel the animation
            cancelAnimationFrame(messageData.animate);
            return;
            // check if timout value has not been reached
          } else if (timeElapsed < messageData.timeout) {
            // calcalute the prograss
            const progress = timeElapsed / messageData.timeout;
            // set a new progress
            messageData.progress = progress;
            // continue calculating the progress
            start();
          } else {
            // timout has been reached
            messageData.progress = 1;
            // cancel the animation
            cancelAnimationFrame(messageData.animate);
            // remove message from array
            this.deleteMessage(messageData.position, messageData.id);
            // this.remove(messageData);
            return;
          }
        });
      };

      start();
    },

    /**
     * Pause prograss bar when hovering on a toast.
     *
     * @param {object} messageData
     */
    pauseProgress(messageData: ToastDataType) {
      if (messageData.timeout <= 0) return;

      messageData.pauseTime = true;
    },

    /**
     * Resume prograss bar when going a way from 'mouseover' status.
     *
     * @param {object} messageData
     */
    resumeProgress(messageData: ToastDataType) {
      if (messageData.timeout <= 0) return;

      messageData.pauseTime = false;

      // re-start animation calculating with a given start point
      this.startTimeout(
        messageData,
        messageData.timeout * messageData.progress
      );
    },

    /**
     * Get current message prograss.
     *
     * @param {object} messageData
     */
    getCurrentProgress(messageData: ToastDataType) {
      // set prograss to "100" when progress value is close to 100.
      // why? sometimes when a prograss is someting like (99.899)
      // it will show a little empty space at the end of prograss
      // bar which doesnt get filled.
      if (Math.round(messageData.progress * 100) === 100) {
        return 100;
      }
      return messageData.progress * 100;
    }
  }
});
