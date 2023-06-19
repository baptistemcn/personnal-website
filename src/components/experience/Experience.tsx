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
              <div>
                <h3>{experience.title}</h3>
                {experience.duration && (
                  <>
                    <p>{experience.duration}</p>
                  </>
                )}
              </div>
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
