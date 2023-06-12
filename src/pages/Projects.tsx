import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return <h1>{t("projects.title")}</h1>;
};
