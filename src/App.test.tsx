import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("App", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });

  it("should render header", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const header = getByRole("banner");

    expect(header).toBeInTheDocument();
  });

  it("should render main", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const header = getByRole("main");

    expect(header).toBeInTheDocument();
  });

  it("should render footer", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const header = getByRole("contentinfo");

    expect(header).toBeInTheDocument();
  });
});
