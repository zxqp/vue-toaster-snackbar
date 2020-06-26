"use strict";
exports.__esModule = true;
var Toast_vue_1 = require("./components/Toast.vue");
var toaster_1 = require("./toaster");
var version = "__VERSION__";
var install = function (Vue) {
    Vue.prototype.$add = function (a, b) {
        return a + b;
    };
    Vue.prototype.$toast = toaster_1["default"];
    Vue.component("Toast", Toast_vue_1["default"]);
};
var ToastsPlugin = {
    install: install,
    version: version
};
exports["default"] = ToastsPlugin;
if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(ToastsPlugin);
}
