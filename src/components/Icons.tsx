import "./icons.css";

interface IconsProps {
  img: string;
  link: string;
  name: string;
}

export const Icons = ({ img, link, name }: IconsProps) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener">
        <img className="icons-img" src={img} alt={name} />
      </a>
    </>
  );
};
