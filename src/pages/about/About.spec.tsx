import { render, waitFor } from "@testing-library/react";
import { About } from "./About";

import * as api from "../../api";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("About Page", () => {
  const mockedExperiences = [
    { id: 1, name: "Experience 1", description: "Description 1" },
    { id: 2, name: "Experience 2", description: "Description 2" },
  ];

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

  it("should render experience component with data", async () => {
    jest.spyOn(api, "getAbout").mockResolvedValue(mockedExperiences);

    const { getByTestId, getByText } = render(<About />);

    const component = getByTestId("about-experience");
    const loaderElement = getByTestId("loader");

    expect(component).toBeTruthy();
    expect(component).toBeInTheDocument();

    expect(loaderElement).toBeTruthy();
    expect(loaderElement).toBeInTheDocument();

    await waitFor(() => {
      expect(loaderElement).not.toBeInTheDocument();
    });

    expect(getByText("Experience 1")).toBeInTheDocument();
    expect(getByText("Experience 2")).toBeInTheDocument();
  });

  it("should render experience component with data", async () => {
    jest
      .spyOn(api, "getAbout")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { getByTestId, getByText } = render(<About />);

    const component = getByTestId("about-experience");
    const loaderElement = getByTestId("loader");

    expect(component).toBeTruthy();
    expect(component).toBeInTheDocument();

    expect(loaderElement).toBeTruthy();
    expect(loaderElement).toBeInTheDocument();

    await waitFor(() => {
      expect(loaderElement).not.toBeInTheDocument();
    });

    expect(getByText("Error !")).toBeInTheDocument();
  });
});
