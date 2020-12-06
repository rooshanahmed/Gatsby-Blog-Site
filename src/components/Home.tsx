import React from 'react'
import { createStyles, makeStyles, Theme, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Home = () => {
    const classes = useStyles();

    return(
        <div>
            <img src='../../static/landing.png' alt='gatsby blog' />
            <div>
                <Typography>Welcome To The Blogs Hub</Typography>
                <Button>Go To Blogs</Button>
            </div>
        </div>
    )
}
export default Home;