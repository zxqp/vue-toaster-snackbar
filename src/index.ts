/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import _Vue, { PluginObject } from "vue";
import Toast from "./components/Toast.vue";
import Toaster from "./toaster";

const version = "__VERSION__";

declare module "vue/types/vue" {
  // eslint-disable-next-line @typescript-eslint/class-name-casing
  interface _Vue {
    $toast: {
      snackbar(status: string, message: string): void;
      block(status: string, message: string, description: string): void;
      custom(message: object): void;
    };
    $toastvalue: string;
  }
}

const install = (Vue: typeof _Vue): void => {
  Vue.prototype.$add = (a: number, b: number): number => {
    return a + b;
  };
  Vue.prototype.$toast = Toaster;

  Vue.component("Toast", Toast);
};

const ToastsPlugin: PluginObject<_Vue> = {
  install,
  version
};

export default ToastsPlugin;

interface Window {
  Vue: any;
}

if (typeof window !== "undefined" && (<any>window).Vue) {
  (<any>window).Vue.use(ToastsPlugin);
}
