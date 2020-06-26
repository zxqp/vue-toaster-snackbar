"use strict";
exports.__esModule = true;
const Toast_vue_1 = require("./components/Toast.vue");
const toaster_1 = require("./toaster");
const version = "__VERSION__";
const install = function(Vue) {
  Vue.prototype.$add = function(a, b) {
    return a + b;
  };
  Vue.prototype.$toast = toaster_1["default"];
  Vue.component("Toast", Toast_vue_1["default"]);
};
const ToastsPlugin = {
  install: install,
  version: version
};
exports["default"] = ToastsPlugin;
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ToastsPlugin);
}
