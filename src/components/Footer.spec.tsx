import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  it("should render", () => {
    render(<Footer />);
  });

  it("should render with the current year", () => {
    const { getByText } = render(<Footer />);
    const year = new Date().getFullYear();
    const footerText = getByText(`© ${year} Baptiste Marcon. Made with ❤️`);
    expect(footerText).toBeInTheDocument();
  });
});
