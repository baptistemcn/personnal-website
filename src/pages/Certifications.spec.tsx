import { render } from "@testing-library/react";
import { Certifications } from "./Certifications";

describe("Certifications Component", () => {
  const mockCertificates = [
    { name: "Certificate 1", link: "https://example.com/cert1.pdf" },
    { name: "Certificate 2", link: "https://example.com/cert2.pdf" },
  ];

  const mockProps = {
    title: "Certifications",
    certificates: mockCertificates,
  };

  it("should render", () => {
    render(<Certifications {...mockProps} />);
  });

  it("should render the title", () => {
    const { getByText } = render(<Certifications {...mockProps} />);

    const titleElement = getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the certifications", () => {
    const { getByRole } = render(<Certifications {...mockProps} />);

    mockCertificates.forEach((certificate) => {
      const certificateLink = getByRole("link", {
        name: certificate.link,
      });

      expect(certificateLink).toBeInTheDocument();
      expect(certificateLink).toHaveAttribute("href", certificate.link);
    });
  });
});
