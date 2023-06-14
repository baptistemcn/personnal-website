import { fireEvent, render } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-i18next", () => ({
  ...jest.requireActual("react-i18next"),
  useTranslation: () => ({
    i18n: { language: "en", changeLanguage: jest.fn() },
    t: (key: unknown) => key,
  }),
}));

describe("Header Component", () => {
  const headerMockProps = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  it("should render", () => {
    render(
      <BrowserRouter>
        <Header headers={headerMockProps} />
      </BrowserRouter>,
    );
  });

  it("should render with navigation links", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header headers={headerMockProps} />
      </BrowserRouter>,
    );

    headerMockProps.forEach((header) => {
      const linkElement = getByRole("link", { name: header.name });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.getAttribute("href")).toBe(header.url);
    });
  });

  it("should render active nav when click in on", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header headers={headerMockProps} />
      </BrowserRouter>,
    );

    const firstNavItem = getByRole("link", { name: headerMockProps[0].name });
    fireEvent.click(firstNavItem);
    expect(firstNavItem.parentElement).toHaveClass("active");

    const secondNavItem = getByRole("link", { name: headerMockProps[1].name });
    fireEvent.click(secondNavItem);

    expect(firstNavItem.parentElement).not.toHaveClass("active");
    expect(secondNavItem.parentElement).toHaveClass("active");
  });

  it("should render a flag in language button", () => {
    const flagMock =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nO3YwQ3AIAxD0SyGMgPDshUSYoL01gHoiep9yQMgILEdAQDAH8g+6kRz7U+qFkdygHQD2xPyidMU2sboi0W2bOJiJZKZ29xosdNdoCmJrImUQ6ifWolQq5Ria2nmSrWYt5S7AADEhTw3HH3PGGqzVQAAAABJRU5ErkJggg==";

    const { getByTestId } = render(
      <BrowserRouter>
        <Header headers={headerMockProps} />
      </BrowserRouter>,
    );

    const languageButton = getByTestId("lang-switch");
    expect(languageButton).toBeInTheDocument();

    const flagComponent = languageButton.querySelector("img");

    expect(flagComponent?.src).toEqual(flagMock);
  });

  it("should change language on language button click", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header headers={headerMockProps} />
      </BrowserRouter>,
    );

    const languageButton = getByTestId("lang-switch");

    expect(languageButton).toBeInTheDocument();

    const clicked = fireEvent.click(languageButton);

    expect(clicked).toBeTruthy();
  });

  it("should render an aria-label with translate or empty", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header headers={headerMockProps} />
      </BrowserRouter>,
    );

    const expectedAriaLabel = "button.lang.label";

    const button = getByRole("button");

    const buttonArialLabel = button.getAttribute("aria-label");

    expect(buttonArialLabel).toEqual(expectedAriaLabel);
  });
});
