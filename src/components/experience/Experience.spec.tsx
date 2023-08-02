import { render } from "@testing-library/react";
import { Experience } from "./Experience";

describe("Experience Component", () => {
  const mockExperiences = [
    {
      name: "Experience 1",
      presentation: "Presentation 1",
      duration: "Janv. 2022",
      technologies: [{ name: "Tech 1" }, { name: "Tech 2" }],
    },
    {
      name: "Experience 2",
      presentation: "Presentation 2",
      duration: "Janv. 2023",
      technologies: [{ name: "Tech 3" }, { name: "Tech 4" }],
    },
  ];
  it("should render", () => {
    render(<Experience experiences={mockExperiences} />);
  });

  it("should renders experiences", () => {
    const { container } = render(<Experience experiences={mockExperiences} />);

    const experienceElements = container.querySelectorAll(".experience");

    expect(experienceElements.length).toBe(mockExperiences.length);
  });

  it("should render experiences details", () => {
    const { getByText } = render(<Experience experiences={mockExperiences} />);

    const experienceTitles = mockExperiences.map(
      (experience) => experience.name,
    );

    experienceTitles.forEach((title) => {
      expect(getByText(title)).toBeInTheDocument();
    });
  });

  it("should render experiences presentation", () => {
    const { getByText } = render(<Experience experiences={mockExperiences} />);

    const experiencePresentations = mockExperiences.map(
      (experience) => experience.presentation,
    );

    experiencePresentations.forEach((presentation) => {
      expect(getByText(presentation)).toBeInTheDocument();
    });
  });

  it("should render experiences duration", () => {
    const { getByText } = render(<Experience experiences={mockExperiences} />);

    const experienceDuration = mockExperiences.map(
      (experience) => experience.duration,
    );

    experienceDuration.forEach((duration) => {
      expect(getByText(duration)).toBeInTheDocument();
    });
  });

  it("should render technologies for each experiences", () => {
    const { container } = render(<Experience experiences={mockExperiences} />);

    const technologyList = container.querySelectorAll(".experience ul");

    expect(technologyList.length).toBe(mockExperiences.length);

    mockExperiences.forEach((experience, index) => {
      const technologyItems = technologyList[index].querySelectorAll("li");
      expect(technologyItems.length).toBe(experience.technologies.length);
    });
  });
});
