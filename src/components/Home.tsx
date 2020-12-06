import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
} from "@material-ui/core"
import bg1 from "../../static/bg1.svg"
import { navigate } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#280B0B",
      minHeight: "100vh",
    },
    img: {
      width: "450px",
      marginRight: "150px",
    },
    text: {
      color: "#fff",
      fontSize: "44px",
      fontFamily: "Comfortaa",
    },
    btn: {
      color: "#fff",
      marginTop: "20px",
      width: "180px",
      border: "2px solid black",
      marginLeft: "155px",
      fontFamily: "Comfortaa",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "black",
      },
    },
  })
)

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img src={bg1} alt="gatsby blog" className={classes.img} />
      <div>
        <Typography className={classes.text}>Welcome To Blogs Hub</Typography>
        <Button className={classes.btn} disableTouchRipple onClick={() => {navigate('/blog')}}>
          Go To Blogs
        </Button>
      </div>
    </div>
  )
}
export default Home
