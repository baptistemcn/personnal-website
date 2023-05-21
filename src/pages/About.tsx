import "./about.css";

interface AboutProps {
  subtitle: string;
  text: string;
  title: string;
}

export const About = ({ subtitle, text, title }: AboutProps) => {
  return (
    <div className="about-container">
      <h1>{title}</h1>
      <div className="about-container-presentation">
        <p>{text}</p>
      </div>
      <h2>{subtitle}</h2>
    </div>
  );
};
