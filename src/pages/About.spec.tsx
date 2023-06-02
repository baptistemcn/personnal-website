import { render } from "@testing-library/react";
import { About } from "./About";

describe("About Page", () => {
  const mockExperiences = [
    {
      title: "Experience 1",
      presentation: "Presentation 1",
      technologies: [{ name: "Technology 1" }, { name: "Technology 2" }],
    },
    {
      title: "Experience 2",
      presentation: "Presentation 2",
      technologies: [{ name: "Technology 3" }],
    },
  ];
  const mockProps = {
    title: "About",
    subtitle: "Subtitle",
    text: "Lorem ipsum dolor sit amet",
    experiences: mockExperiences,
  };
  it("should render", () => {
    render(<About {...mockProps} />);
  });

  it("should render the title", () => {
    const { getByText } = render(<About {...mockProps} />);

    const titleElement = getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    const { getByText } = render(<About {...mockProps} />);

    const subtitleElement = getByText(mockProps.subtitle);
    expect(subtitleElement).toBeInTheDocument();
  });

  it("should render the text", () => {
    const { getByText } = render(<About {...mockProps} />);

    const textElement = getByText(mockProps.text);
    expect(textElement).toBeInTheDocument();
  });

  it("should render the experiences", () => {
    const { getByText } = render(<About {...mockProps} />);

    const title = getByText(mockProps.title);
    expect(title).toBeInTheDocument();

    const presentation = getByText(mockProps.text);
    expect(presentation).toBeInTheDocument();

    const subtitle = getByText(mockProps.subtitle);
    expect(subtitle).toBeInTheDocument();
  });
});
