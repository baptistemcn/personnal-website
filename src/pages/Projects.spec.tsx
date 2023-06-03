import { render } from "@testing-library/react";
import { Projects } from "./Projects";

describe("Projects Page", () => {
  const mockProps = {
    title: "Title 1",
  };
  it("should render", () => {
    render(<Projects {...mockProps} />);
  });

  it("should render the page title", () => {
    const { getByText } = render(<Projects {...mockProps} />);

    const titleElement = getByText(mockProps.title);

    expect(titleElement).toBeInTheDocument();
  });
});
