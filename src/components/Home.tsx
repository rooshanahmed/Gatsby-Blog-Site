import React from 'react'
import { createStyles, makeStyles, Theme, Typography, Button } from '@material-ui/core'
import bg1 from '../../static/bg1.svg'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#280B0B',
        minHeight: '100vh'
    },
    img: {
        width: '450px',
        marginRight: '150px',
    },
    text: {
        color: '#fff',
        fontSize: '44px',
        fontFamily: 'Comfortaa',
    },
    btn: {
        color: '#fff',
        marginTop: '20px',
        width: '150px',
        border: '1px solid '
    }
}));

const Home = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <img src={bg1} alt='gatsby blog' className={classes.img} />
            <div>
                <Typography className={classes.text}>Welcome To Blogs Hub</Typography>
                <Button className={classes.btn} disableTouchRipple>Go To Blogs</Button>
            </div>
        </div>
    )
}
export default Home;