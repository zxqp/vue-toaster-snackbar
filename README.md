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

## Getting started

```bash
# Install with npm
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

# Coming soon  😍

- Live interactive demo (27-June-2020)
- Sample Codes and examples (27-June-2020)
- more docs (27-June-2020)
- https://unpkg.com/vue-toaster-snackbar (27-June-2020)

# Support

- Encourage by giving me a [STAR ⭐️](https://github.com/zxqp/vue-toaster-snackbar)

# License

Released under the [MIT License](./LICENSE)
