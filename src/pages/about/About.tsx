import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { getAbout } from "../../api";
import { Experience, Loader } from "../../components";
import { ExperienceItem } from "../../types";
import "./about.css";

export const About = () => {
  const [about, setAbout] = useState<Array<ExperienceItem>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const { i18n, t } = useTranslation();

  const lang = i18n.language;

  useEffect(() => {
    getAbout(lang)
      .then((data) => {
        setAbout(data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [lang]);

  return (
    <div className="about">
      <h1>{t("about.title")}</h1>
      <div className="about-presentation">
        <p>{t("about.text")}</p>
      </div>
      <h2>{t("about.subtitle")}</h2>
      <div className="about-experience" data-testid="about-experience">
        {loading && <Loader />}
        {error && <p>Error !</p>}
        <Experience experiences={about} />
      </div>
    </div>
  );
};
