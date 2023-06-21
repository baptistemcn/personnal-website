import { CertificatesProps } from "../../types";
import "./certificate.css";

export const Certificate = ({ certificates }: CertificatesProps) => {
  return (
    <>
      {certificates.map((cert, index) => {
        return (
          <article className="certificate" key={index}>
            <h2>{cert.name}</h2>
            <a href={cert.link} target="_blank" rel="noopener">
              {cert.link}
            </a>
            {cert.download && (
              <a href={cert.download} target="_blank" rel="noopener" download>
                <button>{cert.label}</button>
              </a>
            )}
          </article>
        );
      })}
    </>
  );
};
