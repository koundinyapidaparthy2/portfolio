import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "../Skeleton";

const EditResumeFallback = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent={"space-between"}>
              <Grid item xs={4}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Grid item xs={5}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </Grid>
                  <Grid item xs={5}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rounded" height={60} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rounded" height={60} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rounded" height={60} />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent={"flex-end"}>
              <Grid item xs={4}>
                <Grid
                  container
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Grid item xs={5}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </Grid>
                  <Grid item xs={5}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditResumeFallback;
