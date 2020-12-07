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
      background: "teal",
    },
    appbarWrapper: {
      width: "80%",
      margin: "0 auto",
    },
    title: {
      fontSize: "32px",
      color: "black",
      fontFamily: "Comfortaa",
    },
    btnRoot: {
      marginLeft: "auto",
    },
    btn: {
      margin: "20px",
      color: "black",
      fontSize: "16px",
      fontFamily: "Comfortaa",
      width: "130px",
      textTransform: "capitalize",
    },
  })
)

const Header = ({ title }: NavbarInterface) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar elevation={5} className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <Typography className={classes.title}>{title}</Typography>
          <div className={classes.btnRoot}>
            <Button
              className={classes.btn}
              variant="outlined"
              onClick={() => {
                navigate("/")
              }}
              disableTouchRipple
            >
              Home
            </Button>
            <Button
              className={classes.btn}
              variant="outlined"
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
