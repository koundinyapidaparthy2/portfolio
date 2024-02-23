import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
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
});
