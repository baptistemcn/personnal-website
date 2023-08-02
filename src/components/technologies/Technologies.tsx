import { TechnologiesProps } from "../../types";

export const Technologies = ({ name }: TechnologiesProps) => {
  return (
    <>
      {name?.map((item, index) => (
        <li key={index}>
          <i>{item.name}</i>
          <span key={`separator-${index}`}>-</span>
        </li>
      ))}
    </>
  );
};
