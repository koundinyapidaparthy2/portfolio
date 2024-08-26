import React from "react";
import TextField from "@mui/material/TextField";

// Reusable TextField component
const CustomTextField = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default CustomTextField;
