import { useTranslation } from "react-i18next";
import { EXPERIENCES, EXPERIENCES_EN } from "../assets/db";
import { Experience } from "../components";
import "./about.css";

interface AboutProps {
  subtitle: string;
  text: string;
  title: string;
}

export const About = ({ subtitle, text, title }: AboutProps) => {
  const { i18n } = useTranslation();
  const urls = i18n.resolvedLanguage;

  return (
    <div className="about-container">
      <h1>{title}</h1>
      <div className="about-container-presentation">
        <p>{text}</p>
      </div>
      <h2>{subtitle}</h2>
      <div className="about-container-experience">
        <Experience
          experiences={urls === "fr" ? EXPERIENCES : EXPERIENCES_EN}
        />
      </div>
    </div>
  );
};
