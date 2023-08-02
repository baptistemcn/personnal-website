import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getCertifications } from "../../api";
import { Certificate, Loader } from "../../components";
import { CertificatesItems } from "../../types";
import "./certifications.css";

export const Certifications = () => {
  const [certificates, setCertificates] = useState<Array<CertificatesItems>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    getCertifications()
      .then((data) => {
        setCertificates(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="certifications" data-testid="certifications">
      <h1>{t("certifications.title")}</h1>
      <div data-testid="certifications-list">
        {loading && <Loader />}
        {error && <p>Error !</p>}
        <Certificate certificates={certificates} />
      </div>
    </div>
  );
};
