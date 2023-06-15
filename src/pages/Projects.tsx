import { useTranslation } from "react-i18next";

import "./projects.css";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="project">
      <h1>{t("projects.title")}</h1>
      <p>...</p>
    </div>
  );
};
