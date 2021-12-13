import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Bell } from 'react-feather';
import { SvgIcon } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
// import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
    appBar: {
        backgroundColor: '#e6e0bb'
    },
    img: {
        maxHeight: 70,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        background: '#746c7c',
        color: 'white',
        marginRight: 10,
        '&:hover': {
            backgroundColor: '#9e98a3'
        },
    },
    bell: {
        marginRight: 10 
    }
});

function Header() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <img src='/images/ins8dev.png' alt='logo' className={classes.img} />
                <div>
                    <span><b>#</b></span>
                </div>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button color="inherit" className={classes.button}>
                        Novo post
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Carol" />
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Header;