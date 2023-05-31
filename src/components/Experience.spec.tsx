import { render } from "@testing-library/react";
import { Experience } from "./index";

describe("Experience Component", () => {
  const mockExperiences = [
    {
      title: "Experience 1",
      presentation: "Presentation 1",
      technologies: [{ name: "Tech 1" }, { name: "Tech 2" }],
    },
    {
      title: "Experience 2",
      presentation: "Presentation 2",
      technologies: [{ name: "Tech 3" }, { name: "Tech 4" }],
    },
  ];
  it("should render", () => {
    render(<Experience experiences={mockExperiences} />);
  });
});
