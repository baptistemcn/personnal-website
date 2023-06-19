import { TechnologiesItem } from "./technologies.interface";

export interface ExperiencesProps {
  experiences?: Array<ExperienceItem>;
}

export interface ExperienceItem {
  title: string;
  presentation: string;
  duration: string;
  technologies: Array<TechnologiesItem>;
}
