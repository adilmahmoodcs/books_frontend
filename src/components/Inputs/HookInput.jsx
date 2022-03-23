import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const HookInput = ({ form, name, label, ...rest }) => {
  return (
    <TextField
      {...rest}
      label={label}
      name={name}
      value={form.values[name]}
      onChange={form.handleChange}
      error={form.touched[name] && Boolean(form.errors[name])}
      helperText={form.touched[name] && form.errors[name]}
      variant="standard"
      margin="dense"
      InputLabelProps={{ shrink: true }}
    />
  );
};

HookInput.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default HookInput;
