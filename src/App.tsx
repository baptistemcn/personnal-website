import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";

import { Footer, Header } from "./components";
import { About, Certifications, Home, Projects } from "./pages";

import "./App.css";

function App() {
  const { t } = useTranslation();
  const redirect = t("header.links.home");

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
      pages: <About />,
    },
    {
      name: `${t("header.certifications")}`,
      url: `${t("header.links.certifications")}`,
      pages: <Certifications />,
    },
    {
      name: `${t("header.projects")}`,
      url: `${t("header.links.projects")}`,
      pages: <Projects />,
    },
  ];

  return (
    <>
      <Header headers={PAGES} />
      <main>
        <Routes>
          {PAGES.map((element, index) => (
            <Route key={index} path={element.url} element={element.pages} />
          ))}
          <Route path="*" element={<Navigate to={redirect} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
