# vue-toaster-snackbar
Vue Toaster Snackbar is on of the best plugin available with toast and snackbar custom features.  

## Features
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

Vue.use(ToastSnackbar)  

// Snackbar  

this.$toast.snackbar("success", "This is a success message")

this.$toast.snackbar("info", "This is an info message")

this.$toast.snackbar("warning", "This is a warning message")

this.$toast.snackbar("error", "This is an error message")  

// Block  

this.$toast.block("success", "This is a success message")

this.$toast.block("info", "This is an info message")

this.$toast.block("warning", "This is a warning message")

this.$toast.block("error", "This is an error message")  

// Custom

ToastMessage  = {
  toastType: string; // line or block
  message: string; // toast message
  description?: string; // toast description if toastType is block
  position: string; // topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, topFull, bottomFull
  timeout: number; // default 3000
  status?: string; // success, info, warning, error
  showProgress?: boolean; // default false
  emitEventName?: string; // on click emit event
  emitEventValue?: unknown; // value to emit
}

this.$toast.custom(ToastMessage)  

```
