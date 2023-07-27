import React from "react";
import {
  IconButton,
  Typography,
  Grid,
  Link,
  Theme
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "auto",
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
  },
  waveWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
  },
  waveSvg: {
    position: "relative",
    display: "block",
    width: "calc(168% + 1.3px)",
    height: 150,
    [theme.breakpoints.up("sm")]: {
      width: "calc(100% + 1.3px)",
      height: 110,
      transform: "rotateY(180deg)",
    },
  },

  wavePath: {
    fill: "#fff",
  },
  whiteText: {
    color: theme.palette.common.white,
  },
  centerText: {
    textAlign: "center",
  },
  marginTopOne: {
    marginTop: theme.spacing(1),
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <Grid
      component="footer"
      container
      direction="column"
      className={classes.container}
    >

      <Grid item>
        <Link href="mailto:chinaemerema@gmail.com" target="_blank">
          <IconButton>
            <EmailIcon className={classes.whiteText} />
          </IconButton>
        </Link>
        <Link href="https://github.com/AgomohC" target="_blank">
          <IconButton>
            <GitHubIcon className={classes.whiteText} />
          </IconButton>
        </Link>
        <Link href="https://twitter.com/femto_ace" target="_blank">
          <IconButton>
            <TwitterIcon className={classes.whiteText} />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          className={classNames(
            classes.centerText,
            classes.whiteText,
            classes.marginTopOne
          )}
        >
          &copy; {year}  All rights reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
