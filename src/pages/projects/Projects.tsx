import { useTranslation } from "react-i18next";

import { Project } from "../../components";

import "./projects.css";
import { PROJECTS } from "../../assets/db";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <h1>{t("projects.title")}</h1>
      <div>
        <Project project={PROJECTS} />
      </div>
    </div>
  );
};
