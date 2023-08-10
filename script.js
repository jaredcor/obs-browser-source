// var ComfyJS = require("comfy.js");

ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (command === "flip") {
      const arya = document.getElementById("arya")
      arya.classList.add("rotate")
      setTimeout(() => {
        arya.classList.remove("rotate")
      }, 1000)
    }
  }

  ComfyJS.Init("222swim");