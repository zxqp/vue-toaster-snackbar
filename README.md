# vue-toaster-snackbar
Vue Toaster Snackbar is one of the best plugin available with toast and snackbar custom features.  

## Features
 - Snackbar, Block and Action Blocks(WIP)
 - Packed with Responsiveness and Style (Customisable)
 - Progress Bar (enable/disable)
 - Progress Bar pause on Mouse in and resume on Mouse out
 - Timout (default: 3seconds, 0 = infinite)
 - Custom Emit event and value on click 


## Getting started

```bash
# 1. Install with npm
npm install vue-toaster-snackbar

# or Install with yarn
yarn add vue-toaster-snackbar

```

## Usage

```bash
// register the plugin on vue  
import ToastSnackbar from 'vue-toaster-snackbar';  
import "vue-toaster-snackbar/public/toast.scss";  

Vue.use(ToastSnackbar)  

//Declare the component 
./App.vue
<template>
  <div id="app">
    <Toast></Toast>
    ....
  </div>
</template>

// Snackbar  
this.$toast.snackbar("success", "This is a success message")
this.$toast.snackbar("info", "This is an info message")
this.$toast.snackbar("warning", "This is a warning message")
this.$toast.snackbar("error", "This is an error message")  

// Block  
this.$toast.block("success", "Success", "This is a success message description")
this.$toast.block("info", "Info", "This is an info message description")
this.$toast.block("warning", "Warning", "This is a warning message description")
this.$toast.block("error", "Error", "This is an error message description")  

// Custom
ToastMessage  = {
  toastType: string; // line or block
  message: string; // toast message
  description?: string; // toast description if toastType is block
  position: string; // topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, topFull, bottomFull
  timeout: number; // default 3000
  status?: string; // success, info, warning, error
  showProgress?: boolean; // default false
  emitEventName?: string; // on click emit event name
  emitEventValue?: unknown; // value to emit
}

this.$toast.custom(ToastMessage)  

// Action on event
this.$root.$on(this.emitName, (value) => {
      .....
      console.log(value);
      do routing or actions based on value
});

```

# Coming soon  :heart_eyes:

 - Live interactive demo (27-June-2020)
 - Sample Codes and examples (27-June-2020)
 - more docs (27-June-2020)
 - https://unpkg.com/vue-toaster-snackbar (27-June-2020)

# Support
- Encourage by giving me a Star :star:

# License
Released under the MIT [License](./LICENSE)   
