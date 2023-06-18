import "./experience.css";

import { ExperiencesProps } from "../../types/experiences.interface";
import { Technologies } from "../technologies/Technologies";

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
                <Technologies name={experience.technologies} />
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};
