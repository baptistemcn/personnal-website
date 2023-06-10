import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";

import { Footer, Header } from "./components";
import { About, Certifications, Home, Projects } from "./pages";

import "./App.css";

import { CERTIFICATES, EXPERIENCES, EXPERIENCES_EN } from "./assets/db";

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
    pages: ReactNode;
  }> = [
    {
      name: `${t("header.home")}`,
      url: `${t("header.links.home")}`,
      pages: <Home />,
    },
    {
      name: `${t("header.about")}`,
      url: `${t("header.links.about")}`,
      pages: (
        <About
          subtitle={t("about.subtitle")}
          title={t("about.title")}
          text={t("about.text")}
          experiences={urls === "fr" ? EXPERIENCES : EXPERIENCES_EN}
        />
      ),
    },
    {
      name: `${t("header.certifications")}`,
      url: `${t("header.links.certifications")}`,
      pages: (
        <Certifications
          certificates={CERTIFICATES}
          title={t("certifications.title")}
        />
      ),
    },
    {
      name: `${t("header.projects")}`,
      url: `${t("header.links.projects")}`,
      pages: <Projects title={t("projects.title")} />,
    },
  ];

  return (
    <>
      <Header headers={PAGES} />
      <main>
        <Routes>
          {PAGES.map((element, index) => {
            return (
              <Route key={index} path={element.url} element={element.pages} />
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
