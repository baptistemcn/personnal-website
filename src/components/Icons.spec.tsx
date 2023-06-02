import { render } from "@testing-library/react";
import { Icons } from "./Icons";

describe("Icons Component", () => {
  const mockIcon = {
    img: "icon.png",
    link: "https://example.com",
    name: "Example Icon",
  };

  it("should render", () => {
    render(<Icons {...mockIcon} />);
  });

  it("should render icon with the correct img", () => {
    const { getByRole } = render(<Icons {...mockIcon} />);

    const iconImg = getByRole("img", { name: mockIcon.name });
    expect(iconImg).toBeInTheDocument();
    expect(iconImg).toHaveAttribute("src", mockIcon.img);
    expect(iconImg).toHaveAttribute("alt", mockIcon.name);
  });

  it("should render with the correct link", () => {
    const { getByRole } = render(<Icons {...mockIcon} />);

    const linkElement = getByRole("link", { name: mockIcon.name });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockIcon.link);
  });

  it("should render icon with target and rel attributes", () => {
    const { getByRole } = render(<Icons {...mockIcon} />);

    const linkElement = getByRole("link", { name: mockIcon.name });
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener");
  });
});
