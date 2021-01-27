import React, { FormEvent, useState } from "react";
import {
  UseStateHelperArrayElementIDAdd,
  UseStateHelperArrayElementIDChange,
  UseStateHelperArrayElementIDDelete,
  UseStateHelperArrayElementIDInputChange,
} from "../../Shared/functions/UseStateHelper";
import { Switch } from "@material-ui/core";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../../CustomButton/AddButton";
import { ResumeBuilderSectionProps } from "../../Shared/Interfaces/ResumeBuilder.interface";
import { DefaultSkill, ISkill } from "../../Shared/Interfaces/Skill.interface";
import SkillItem from "./SkillItem";
import "./skills.scss";

function Skills({
  state,
  setState,
  onContinue,
}: ResumeBuilderSectionProps<ISkill[]>) {
  const [hasError, setHasError] = useState(false);
  const [showLevel, setShowLevel] = useState(false);

  const handleAdd = UseStateHelperArrayElementIDAdd(setState)(DefaultSkill);
  const handleInputChange = UseStateHelperArrayElementIDInputChange(setState);
  const handleChange = UseStateHelperArrayElementIDChange(setState);
  const handleDelete = UseStateHelperArrayElementIDDelete(setState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    onContinue();
  };

  const validate = () => {
    const isValid = !state.some((x) => x.name.trim().length === 0);

    setHasError(!isValid);
    return isValid;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="resume-builder-section skill-section"
    >
      <h1 className="resume-builder-heading">Skills</h1>
      <div className="resume-builder-description">
        Does your resume include skill level?
        <Switch
          className="switch"
          color="primary"
          checked={showLevel}
          onChange={() => setShowLevel(!showLevel)}
        />
      </div>

      {state.map((x, i) => (
        <SkillItem
          key={x.id}
          skill={x}
          index={i}
          showLevel={showLevel}
          onInputChange={handleInputChange(x.id)}
          onChange={handleChange(x.id)}
          onDelete={handleDelete(x.id)}
          hasError={hasError}
        />
      ))}
      <AddButton
        onClick={handleAdd}
        variant="text"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
      >
        Add skill
      </AddButton>
      <GreenButton type="submit" variant="contained" color="primary">
        Continue
      </GreenButton>
    </form>
  );
}

export default WithPageLoad(Skills);
