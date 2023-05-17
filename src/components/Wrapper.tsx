import { ReactNode } from "react";

import "./wrapper.css";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div>{children}</div>;
};
