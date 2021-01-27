import React from "react";
import { ISkill } from "../../Shared/Interfaces/Skill.interface";
import PageBreakableContainer from "../PageBreakableContainer";

interface SkillsProps {
  skills: ISkill[];
}

function Skills({ skills }: SkillsProps) {
  return skills.length > 0 ? (
    <section className="skills">
      <div className="heading">Additional Skills</div>
      {skills.map((x, i) => (
        <PageBreakableContainer key={i}>{x.name}</PageBreakableContainer>
      ))}
    </section>
  ) : null;
}

export default Skills;
