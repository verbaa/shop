import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "./Header.scss";
import {Box} from "@material-ui/core";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const useCustomStyles = makeStyles(() => {
    return {
        header: {
            backgroundColor: "lightblue",
        }
    }

})

export function Header(props) {

    const customClasses = useCustomStyles();


    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.offset}/>
            <div className="example">
                <AppBar position="fixed" className={customClasses.header}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Box>
                            <Button  color="inherit" to="/" exact component={NavLink}>Home Page</Button>
                            <Button  color="inherit" to="/products" exact component={NavLink}>Products</Button>
                            <Button  color="inherit" to="/products/:id" exact component={NavLink}>Product</Button>
                            <Button  color="inherit" to="/order" exact component={NavLink}>Order</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment>

    );
}

Header.propTypes = {};
