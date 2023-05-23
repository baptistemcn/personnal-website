import { TechnologiesProps } from "../types/technologies.interface";

export const Technologies = ({ name }: TechnologiesProps) => {
  return (
    <>
      {name.map((item, index) => {
        <ul key={index}>
          <li>{item.name}</li>
          <span>-</span>
        </ul>;
      })}
    </>
  );
};
