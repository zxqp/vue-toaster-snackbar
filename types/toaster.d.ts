import { ToastDataType } from "../src/ts/model";
declare const Toaster: {
  snackbar(status: string, message: string): void;
  block(status: string, message: string, description: string): void;
  custom(payload: ToastDataType): void;
};
export default Toaster;
