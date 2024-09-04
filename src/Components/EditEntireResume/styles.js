const styles = (theme) => ({
  editResumeHeaderWrapper: {
    height: "50px",
  },
  editResumeHeader: {
    ...((theme || {}).commonStyles || {}).textVariant2,
  },
  iteratorTitle: {
    color: theme.palette.primary.main,
  },
  buttonView: {
    ...((theme || {}).commonStyles || {}).buttonVariant1,
  },
  addButtonStyles: {
    ...((theme || {}).commonStyles || {}).addButtonStyles,
  },
  removeButtonStyles: {
    ...((theme || {}).commonStyles || {}).removeButtonStyles,
  },
  pointsAutoSize: { width: "100%", padding: "8px" },
  accodionHeader: {
    backgroundColor: theme.palette.primary.main,
    border: "1px solid black",
    color: "black",
    borderRadius: "8px",
    fontWeight: "bold !important",
    "&.Mui-expanded": {
      minHeight: "40px",
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: "0px",
    },
  },
  divider: {
    width: "100%",
    margin: theme.spacing(1, 0),
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
    height: "0.5px",
    opacity: "0.5",
  },
  submit: {
    ...((theme || {}).commonStyles || {}).buttonVariant1,
    fontSize: theme.font.size.medium,
  },
  formActions: {
    margin: "40px 0px 30px 0px",
  },
  profileImageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: theme.spacing(2),
  },
  imageInput: {
    display: "none",
  },
  personalButtonView: {
    ...((theme || {}).commonStyles || {}).buttonVariant1,
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  editProfileImage: {
    width: "10vw",
    height: "10vw",
    borderRadius: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 1,
    boxShadow: "rgb(126 120 120 / 40%) 0px 0px 29px 0px",
  },
});

export default styles;
