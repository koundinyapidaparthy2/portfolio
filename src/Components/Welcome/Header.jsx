import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Logo from "../../Mp4/LOGO.mp4";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
const useStyles = makeStyles((theme) => {
  return {
    logo: {
      "&::-webkit-media-controls": {
        display: "none !important",
      },
    },
    headerContainer: {
      [theme.breakpoints.down("md")]: {
        justifyContent: "flex-end",
      },
    },
    link: {
      color: "transparent",
      background: theme.palette.background.paper,
      fontWeight: 600,
      marginRight: theme.spacing(2),
      cursor: "pointer",
      textDecoration: "none",
      position: "relative",
      overflow: "hidden",
      display: "inline-block",
      fontSize: "16px",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      transition: "color 0.3s",
      "&::before": {
        content: '""',
        position: "absolute",
        left: "-100%",
        bottom: "-100%",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        transform: "skewX(-45deg)",
        transition: "left 0.3s, bottom 0.3s",
        zIndex: 1,
      },
      "&:hover::before": {
        left: "100%",
        bottom: "100%",
      },
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    linksGrid: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    buttonView: {
      ...((theme || {}).commonStyles || {}).buttonVariant1,
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    menuButton: {
      // color: "transparent",
      // background: theme.palette.background.paper,
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
    drawer: {
      width: 250,
    },
    drawerContent: {
      width: 250,
      height: "100%",
      padding: theme.spacing(2),
      zIndex: 2,
      background: "black",
    },
    divider: {
      width: "60%",
      margin: theme.spacing(1, 0),
      background: theme.palette.background.default,
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
    closeIcon: {
      width: "10px",
      height: "10px",
      fontSize: "10px",
      padding: theme.spacing(4),
    },
  };
});
const Header = ({ mainAnimations, moveToTheElement }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  function goToAestheticView() {
    navigate("/pdf");
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={2}
      justifyContent="space-between"
    >
      <Grid item xs={5} sm={5} lg={5}>
        <video
          width="100"
          height="100"
          controls
          autoPlay
          loop
          className={classes.logo}
          muted
          playsinline
          style={{
            opacity: mainAnimations.videoVisibility.opacity,
          }}
        >
          <source src={Logo} type="video/mp4" />
        </video>
      </Grid>
      <Grid item xs={5} sm={5} lg={5}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className={classes.headerContainer}
        >
          <Grid item className={classes.linksGrid}>
            <Grid
              container
              spacing={6}
              justifyContent="space-between"
              direction="row"
              alignItems="center"
            >
              <Grid item>
                <Link
                  className={classes.link}
                  onClick={() => {
                    moveToTheElement(1);
                  }}
                >
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  onClick={() => {
                    moveToTheElement(2);
                  }}
                >
                  About
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  onClick={() => {
                    moveToTheElement(5);
                  }}
                >
                  Skills
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  onClick={() => {
                    moveToTheElement(6);
                  }}
                >
                  Projects
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  onClick={() => {
                    moveToTheElement(4);
                  }}
                >
                  Interests
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              className={classes.buttonView}
              onClick={goToAestheticView}
            >
              PDF VIEW
            </Button>
          </Grid>
          <Grid item className={classes.menuButton}>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        className={classes.drawer}
        classes={{ paper: classes.drawerContent }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <IconButton
                  edge="start"
                  className={classes.buttonView + " " + classes.closeIcon}
                  onClick={toggleDrawer(false)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="column" alignItems="center">
              <Link
                className={classes.link}
                onClick={() => {
                  moveToTheElement(1);
                  toggleDrawer(false)();
                }}
              >
                Home
              </Link>
              <Divider className={classes.divider} />
              <Link
                className={classes.link}
                onClick={() => {
                  moveToTheElement(2);
                  toggleDrawer(false)();
                }}
              >
                About
              </Link>
              <Divider className={classes.divider} />

              <Link
                className={classes.link}
                onClick={() => {
                  moveToTheElement(5);
                  toggleDrawer(false)();
                }}
              >
                Skills
              </Link>
              <Divider className={classes.divider} />

              <Link
                className={classes.link}
                onClick={() => {
                  moveToTheElement(6);
                  toggleDrawer(false)();
                }}
              >
                Projects
              </Link>
              <Divider className={classes.divider} />

              <Link
                className={classes.link}
                onClick={() => {
                  moveToTheElement(4);
                  toggleDrawer(false)();
                }}
              >
                Interests
              </Link>
              <Divider className={classes.divider} />

              <Button
                variant="contained"
                className={classes.buttonView}
                onClick={() => {
                  goToAestheticView();
                  toggleDrawer(false)();
                }}
              >
                PDF VIEW
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </Grid>
  );
};

export default Header;
