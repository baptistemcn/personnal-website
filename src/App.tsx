import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";

import { Card, Footer, Header } from "./components";

import "./App.css";
import img from "./assets/baptiste-marcon.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

const ICONS = [
  {
    img: `${github}`,
    link: "https://github.com/baptistemcn",
    name: "Github",
  },
  {
    img: `${linkedin}`,
    link: "https://www.linkedin.com/in/baptiste-marcon/",
    name: "Linkedin",
  },
];

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Card
                alt={t("presentation.alt")}
                icons={ICONS}
                img={img}
                text={t("presentation.text")}
                title={t("presentation.title")}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
