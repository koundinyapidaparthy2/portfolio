import React from "react";
import TextField from "@material-ui/core/TextField";

// Reusable TextField component
const CustomTextField = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default CustomTextField;
