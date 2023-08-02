export interface CertificatesProps {
  certificates?: Array<CertificatesItems>;
}

export interface CertificatesItems {
  name: string;
  link: string;
  inProgress?: boolean;
  download?: string;
  label?: string;
}
