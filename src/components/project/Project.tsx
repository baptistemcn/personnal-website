import { ProjectProps } from "../../types";
import "./project.css";

export const Project = ({ project }: ProjectProps) => {
  return (
    <>
      {project?.map((proj, index) => (
        <article className="project" key={index}>
          <h2>{proj.title}</h2>
          <p>{proj.description}</p>
          <div>{proj.host && <a href={proj.host.url}>{proj.host.name}</a>}</div>
        </article>
      ))}
    </>
  );
};
