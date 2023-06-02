import { fireEvent, render } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header Cmponent", () => {
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
});
