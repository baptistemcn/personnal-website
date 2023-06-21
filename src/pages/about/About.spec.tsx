import { render } from "@testing-library/react";
import { About } from "./About";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("About Page", () => {
  it("should render", () => {
    render(<About />);
  });

  it("should render the title", () => {
    const { getByText } = render(<About />);

    const titleElement = getByText("about.title");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    const { getByText } = render(<About />);

    const subtitleElement = getByText("about.subtitle");
    expect(subtitleElement).toBeInTheDocument();
  });

  it("should render the text", () => {
    const { getByText } = render(<About />);

    const textElement = getByText("about.text");
    expect(textElement).toBeInTheDocument();
  });

  it("should render experience component", () => {
    const { getByTestId } = render(<About />);
    const experienceComponent = getByTestId("about-experience");

    expect(experienceComponent).toBeInTheDocument();
  });
});
