import { useTranslation } from "react-i18next";

import { CERTIFICATES } from "../../assets/db";
import { Certificate } from "../../components";

import "./certifications.css";

export const Certifications = () => {
  const { t } = useTranslation();

  return (
    <div className="certifications">
      <h1>{t("certifications.title")}</h1>
      <div data-testid="certifications-list">
        <Certificate certificates={CERTIFICATES.reverse()} />
      </div>
    </div>
  );
};
