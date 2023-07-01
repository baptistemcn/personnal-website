import "./card.css";

import { Icons } from "../../components/icons/Icons";
import { CardProps } from "../../types";

export const Card = ({ alt, icons, img, text, title }: CardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={alt} />
      </div>
      <div className="card-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="card-icons">
          {icons.map((icon, index) => (
            <Icons {...icon} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
