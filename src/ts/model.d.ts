export interface ToastDataType {
  id: number;
  toastType: string;
  message: string;
  description?: string;
  position: string;
  timeout: number;
  status?: string;
  showIcon?: boolean;
  showProgress?: boolean;
  progress: number;
  pauseTime: boolean;
  emitEventName?: string;
  emitEventValue?: unknown;
  showToast?: boolean;
  animate: number;
  actionButtons?: Array<ActionButton>;
}
interface ActionButton {
  label: string;
  status?: string;
  emitEventName: string;
  emitEventValue: unknown;
}
export interface ToastModel {
  snackbar: (status: string, message: string) => void;
  block: (status: string, message: string, description: string) => void;
  custom: (message: ToastDataType) => void;
}
export {};
