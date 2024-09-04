import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  notFoundWrapper: {
    textAlign: "center",
    padding: "50px",
  },
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.notFoundWrapper}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to the Home Page</Link>
    </div>
  );
};

export default NotFound;
