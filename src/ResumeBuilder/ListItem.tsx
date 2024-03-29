import React, { ChangeEvent } from "react";
import {
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface ListItemProps {
  id: number;
  name: string;
  index: number;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDelete: () => void;
  hasError: boolean;
}

function ListItem({
  id,
  name,
  index,
  value,
  handleChange,
  handleDelete,
  hasError,
}: ListItemProps) {
  return (
    <FormControl className="list-item" variant="outlined" fullWidth>
      <InputLabel htmlFor={`${name}-${id}`}>
        {name} #{index + 1}
      </InputLabel>
      <OutlinedInput
        id={`${name}-${id}`}
        label={`${name} #${index + 1}`}
        value={value}
        onChange={handleChange}
        required
        error={hasError && value.length === 0}
        margin="none"
        rowsMax={4}
        fullWidth
        multiline
        endAdornment={
          <InputAdornment position="end">
            {/* <IconButton
              aria-label={`delete ${name}`}
              onClick={handleDelete}
              edge="end"
              size="small"
            > */}
            <IconButton onClick={handleDelete} edge="end" size="small">
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default ListItem;
