import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Experience } from "../components";

import { EXPERIENCES } from "../assets/db";

import "./about.css";

export const About = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <div className="about">
      <h1>{t("about.title")}</h1>
      <div className="about-presentation">
        <p>{t("about.text")}</p>
      </div>
      <h2>{t("about.subtitle")}</h2>
      <div className="about-experience" data-testid="about-experience">
        <Experience experiences={EXPERIENCES} />
      </div>
    </div>
  );
};
