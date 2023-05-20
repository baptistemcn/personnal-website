import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./header.css";

export const Header = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <header>
      <ul>
        <a>
          <li>{t("header.home")}</li>
        </a>
        <a>
          <li>{t("header.about")}</li>
        </a>
        <a>
          <li>{t("header.projects")}</li>
        </a>
      </ul>
    </header>
  );
};
