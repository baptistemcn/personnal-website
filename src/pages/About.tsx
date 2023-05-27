import { Experience } from "../components";
import "./about.css";

interface AboutProps {
  subtitle: string;
  text: string;
  title: string;
  experiences: Array<ExperienceItem>;
}

export interface ExperienceItem {
  title: string;
  presentation: string;
  technologies: Array<TechnologiesItem>;
}

export interface TechnologiesItem {
  name: string;
}

export const About = ({ experiences, subtitle, text, title }: AboutProps) => {
  return (
    <div className="about">
      <h1>{title}</h1>
      <div className="about-presentation">
        <p>{text}</p>
      </div>
      <h2>{subtitle}</h2>
      <div className="about-experience">
        <Experience experiences={experiences} />
      </div>
    </div>
  );
};
