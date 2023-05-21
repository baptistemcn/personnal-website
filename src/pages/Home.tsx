import { Card } from "../components";

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

export const Home = ({ alt, icons, img, text, title }: CardProps) => {
  return (
    <>
      <Card alt={alt} icons={icons} img={img} text={text} title={title} />
    </>
  );
};
