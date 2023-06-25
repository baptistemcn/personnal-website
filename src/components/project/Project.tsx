import { ProjectProps } from "../../types";
import "./project.css";

export const Project = ({ project }: ProjectProps) => {
  return (
    <>
      {project.map((proj, index) => (
        <article className="project" key={index}>
          <h2>{proj.name}</h2>
          <p>{proj.presentation}</p>
          <div>
            {proj.github && <a href={proj.github}>Github</a>}
            {proj.hosted && <a href={proj.hosted}>Hosted</a>}
          </div>
        </article>
      ))}
    </>
  );
};
