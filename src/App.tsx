import { useEffect } from "react";
import "./App.css";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  console.log(process.env.NODE_ENV);

  return (
    <>
      <h1>Baptiste Marcon</h1>

      <p>{t("presentation.title")}</p>
    </>
  );
}

export default App;
