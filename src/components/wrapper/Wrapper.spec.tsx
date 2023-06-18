import { render } from "@testing-library/react";
import { Wrapper } from "./Wrapper";

describe("Wrapper Component", () => {
  const wrapperMock = "S-CREW";
  it("should render", () => {
    render(<Wrapper>{undefined}</Wrapper>);
  });

  it("should render children inside wrapper", () => {
    const { getByTestId } = render(<Wrapper>{wrapperMock}</Wrapper>);

    const wrapperElement = getByTestId("wrapper");
    expect(wrapperElement).toBeInTheDocument();
    expect(wrapperElement).toHaveTextContent(wrapperMock);
  });
});
