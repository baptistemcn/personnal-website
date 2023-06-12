import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./i18n.ts";

import App from "./App.tsx";
import { Wrapper } from "./components";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Wrapper>
        <App />
      </Wrapper>
    </I18nextProvider>
  </BrowserRouter>,
);
