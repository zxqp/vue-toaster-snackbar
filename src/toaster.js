"use strict";
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (const p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
const event_bus_1 = require("./ts/event-bus");
const Toaster = {
  snackbar: function(status, message) {
    if (status == undefined) {
      status = "toast-success";
    } else {
      status = "toast-" + status;
    }
    const newMessage = {
      id: 0,
      toastType: "snackbar",
      position: "topRight",
      status: status,
      message: message,
      timeout: 3000,
      pauseTime: false,
      progress: 0,
      animate: 0
    };
    event_bus_1.Events.$emit("add", newMessage);
  },
  block: function(status, message, description) {
    if (status == undefined) {
      status = "toast-success";
    } else {
      status = "toast-" + status;
    }
    const newMessage = {
      id: 0,
      toastType: "block",
      position: "topRight",
      status: status,
      message: message,
      description: description,
      timeout: 3000,
      pauseTime: false,
      progress: 0,
      animate: 0
    };
    event_bus_1.Events.$emit("add", newMessage);
  },
  custom: function(payload) {
    const newMessage = __assign({}, payload);
    if (newMessage.toastType == undefined) {
      newMessage.toastType = "snackbar";
    } else if (
      !(
        newMessage.toastType == "snackbar" ||
        newMessage.toastType == "block" ||
        newMessage.toastType == "action"
      )
    ) {
      this.block(
        "error",
        "Error",
        newMessage.toastType + " is not a correct custom toast type"
      );
      return;
    }
    if (newMessage.position == undefined) newMessage.position = "topRight";
    if (newMessage.status == undefined) {
      newMessage.status = "toast-success";
    } else {
      newMessage.status = "toast-" + newMessage.status;
    }
    event_bus_1.Events.$emit("add", newMessage);
  }
};
exports["default"] = Toaster;
