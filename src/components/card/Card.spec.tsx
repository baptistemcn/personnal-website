import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card Component", () => {
  const mockCardProps = {
    alt: "Card Image",
    icons: [
      { img: "icon1.png", link: "https://example.com", name: "Icon 1" },
      { img: "icon2.png", link: "https://example.com", name: "Icon 2" },
    ],
    img: "image.png",
    text: "Card Text",
    title: "Card Title",
  };

  it("should render", () => {
    render(<Card {...mockCardProps} />);
  });

  it("should render the image", () => {
    const { getByAltText } = render(<Card {...mockCardProps} />);
    const imageElement = getByAltText(mockCardProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockCardProps.img);
    expect(imageElement).toHaveAttribute("alt", mockCardProps.alt);
  });

  it("should render title", () => {
    const { getByText } = render(<Card {...mockCardProps} />);
    const titleElement = getByText(mockCardProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render text", () => {
    const { getByText } = render(<Card {...mockCardProps} />);
    const textElement = getByText(mockCardProps.text);
    expect(textElement).toBeInTheDocument();
  });

  it("should render card icons", () => {
    const { getAllByRole } = render(<Card {...mockCardProps} />);
    const iconsElement = getAllByRole("link");
    expect(iconsElement.length).toBe(mockCardProps.icons.length);

    mockCardProps.icons.forEach((icon, index) => {
      const iconImage = iconsElement[index].querySelector("img");
      expect(iconImage).toHaveAttribute("src", icon.img);
      expect(iconImage).toHaveAttribute("alt", icon.name);
    });
  });
});
