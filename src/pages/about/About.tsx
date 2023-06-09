import { useTranslation } from "react-i18next";

import { Experience } from "../../components";

import { experiences } from "../../assets/db";

import "./about.css";

export const About = () => {
  const { i18n, t } = useTranslation();

  const lang = i18n.language;

  const EXPERIENCES = experiences(lang);

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
