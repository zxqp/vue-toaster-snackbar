export interface ToastDataType {
  id: number;
  toastType: string; // snackbar, block, action
  message: string; // toast-title
  description?: string; // toast-description only for Block and action-popup
  position: string; // top-bottom right-left-center
  timeout: number; // in ms, 0 - infinite
  status?: string; // light
  showIcon?: boolean; // default true
  showProgress?: boolean; // default true
  progress: number; // progress bar
  pauseTime: boolean; // pause progress bar
  emitEventName?: string; // emit event name
  emitEventValue?: unknown; // any
  showToast?: boolean;
  animate: number;
  actionButtons?: Array<ActionButton>;
}

interface ActionButton {
  label: string; // Button Label
  status?: string; // success, default
  emitEventName: string; // emit event name
  emitEventValue: unknown; // any
}

export interface ToastModel {
  snackbar: (status: string, message: string) => void;
  block: (status: string, message: string, description: string) => void;
  custom: (message: ToastDataType) => void;
}
