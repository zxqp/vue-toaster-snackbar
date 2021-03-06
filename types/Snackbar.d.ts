/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToastDataType } from "../src/ts/model";
declare const SnackbarBase: import("vue-class-component/lib/declarations").VueClass<object &
  Record<never, any> & {
    deleteMessage(position: string, payload: number): true;
    emitEvent(emitName: string, emitValue: unknown): void;
    startTimeout(messageData: ToastDataType, startFrom?: number): void;
    pauseProgress(messageData: ToastDataType): void;
    resumeProgress(messageData: ToastDataType): void;
    getCurrentProgress(messageData: ToastDataType): number;
  }>;
export default class Snackbar extends SnackbarBase {
  toastMessage: ToastDataType;
  mounted(): void;
}
export {};
