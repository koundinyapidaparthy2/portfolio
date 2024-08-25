// PDFView.js
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import ContactButtons from "./ContactButton";

const useStyles = makeStyles(() => ({
  pdfViewCOntainer: {
    height: "99.5vh",
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const PDFView = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      className={classes.pdfViewCOntainer}
    >
      <Grid item xs={11} sm={11} md={10} lg={9}>
        <Grid container justifyContent="center">
          <Header />
          <PersonalInfo />
          <Summary />
          <ContactButtons />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PDFView;
