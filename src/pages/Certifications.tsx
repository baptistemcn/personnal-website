import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { CERTIFICATES } from "../assets/db";
import { Certificate } from "../components";

import "./certifications.css";

export const Certifications = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <div className="certifications">
      <h1>{t("certifications.title")}</h1>
      <div data-testid="certifications-list">
        <Certificate certificates={CERTIFICATES} />
      </div>
    </div>
  );
};
