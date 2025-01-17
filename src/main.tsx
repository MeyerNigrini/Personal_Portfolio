import React from "react";
import ReactDom from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css'
import App from "./App";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <App/>
    </MantineProvider>
  </React.StrictMode>
);