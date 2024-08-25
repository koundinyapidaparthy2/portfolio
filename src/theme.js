import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      hyperLink: "rgb(200, 80, 192)",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default:
        "linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)",
      paper:
        "linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)",
    },
    hyperLink: {
      main: "#0000FF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 4,
  commonStyles: {
    textVariant2: {
      backgroundImage:
        "linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)",
      color: "transparent",
      backgroundClip: "text",
      fontWeight: "bold",
      width: "max-content",
    },
    buttonVariant1: {
      background:
        "linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)",
      color: "#fff",
      fontWeight: 600,
      padding: "4px 15px !important",
      fontSize: "10px",
      boxShadow: "rgb(126 120 120 / 40%) 0px 0px 29px 0px",
      cursor: "pointer",
      "&.Mui-disabled": {
        background: `linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%) !important`,
        color: "#fff",
        opacity: 0.8,
        cursor: "none",
      },
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#fff",
          },
          "&:hover fieldset": {
            borderColor: "#fff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#fff",
          },
          "& input": {
            color: "#fff",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#fff",
        },
        "& .MuiInputLabel-focused": {
          color: "#fff",
        },
      },
    },
  },
});
