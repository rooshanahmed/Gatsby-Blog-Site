import React from "react"
import {
  AppBar,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { navigate } from "gatsby"
import blog from "../../static/blog.png"

interface NavbarInterface {
  title: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
    },
    appbar: {
      // background: "teal",
      background: "#01020d",
    },
    appbarWrapper: {
      width: "80%",
      margin: "0 auto",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    title: {
      fontSize: "32px",
      color: "#fff",
      fontFamily: "Comfortaa",
      fontWeight: "bolder",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
      },
    },
    btnRoot: {
      marginLeft: "auto",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        marginLeft: "80px",
      },
    },
    btn: {
      margin: "20px",
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Comfortaa",
      width: "130px",
      textTransform: "capitalize",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
        margin: "0px",
        width: "70px",
      },
    },
    image: {
      width: "50px",
      height: "50px",
      [theme.breakpoints.down("md")]: {
        height: "30px",
        width: "30px",
      },
    },
  })
)

const Header = ({ title }: NavbarInterface) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar elevation={5} className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <img src={blog} alt="blog-logo" className={classes.image} />
          <Typography className={classes.title}>{title}</Typography>
          <div className={classes.btnRoot}>
            <Button
              className={classes.btn}
              onClick={() => {
                navigate("/")
              }}
              disableTouchRipple
            >
              Home
            </Button>
            <Button
              className={classes.btn}
              onClick={() => {
                navigate("/blogs")
              }}
              disableTouchRipple
            >
              Blogs
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
