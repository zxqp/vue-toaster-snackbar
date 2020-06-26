import Vue from "vue";
import { ToastDataType } from "./model";
export declare const ToastMixins: import("vue/types/vue").ExtendedVue<
  Vue,
  unknown,
  {
    deleteMessage(position: string, payload: number): true;
    emitEvent(emitName: string, emitValue: unknown): void;
    startTimeout(messageData: ToastDataType, startFrom?: number): void;
    /**
     * Pause prograss bar when hovering on a toast.
     *
     * @param {object} messageData
     */
    pauseProgress(messageData: ToastDataType): void;
    /**
     * Resume prograss bar when going a way from 'mouseover' status.
     *
     * @param {object} messageData
     */
    resumeProgress(messageData: ToastDataType): void;
    /**
     * Get current message prograss.
     *
     * @param {object} messageData
     */
    getCurrentProgress(messageData: ToastDataType): number;
  },
  unknown,
  Record<never, any>
>;
