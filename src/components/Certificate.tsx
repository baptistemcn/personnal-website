import { CertificatesProps } from "../types";
import "./certificate.css";

export const Certificate = ({ certificates }: CertificatesProps) => {
  return (
    <>
      {certificates.map((cert, index) => {
        return (
          <article className="certificate-container" key={index}>
            <h2>{cert.name}</h2>
            <a href={cert.link}>{cert.link}</a>
            <a href={cert.download} download>
              <button> {cert.label}</button>
            </a>
          </article>
        );
      })}
    </>
  );
};
