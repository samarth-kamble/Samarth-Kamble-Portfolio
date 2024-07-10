import { SKILLS } from "@/constants";
import React from "react";
import LinearBar from "./LinearBar";

const Skills = () => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold bg-gradient-to-bl">
          Expertise
        </span>
        <div className="flex flex-col space-y-4">
          {SKILLS.map((skill, index) => {
            return (
              <LinearBar
                key={index}
                title={skill.title}
                percent={skill.level}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
