import "./card.css";

import { Icons } from "../components/Icons";
import { CardProps } from "../types";

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
          {icons.map((icon, index) => {
            return (
              <Icons
                img={icon.img}
                link={icon.link}
                name={icon.name}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
