import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n.ts";

import App from "./App.tsx";
import { Wrapper } from "./components";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
);
