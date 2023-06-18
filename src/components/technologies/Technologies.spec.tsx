import { render } from "@testing-library/react";
import { Technologies } from "./Technologies";

describe("Technologies Component", () => {
  const technologiesMock = [{ name: "Tech 1" }, { name: "Tech 2" }];

  it("should render", () => {
    render(<Technologies name={technologiesMock} />);
  });

  it("should render technologies name", () => {
    const { getByText } = render(<Technologies name={technologiesMock} />);

    const technologyNames = technologiesMock.map(
      (technology) => technology.name,
    );

    technologyNames.forEach((name) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
