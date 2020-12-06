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
      background: "none",
    },
    appbarWrapper: {
      width: "80%",
      margin: "0 auto",
    },
    title: {
      fontSize: "32px",
    },
  })
)

const Header = ({ title }: NavbarInterface) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <Typography className={classes.title}>{title}</Typography>
          <Button>Home</Button>
          <Button>Blogs</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
