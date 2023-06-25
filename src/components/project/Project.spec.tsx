import { render } from "@testing-library/react";
import { Project } from "./Project";

describe("Project Component", () => {
  const mockProjectProps = [
    {
      name: "test title 1",
      presentation: "test presentation 1",
      github: {
        name: "test github 1",
        url: "test github url 1",
      },
      hosted: {
        name: "test hosted 1",
        url: "test hosted 1",
      },
    },
    {
      name: "test title 2",
      presentation: "test presentation 2",
      github: {
        name: "test github 2",
        url: "test github url 2",
      },
      hosted: {
        name: "test hosted 1",
        url: "test hosted url 1",
      },
    },
  ];

  it("should render", () => {
    render(<Project project={mockProjectProps} />);
  });

  it("should render projects", () => {
    const { container } = render(<Project project={mockProjectProps} />);

    const projectElements = container.querySelectorAll(".project");
    expect(projectElements.length).toBe(mockProjectProps.length);
  });

  it("should render project name", () => {
    const { queryByText } = render(<Project project={mockProjectProps} />);

    mockProjectProps.forEach((project) => {
      const nameElement = queryByText(project.name);
      expect(nameElement).toBeInTheDocument();
    });
  });

  it("should render a presentation text", () => {
    const { queryByText } = render(<Project project={mockProjectProps} />);

    mockProjectProps.forEach((project) => {
      const presentationElement = queryByText(project.presentation);
      expect(presentationElement).toBeInTheDocument();
    });
  });

  it("should render a github link", () => {
    const { getByRole } = render(<Project project={mockProjectProps} />);

    const projetWithGithubLink = mockProjectProps.find(
      (project) => project.github,
    );
    const githubLinkElement = getByRole("link", {
      name: projetWithGithubLink?.github.name,
    });

    expect(githubLinkElement).toBeInTheDocument();
    expect(githubLinkElement).toHaveAttribute(
      "href",
      projetWithGithubLink?.github.url,
    );
  });

  it("should render a hosted link", () => {
    const { getByRole } = render(<Project project={mockProjectProps} />);

    const projectWithHostedLink = mockProjectProps.find(
      (project) => project.hosted,
    );
    const hostedLinkElement = getByRole("link", {
      name: projectWithHostedLink?.github.name,
    });

    expect(hostedLinkElement).toBeInTheDocument();
    expect(hostedLinkElement).toHaveAttribute(
      "href",
      projectWithHostedLink?.github.url,
    );
  });
});
