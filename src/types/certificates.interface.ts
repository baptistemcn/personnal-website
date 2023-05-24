export interface CertificatesProps {
  certificates: Array<CertificatesItems>;
}

export interface CertificatesItems {
  name: string;
  link: string;
  download: string;
  label: string;
}
