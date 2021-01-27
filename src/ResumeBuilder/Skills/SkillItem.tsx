import React, { ChangeEvent } from "react";
import {
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ISkill } from "../../Shared/Interfaces/Skill.interface";

interface SkillItemProp {
  skill: ISkill;
  index: number;
  showLevel: boolean;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange: (property: string, value: any) => void;
  onDelete: () => void;
  hasError: boolean;
}

function SkillItem({
  skill,
  index,
  showLevel,
  onInputChange: handleInputChange,
  onChange: handleChange,
  onDelete: handleDelete,
  hasError,
}: SkillItemProp) {
  const handleDropdown = (
    event: ChangeEvent<{ name?: string; value: any }>
  ) => {
    if (event.target.name === undefined)
      throw "select component does not have name";

    handleChange(event.target.name, Number(event.target.value));
  };

  return (
    <div className="card-container">
      <div className="skill-item">
        <FormControl variant="outlined" className="skill-name">
          <InputLabel htmlFor={`Skill-${skill.id}`}>
            Skill #{index + 1}
          </InputLabel>
          <OutlinedInput
            id={`${skill.id}`}
            label={`Skill #${index + 1}`}
            name="name"
            value={skill.name}
            onChange={handleInputChange}
            required
            error={hasError && skill.name.length === 0}
            margin="none"
            rowsMax={4}
            multiline
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleDelete} edge="end" size="small">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {showLevel ? (
          <FormControl className="skill-level" variant="outlined">
            <InputLabel id={`level-label-${skill.id}`}>Level</InputLabel>
            <Select
              id={`level-${skill.id}`}
              name="level"
              labelId={`level-label-${skill.id}`}
              label="Level"
              value={skill.level}
              onChange={handleDropdown}
              required
            >
              <MenuItem value={1}>(1) Novice</MenuItem>
              <MenuItem value={2}>(2) Novice - Proficient</MenuItem>
              <MenuItem value={3}>(3) Proficient</MenuItem>
              <MenuItem value={4}>(4) Proficient - Expert</MenuItem>
              <MenuItem value={5}>(5) Expert</MenuItem>
            </Select>
          </FormControl>
        ) : null}
      </div>
    </div>
  );
}

export default SkillItem;
