import "./wrapper.css";

import { WrapperProps } from "../../types/wrapper.interface";

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="wrapper" data-testid="wrapper">
      {children}
    </div>
  );
};
