import React from "react";
import {
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close";

function Responsibility({ id, index, value, handleChange, handleDelete, hasError }) {
  return (
    <FormControl className="responsibility" variant="outlined" fullWidth>
      <InputLabel htmlFor={`responsibility-${index}-${id}`}>
        Responsibility #{index + 1}
      </InputLabel>
      <OutlinedInput
        id={`responsibility-${index}-${id}`}
        label={`Responsibility #${index + 1}`}
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
              aria-label="delete responsibility"
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

export default Responsibility;