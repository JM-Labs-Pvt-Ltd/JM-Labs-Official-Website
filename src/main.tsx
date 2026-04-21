import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app/App";
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const bootSplash = document.getElementById("boot-splash");
if (bootSplash) {
  requestAnimationFrame(() => {
    bootSplash.classList.add("boot-splash--hide");
    window.setTimeout(() => {
      bootSplash.remove();
    }, 320);
  });
}
