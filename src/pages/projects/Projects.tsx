import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getProjects } from "../../api";
import { Loader, Project } from "../../components";
import { ProjectItem } from "../../types";

import "./projects.css";

export const Projects = () => {
  const [project, SetProject] = useState<Array<ProjectItem>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    getProjects()
      .then((data) => {
        SetProject(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="projects">
      <h1>{t("projects.title")}</h1>
      <div data-testid="projects">
        {loading && <Loader />}
        {error && <p>Error !</p>}
        <Project project={project} />
      </div>
    </div>
  );
};
