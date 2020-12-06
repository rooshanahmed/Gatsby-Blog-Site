import React from 'react'
import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core'

interface NavbarInterface {
    title: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
}));

const Header = ({ title }: NavbarInterface) => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <AppBar elevation={0} className={classes.appbar}>
                <Toolbar className={classes.appbarWrapper}>
                    <Typography className={classes.title}>{title}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header