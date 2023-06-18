import "./icons.css";

import { IconsProps } from "../../types/icons.interface";

export const Icons = ({ img, link, name }: IconsProps) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener">
        <img className="icons-img" src={img} alt={name} />
      </a>
    </>
  );
};
