import { FlagProps } from "../../types";

import "./flag.css";

export const Flag = ({ nation, description }: FlagProps) => {
  return (
    <>
      <img src={nation} alt={description} />
    </>
  );
};
