import { createTheme } from "@mui/material/styles";

const whiteColor = "#fff";
const blackColor = "#000";

export const theme = createTheme({
  palette: {
    primary: {
      main: whiteColor,
      hyperLink: "rgb(200, 80, 192)",
    },
    secondary: {
      main: blackColor,
    },
    third: {
      main: "#4158D0",
    },
    background: {
      default:
        "linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)",
      paper:
        "linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)",
      markBlue: "#0093E9",
      downBlue: "#4eb1d9",
    },
    modal: {
      header: "rgb(0, 147, 233)",
      boxColor: "#009af566",
    },
    sideBar: {
      borderColor: "#ffffff38",
    },
    skills: {
      yearYouWorkedOn: "#353535",
    },
    hyperLink: {
      main: "#0000FF",
    },
  },
  font: {
    size: {
      xSmall: "10px",
      small: "12px",
      medium: "14px",
      large: "16px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      c1: 430,
      c2: 606,
      c3: 700,
      c4: 953,
      c5: 1200,
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
      color: whiteColor,
      fontWeight: 600,
      padding: "4px 15px !important",
      fontSize: "10px",
      boxShadow: "rgb(126 120 120 / 40%) 0px 0px 29px 0px",
      cursor: "pointer",
      "&.Mui-disabled": {
        background: `#636363 !important`,
        color: whiteColor,
        opacity: 0.8,
        cursor: "none",
      },
    },
    addButtonStyles: {
      paddingRight: "5px",
      fontWeight: "bold",
      fontSize: "12px",
    },
    removeButtonStyles: {
      fontWeight: "bold",
      fontSize: "12px",
    },
  },
  components: {
    // Customize MUI components here
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: whiteColor,
            },
            "&:hover fieldset": {
              borderColor: whiteColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: whiteColor,
            },
            "& input": {
              color: whiteColor,
            },
          },
          "& .MuiInputLabel-root": {
            color: whiteColor,
          },
          "& .MuiInputLabel-focused": {
            color: whiteColor,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiChip-root": {
            backgroundColor: whiteColor,
            color: blackColor,
            fontWeight: 600,
          },
          "& .MuiChip-deleteIcon": {
            color: "black !important",
            borderRadius: "50%",
            fontWeight: "bold",
          },
        },
        clearIndicator: {
          color: whiteColor,
        },
        listbox: {
          "& .MuiAutocomplete-option[aria-selected='true']": {
            background:
              "linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)",
            color: "transparent",
            backgroundClip: "text",
            fontWeight: "bold",
          },
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        },
        paper: {
          backgroundColor: "#fff !important",
          color: "black",
        },
      },
    },
  },
});
