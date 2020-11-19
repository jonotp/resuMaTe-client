import React from "react";
import {
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function ListItem({
  id,
  name,
  index,
  value,
  handleChange,
  handleDelete,
  hasError,
}) {
  return (
    <FormControl className={`${name}`} variant="outlined" fullWidth>
      <InputLabel htmlFor={`${name}-${index}-${id}`}>
        {name} #{index + 1}
      </InputLabel>
      <OutlinedInput
        id={`${name}-${index}-${id}`}
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
            <IconButton
              aria-label={`delete ${name}`}
              onClick={handleDelete}
              edge="end"
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default ListItem;
