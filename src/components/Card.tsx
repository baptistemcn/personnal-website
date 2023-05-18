import "./card.css";

interface CardProps {
  alt: string;
  img: string;
  text: string;
  title: string;
}

export const Card = ({ alt, img, text, title }: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={img} alt={alt} />
      </div>
      <div className="card-text-container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
