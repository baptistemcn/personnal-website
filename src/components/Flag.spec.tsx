import { render } from "@testing-library/react";
import { Flag } from "./Flag";
import { FRENCH_FLAG, US_FLAG } from "../assets/db";

describe("Flag Component", () => {
  it("should render", () => {
    render(<Flag nation={""} />);
  });

  it("should render the US flag with the 'lang' prop is 'fr'", () => {
    const { getByRole } = render(<Flag nation={FRENCH_FLAG} />);
    const flagImage = getByRole("img");
    expect(flagImage).toBeInTheDocument();
    expect(flagImage.getAttribute("src")).toContain(
      "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==",
    );
  });

  it("should render the French flag with the 'lang' prop is 'en'", () => {
    const { getByRole } = render(<Flag nation={US_FLAG} />);
    const flagImage = getByRole("img");
    expect(flagImage).toBeInTheDocument();
    expect(flagImage.getAttribute("src")).toContain(
      "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nO3YwQ3AIAxD0SyGMgPDshUSYoL01gHoiep9yQMgILEdAQDAH8g+6kRz7U+qFkdygHQD2xPyidMU2sboi0W2bOJiJZKZ29xosdNdoCmJrImUQ6ifWolQq5Ria2nmSrWYt5S7AADEhTw3HH3PGGqzVQAAAABJRU5ErkJggg==",
    );
  });
});
