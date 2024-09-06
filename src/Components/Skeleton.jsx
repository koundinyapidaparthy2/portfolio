import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  skeletonColor: {
    backgroundColor: theme.palette.primary.main,
  },
}));
const CustomSkeleton = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Skeleton
      variant="text"
      sx={{ fontSize: "1rem" }}
      className={classes.skeletonColor}
      {...props}
    />
  );
};

export default CustomSkeleton;
