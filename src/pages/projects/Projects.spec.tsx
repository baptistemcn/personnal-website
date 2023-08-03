import { render, waitFor } from "@testing-library/react";
import { Projects } from "./Projects";

import * as api from "../../api";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Projects Page", () => {
  const mockProjectProps = [
    {
      title: "test title 1",
      description: "test presentation 1",
      host: {
        name: "test hosted 1",
        url: "test hosted 1",
      },
    },
    {
      title: "test title 2",
      description: "test presentation 2",
      host: {
        name: "test hosted 2",
        url: "test hosted url 2",
      },
    },
  ];

  it("should render", () => {
    render(<Projects />);
  });

  it("should render the page title", () => {
    const { getByText } = render(<Projects />);

    const titleElement = getByText("projects.title");

    expect(titleElement).toBeInTheDocument();
  });

  it("should render project component", () => {
    const { getByTestId } = render(<Projects />);

    const projectElement = getByTestId("projects");

    expect(projectElement).toBeTruthy();
    expect(projectElement).toBeInTheDocument();
  });

  it("should render project component with data", async () => {
    jest.spyOn(api, "getProjects").mockResolvedValue(mockProjectProps);

    const { getByTestId, getByText } = render(<Projects />);

    const component = getByTestId("projects");
    const loader = getByTestId("loader");

    expect(component).toBeTruthy();
    expect(component).toBeInTheDocument();

    expect(loader).toBeTruthy();
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });

    expect(getByText("test title 1")).toBeInTheDocument();
    expect(getByText("test title 2")).toBeInTheDocument();
  });

  it("should render project component with data", async () => {
    jest
      .spyOn(api, "getProjects")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { getByTestId, getByText } = render(<Projects />);

    const component = getByTestId("projects");
    const loader = getByTestId("loader");

    expect(component).toBeTruthy();
    expect(component).toBeInTheDocument();

    expect(loader).toBeTruthy();
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });

    expect(getByText("Error !")).toBeInTheDocument();
  });
});
