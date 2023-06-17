import "./experience.css";

import { ExperiencesProps } from "../../types/experiences.interface";

export const Experience = ({ experiences }: ExperiencesProps) => {
  return (
    <>
      {experiences?.map((experience, index) => {
        return (
          <div key={index} className="experience">
            <div>
              <h3>{experience.title}</h3>
              <p>{experience.presentation}</p>
              <hr />
              <ul>
                {experience.technologies.map((item, index) => {
                  return (
                    <li key={index}>
                      <i>{item.name}</i>
                      <span key={`separator-${index}`}>-</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};
