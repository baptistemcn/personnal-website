import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";

import { Footer, Header } from "./components";
import { Card } from "./pages";

import "./App.css";

import img from "./assets/baptiste-marcon.png";
import { ICONS } from "./assets/db";

function App() {
  const { t, i18n } = useTranslation();
  const urls = i18n.resolvedLanguage;

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  const PAGES: Array<{
    name: string;
    url: string;
    components: ReactNode;
  }> = [
    {
      name: `${t("header.home")}`,
      url: `${t("header.links.home")}`,
      components: (
        <Card
          alt={t("presentation.alt")}
          icons={ICONS}
          img={img}
          text={t("presentation.text")}
          title={t("presentation.title")}
        />
      ),
    },
    {
      name: `${t("header.about")}`,
      url: `${t("header.links.about")}`,
      components: null,
    },
    {
      name: `${t("header.projects")}`,
      url: `${t("header.links.projects")}`,
      components: null,
    },
  ];

  return (
    <>
      <Header headers={PAGES} />
      <main>
        <Routes>
          {PAGES.map((element, index) => {
            return (
              <Route
                key={index}
                path={element.url}
                element={element.components}
              />
            );
          })}
          <Route
            path="*"
            element={<Navigate to={urls === "fr" ? "/fr/" : "/en/"} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
