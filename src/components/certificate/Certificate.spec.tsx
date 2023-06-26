import { render } from "@testing-library/react";
import { Certificate } from "./Certificate";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Certificate Component", () => {
  const mockCertificateProps = [
    {
      name: "Certificate 1",
      link: "https://example.com/cert1",
      download: "https://example.com/cert1.pdf",
      finished: true,
      label: "Download Certificate 1",
    },
    {
      name: "Certificate 2",
      link: "https://example.com/cert2",
      finished: true,
      download: "",
      label: "",
    },
    {
      name: "Certificate 3",
      link: "https://example.com/cert3",
      finished: false,
      download: "",
      label: "",
    },
  ];

  it("should render", () => {
    render(<Certificate certificates={mockCertificateProps} />);
  });

  it("should render certifications", () => {
    const { container } = render(
      <Certificate certificates={mockCertificateProps} />,
    );
    const certificationsElements = container.querySelectorAll(".certificate");
    expect(certificationsElements.length).toBe(mockCertificateProps.length);
  });

  it("should render certification name", () => {
    const { queryByText } = render(
      <Certificate certificates={mockCertificateProps} />,
    );
    mockCertificateProps.forEach((certificate) => {
      const nameElement = queryByText(certificate.name);
      expect(nameElement).toBeInTheDocument();
    });
  });

  it("should render certification link", () => {
    const { getByText } = render(
      <Certificate certificates={mockCertificateProps} />,
    );

    mockCertificateProps.forEach((certificate) => {
      const linkElement = getByText(certificate.link).closest("a");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", certificate.link);
    });
  });

  it("should render an inprogress label if certification is not finished", () => {
    const { getByText } = render(
      <Certificate certificates={mockCertificateProps} />,
    );

    const labelElement = getByText("certifications.inProgress.label");
    expect(labelElement).toBeInTheDocument();
  });

  it("should render download buttons for certificates with download links", () => {
    const { getByRole } = render(
      <Certificate certificates={mockCertificateProps} />,
    );
    const certificateWithDownload = mockCertificateProps.find(
      (certificate) => certificate.download,
    );
    const downloadButtonElement = getByRole("link", {
      name: certificateWithDownload?.label,
    });
    expect(downloadButtonElement).toBeInTheDocument();
    expect(downloadButtonElement).toHaveAttribute(
      "href",
      certificateWithDownload?.download,
    );
  });

  it("should render download buttons for certificate without download links", () => {
    const { queryAllByRole } = render(
      <Certificate certificates={mockCertificateProps} />,
    );
    const certificateWithDownload = mockCertificateProps.slice(1);
    certificateWithDownload.forEach((certificate) => {
      const downloadButtonElements = queryAllByRole("button", {
        name: certificate.label,
      });
      expect(downloadButtonElements.length).toBe(0);
    });
  });
});
