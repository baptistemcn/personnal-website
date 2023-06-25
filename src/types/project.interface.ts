export interface ProjectProps {
  project: Array<ProjectItem>;
}

interface ProjectItem {
  name: string;
  presentation: string;
  github: string;
  hosted: string;
}
