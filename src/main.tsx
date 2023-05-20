import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./i18n.ts";

import App from "./App.tsx";
import { Wrapper } from "./components";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <BrowserRouter>
    <Wrapper>
      <App />
    </Wrapper>
  </BrowserRouter>,
);
