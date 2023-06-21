import { render } from "@testing-library/react";
import { Projects } from "./Projects";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Projects Page", () => {
  it("should render", () => {
    render(<Projects />);
  });

  it("should render the page title", () => {
    const { getByText } = render(<Projects />);

    const titleElement = getByText("projects.title");

    expect(titleElement).toBeInTheDocument();
  });
});
