import { render } from "@testing-library/react";
import { Certifications } from "./Certifications";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Certifications Component", () => {
  it("should render", () => {
    render(<Certifications />);
  });

  it("should render the title", () => {
    const { getByText } = render(<Certifications />);

    const titleElement = getByText("certifications.title");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the certifications", () => {
    const { getByTestId } = render(<Certifications />);
    const certificateComponent = getByTestId("certifications-list");

    expect(certificateComponent).toBeInTheDocument();
  });
});
