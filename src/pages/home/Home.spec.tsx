import { render } from "@testing-library/react";
import { Home } from "./Home";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Home Page", () => {
  it("should render", () => {
    render(<Home />);
  });

  it("should render the card with the img", () => {
    const { getByAltText } = render(<Home />);

    const imgElement = getByAltText("presentation.alt");

    expect(imgElement).toBeInTheDocument();
  });

  it("should render the card title", () => {
    const { getByText } = render(<Home />);

    const imgElement = getByText("presentation.title");

    expect(imgElement).toBeInTheDocument();
  });

  it("should render the card text", () => {
    const { getByText } = render(<Home />);

    const imgElement = getByText("presentation.text");

    expect(imgElement).toBeInTheDocument();
  });
});
