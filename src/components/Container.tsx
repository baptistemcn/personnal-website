import { ReactNode } from "react";

import "./container.css";

interface containerProps {
  children: ReactNode;
}

export const Container = ({ children }: containerProps) => {
  return <div>{children}</div>;
};
