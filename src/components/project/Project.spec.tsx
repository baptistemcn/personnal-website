import { render } from "@testing-library/react";
import { Project } from "./Project";

describe("Project Component", () => {
  const mockProjectProps = [
    {
      title: "test title 1",
      description: "test presentation 1",
      host: {
        name: "test hosted 1",
        url: "test hosted 1",
      },
    },
    {
      title: "test title 2",
      description: "test presentation 2",
      host: {
        name: "test hosted 2",
        url: "test hosted url 2",
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
      const nameElement = queryByText(project.title);
      expect(nameElement).toBeInTheDocument();
    });
  });

  it("should render a presentation text", () => {
    const { queryByText } = render(<Project project={mockProjectProps} />);

    mockProjectProps.forEach((project) => {
      const presentationElement = queryByText(project.description);
      expect(presentationElement).toBeInTheDocument();
    });
  });

  it("should render a github link", () => {
    const { getByRole } = render(<Project project={mockProjectProps} />);

    const projetWithGithubLink = mockProjectProps.find(
      (project) => project.host,
    );
    const githubLinkElement = getByRole("link", {
      name: projetWithGithubLink?.host.name,
    });

    expect(githubLinkElement).toBeInTheDocument();
    expect(githubLinkElement).toHaveAttribute(
      "href",
      projetWithGithubLink?.host.url,
    );
  });

  it("should render a hosted link", () => {
    const { getByRole } = render(<Project project={mockProjectProps} />);

    const projectWithHostedLink = mockProjectProps.find(
      (project) => project.host,
    );
    const hostedLinkElement = getByRole("link", {
      name: projectWithHostedLink?.host.url,
    });

    expect(hostedLinkElement).toBeInTheDocument();
    expect(hostedLinkElement).toHaveAttribute(
      "href",
      projectWithHostedLink?.host.url,
    );
  });
});
