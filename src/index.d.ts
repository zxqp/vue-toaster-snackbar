/* eslint-disable @typescript-eslint/class-name-casing */
import _Vue, { PluginObject } from "vue";
declare module "vue/types/vue" {
  interface _Vue {
    $toast: {
      snackbar(status: string, message: string): void;
      block(status: string, message: string, description: string): void;
      custom(message: object): void;
    };
    $toastvalue: string;
  }
}
declare const ToastsPlugin: PluginObject<_Vue>;
export default ToastsPlugin;
