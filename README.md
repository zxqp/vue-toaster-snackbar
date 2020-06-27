# vue-toaster-snackbar

<img src="https://badgen.net/npm/v/vue-toaster-snackbar"> <img src="https://badgen.net/npm/dw/vue-toaster-snackbar"> <img src="https://badgen.net/npm/license/vue-toaster-snackbar">

Vue Toaster Snackbar is one of the best plugin available with toast and snackbar custom features.

## Features

- Snackbar, Block and Action Blocks(WIP)
- Packed with Responsiveness and Style (Customisable)
- Progress Bar (enable/disable)
- Progress Bar pause on mouseover and resume on mouseleave
- Timeout (default: 3 seconds, infinite: 0)
- On click actions with custom emit event and value

## Getting Started

### Install using npm or yarn

```bash
# Install using npm
npm install vue-toaster-snackbar

# or Install with yarn
yarn add vue-toaster-snackbar

# register the plugin on vue ./main.js or ./main.ts   
import ToastSnackbar from 'vue-toaster-snackbar';  
import "vue-toaster-snackbar/public/toast.scss";  

Vue.use(ToastSnackbar)  

# declare the component in ./App.vue  
<template>
  <div id="app">
    <Toast></Toast>
    ....
  </div>
</template>

```

### Direct Installation

[CodeSandbox example](https://)

```
<!DOCTYPE html>
<html>  
  <head>  
    <title>ToastSnackbar Vue app</title>  
    <script src="https://unpkg.com/vue"></script>  
    <script src="https://unpkg.com/vue-toaster-snackbar@1.0.2/dist/vueToaster.umd.js"></script>  
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/vue-toaster-snackbar@1.0.2/public/toast.css" />  
  </head>
  <body>
    <div id="app">
      <Toast></Toast>
      {{ message }}
      <button v-on:click="clickMe">Click me!</button>
    </div>

    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: "Hello Vue!"
        },
        methods: {
          clickMe() {
            this.$toast.snackbar("success", "This is a success message");
          }
        },
      });
    </script>
  </body>
</html>
```

## Usage

- Use the following commands from any component to trigger Toast,

```bash
# Snackbar  
this.$toast.snackbar("success", "This is a success message")
this.$toast.snackbar("info", "This is an info message")
this.$toast.snackbar("warning", "This is a warning message")
this.$toast.snackbar("error", "This is an error message")  

# Block  
this.$toast.block("success", "Success", "This is a success message description")
this.$toast.block("info", "Info", "This is an info message description")
this.$toast.block("warning", "Warning", "This is a warning message description")
this.$toast.block("error", "Error", "This is an error message description")  

# Custom

// Custom Message Structure
ToastMessage  = {
  toastType: string; // snackbar or block
  message: string; // toast message
  description?: string; // toast description if toastType is block
  position: string; // topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, topFull, bottomFull
  timeout: number; // default 3000, 0 is infinite
  status?: string; // success, info, warning, error
  showProgress?: boolean; // true/false
  emitEventName?: string; // event name to trigger on click emit  
  emitEventValue?: unknown; // value to be emitted on click
}

this.$toast.custom(ToastMessage)  

# Listen and execute your action from any component
this.$root.$on("emitEventName", (value) => {
      console.log(value);
      .....
      routing or any custom actions based on value
});

```

# Coming soon 😍

- [Please check here for upcoming features and updates](https://github.com/zxqp/vue-toaster-snackbar/projects/1)

# Support

[Give me a Star⭐️](https://github.com/zxqp/vue-toaster-snackbar)

[Buy me a ☕️!](https://www.buymeacoffee.com/zxqp)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/sureshbabusakthi)

# License

Released under the [MIT License](./LICENSE)
