import { render, waitFor } from "@testing-library/react";
import { Certifications } from "./Certifications";

import * as api from "../../api";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Certifications Component", () => {
  const mockCertifications = [
    {
      id: 1,
      name: "Certif 1",
      link: "https://lorem.ipsum/1",
      inProgress: true,
    },
    {
      id: 2,
      name: "Certif 2",
      link: "https://lorem.ipsum/2",
      inProgress: false,
    },
    {
      id: 2,
      name: "Certif 3",
      link: "https://lorem.ipsum/3",
      inProgress: false,
    },
  ];

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

  it("should render certifications component with data", async () => {
    jest.spyOn(api, "getCertifications").mockResolvedValue(mockCertifications);

    const { getByTestId, getByText } = render(<Certifications />);

    const component = getByTestId("certifications");
    const loaderElement = getByTestId("loader");

    expect(component).toBeTruthy();
    expect(component).toBeInTheDocument();

    expect(loaderElement).toBeTruthy();
    expect(loaderElement).toBeInTheDocument();

    await waitFor(() => {
      expect(loaderElement).not.toBeInTheDocument();
    });

    expect(getByText("Certif 1")).toBeInTheDocument();
    expect(getByText("Certif 2")).toBeInTheDocument();
    expect(getByText("Certif 3")).toBeInTheDocument();
  });

  it("should render certifications component with error", async () => {
    jest
      .spyOn(api, "getCertifications")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { getByTestId, getByText } = render(<Certifications />);

    const component = getByTestId("certifications");
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
