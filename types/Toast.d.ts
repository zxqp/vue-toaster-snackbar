import { Vue } from "../src/utils/vue-imports";
import { ToastDataType as T } from "../src/ts/model";
export default class Toast extends Vue {
  topRightMessages: Array<T>;
  topLeftMessages: Array<T>;
  topCenterMessages: Array<T>;
  topFullMessages: Array<T>;
  bottomRightMessages: Array<T>;
  bottomLeftMessages: Array<T>;
  bottomCenterMessages: Array<T>;
  bottomFullMessages: Array<T>;
  dataSets: {
    position: string;
    data: T[];
  }[];
  mounted(): void;
  addMessage(payload: T): void;
  removeMessage(...args: [string, number]): void;
}
