import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, Collapse } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SortIcon from '@material-ui/icons/Sort'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        width: "60vw",
        // fontFamily: "'Raleway', sans-serif"
    },
    appBar: {
        background: "none !important",
    },
    appBarWrapper: {
        width: "90%",
        margin: "0 auto 0 30px"
    },
    appBarTitle: {
        color: "#000",
        flexGrow: '1',
        textTransform: "uppercase",
        letterSpacing: "1rem"
    },
    // main: {
    //     marginLeft: "54px",
    //     fontSize: "1.1em",
    //     // minWidth: "70vw"
    // },
    // button: {
    //     paddingTop: "20px"
    // }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <h1 className={classes.appBarTitle}>
                        The Health Boost
                    </h1>
                    <IconButton>
                        <SortIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}