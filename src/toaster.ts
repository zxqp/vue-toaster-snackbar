import { Events } from "./ts/event-bus";
import { ToastDataType } from "./ts/model";

const Toaster = {
  snackbar(status: string, message: string) {
    if (status == undefined) {
      status = "toast-success";
    } else {
      status = "toast-" + status;
    }

    const newMessage: ToastDataType = {
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

    Events.$emit("add", newMessage);
  },

  block(status: string, message: string, description: string) {
    if (status == undefined) {
      status = "toast-success";
    } else {
      status = "toast-" + status;
    }

    const newMessage: ToastDataType = {
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

    Events.$emit("add", newMessage);
  },

  custom(payload: ToastDataType) {
    const newMessage = { ...payload };
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

    Events.$emit("add", newMessage);
  }
};

export default Toaster;
