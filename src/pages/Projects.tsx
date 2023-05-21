interface ProjectsProps {
  title: string;
}

export const Projects = ({ title }: ProjectsProps) => {
  return <h1>{title}</h1>;
};
