import { render } from "@testing-library/react";
import { Home } from "./Home";

describe("Home Page", () => {
  const mockProps = {
    alt: "Card image",
    icons: [
      {
        img: "icon1.png",
        link: "https://example.com/icon1",
        name: "Icon 1",
      },
      {
        img: "icon2.png",
        link: "https://example.com/icon2",
        name: "Icon 2",
      },
    ],
    img: "card-image.png",
    text: "Card text",
    title: "Card Title",
  };

  it("should render", () => {
    render(<Home {...mockProps} />);
  });

  it("should render the card with the img", () => {
    const { getByAltText } = render(<Home {...mockProps} />);

    const imgElement = getByAltText(mockProps.alt);

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockProps.img);
  });

  it("should render the card title", () => {
    const { getByRole } = render(<Home {...mockProps} />);

    const titleElement = getByRole("heading", { name: mockProps.title });

    expect(titleElement).toBeInTheDocument();
  });

  it("should render the card text", () => {
    const { getByText } = render(<Home {...mockProps} />);

    const textElement = getByText(mockProps.text);

    expect(textElement).toBeInTheDocument();
  });

  it("should render the card with correct icons", () => {
    const { getByRole } = render(<Home {...mockProps} />);

    mockProps.icons.forEach((icon) => {
      const iconsElement = getByRole("link", { name: icon.name });

      expect(iconsElement).toBeInTheDocument();
      expect(iconsElement).toHaveAttribute("href", icon.link);
    });
  });
});
