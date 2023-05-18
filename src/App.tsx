import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "./components";

import "./App.css";
import img from "./assets/baptiste-marcon.png";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <>
      <main>
        <Card
          alt={t("presentation.alt")}
          img={img}
          text={t("presentation.text")}
          title={t("presentation.title")}
        />
      </main>
    </>
  );
}

export default App;
