import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonalImage from "../../Images/PersonalImage.jpg";
import Button from "@mui/material/Button";
import styles from "./styles";
import { withStyles } from "@mui/styles";
const PersonalDetailsEditor = ({ classes, details, onSave }) => {
  const [profileImage, setProfileImage] = useState(
    details.profileImage || PersonalImage
  );

  const handleChange = (name, value) => {
    onSave((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        onSave((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = () => {
    document.getElementById("profileImageInput").click();
  };
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.editResumeHeader}
        >
          Personal Details
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.profileImageContainer}>
        <div
          style={{
            backgroundImage: `url(${profileImage})`,
          }}
          className={classes.editProfileImage}
        ></div>
        <input
          type="file"
          accept="image/*"
          className={classes.imageInput}
          onChange={handleImageChange}
          id="profileImageInput"
        />

        <Button
          aria-label="profileImageInput"
          color="primary"
          className={classes.personalButtonView}
          onClick={handleButtonClick}
        >
          Change Profile Image
        </Button>
      </Grid>
      <Grid item xs={11}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              value={details.contactNumber}
              onChange={(e) => handleChange("contactNumber", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={details.contactEmail}
              onChange={(e) => handleChange("contactEmail", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Alternate Email"
              type="email"
              value={details.altEmail}
              onChange={(e) => handleChange("altEmail", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="LinkedIn"
              type="url"
              value={details.linkedinLink}
              onChange={(e) => handleChange("linkedinLink", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="GitHub"
              type="url"
              value={details.githubLink}
              onChange={(e) => handleChange("githubLink", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Portfolio"
              type="url"
              value={details.portfolioLink}
              onChange={(e) => handleChange("portfolioLink", e.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(PersonalDetailsEditor);
