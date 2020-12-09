import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
} from "@material-ui/core";
import bg1 from "../../static/bg1.svg";
import { navigate } from "gatsby";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: "#34495E",
      minHeight: "100vh",
      // backgroundColor: "#03090E",
      backgroundColor: "#D1CECD",
    },
    img: {
      width: "450px",
      marginRight: "290px",
      [theme.breakpoints.down("md")]: {
        marginTop: "20px",
        marginRight: "10px",
        width: "250px",
      },
    },
    text: {
      color: "black",
      fontSize: "48px",
      fontFamily: "Comfortaa",
      [theme.breakpoints.down("md")]: {
        marginTop: "20px",
        fontSize: "30px",
      },
    },
    btn: {
      color: "black",
      marginTop: "20px",
      width: "180px",
      border: "2px solid #424242",
      fontFamily: "Comfortaa",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#424242",
        color: "#fff",
      },
      [theme.breakpoints.down("md")]: {
        marginBotton: "40px",
      },
    },
    container: {
      marginTop: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    subText: {
      fontFamily: "Comfortaa",
      fontSize: "34px",
      color: "black",
      [theme.breakpoints.down("md")]: {
        fontSize: "24px",
      },
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={bg1} alt="gatsby blog" className={classes.img} />
        <div>
          <Typography className={classes.text}>Blogs Hub</Typography>
          <Typography className={classes.subText}>
            Learn. Rank. Dominate.
          </Typography>
          <Button
            className={classes.btn}
            disableTouchRipple
            onClick={() => {
              navigate("/blogs");
            }}
          >
            Go To Blogs
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
