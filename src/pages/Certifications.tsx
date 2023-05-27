import { Certificate } from "../components";
import { CertificatesItems } from "../types/certificates.interface";
import "./certifications.css";

interface CertificationsPageProps {
  title: string;
  certificates: Array<CertificatesItems>;
}

export const Certifications = ({
  title,
  certificates,
}: CertificationsPageProps) => {
  return (
    <div className="certifications">
      <h1>{title}</h1>
      <div>
        <Certificate certificates={certificates} />
      </div>
    </div>
  );
};
