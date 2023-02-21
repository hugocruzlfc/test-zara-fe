import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PodcastContextProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PodcastContextProvider>
      <App />
    </PodcastContextProvider>
  </React.StrictMode>
);
