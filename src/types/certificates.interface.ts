export interface CertificatesProps {
  certificates: Array<CertificatesItems>;
}

export interface CertificatesItems {
  name: string;
  link: string;
  finished?: boolean;
  download?: string;
  label?: string;
}
