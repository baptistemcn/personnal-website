import { Icons } from "../components/Icons";

import "./card.css";

interface CardProps {
  alt: string;
  icons: Array<IconsProps>;
  img: string;
  text: string;
  title: string;
}

interface IconsProps {
  img: string;
  link: string;
  name: string;
}

export const Card = ({ alt, icons, img, text, title }: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={img} alt={alt} />
      </div>
      <div className="card-text-container">
        <h1>{title}</h1>
        <p>{text}</p>
        <span className="card-icons-container">
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
        </span>
      </div>
    </div>
  );
};
