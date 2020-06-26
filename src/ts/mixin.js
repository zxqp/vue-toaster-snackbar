"use strict";
exports.__esModule = true;
exports.ToastMixins = void 0;
const vue_1 = require("vue");
const event_bus_1 = require("./event-bus");
exports.ToastMixins = vue_1["default"].extend({
  methods: {
    deleteMessage: function(position, payload) {
      event_bus_1.Events.$emit("delete-message", position, payload);
      return true;
    },
    emitEvent: function(emitName, emitValue) {
      if (emitName != undefined) this.$root.$emit(emitName, emitValue);
    },
    startTimeout: function(messageData, startFrom) {
      const _this = this;
      if (startFrom === void 0) {
        startFrom = 0;
      }
      // performance.now() will give more precision to be used for a smooth prograss bar
      const startTime = performance.now();
      var start = function() {
        // start animation calculating
        messageData.animate = requestAnimationFrame(function(timestamp) {
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
            _this.deleteMessage(messageData.position, messageData.id);
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
    pauseProgress: function(messageData) {
      if (messageData.timeout <= 0) return;
      messageData.pauseTime = true;
    },
    /**
     * Resume prograss bar when going a way from 'mouseover' status.
     *
     * @param {object} messageData
     */
    resumeProgress: function(messageData) {
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
    getCurrentProgress: function(messageData) {
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
