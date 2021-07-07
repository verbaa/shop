import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {useDispatch, useSelector} from "react-redux";
import "./Header.scss";
import {Badge, Box, Grid} from "@material-ui/core";
import {NavLink, useLocation} from "react-router-dom";
import {setIsMobile} from "../../ducks/setting.duck";


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
    // const cart = useSelector(state => (state.isMobile))

    const customClasses = useCustomStyles();



    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.offset}/>
            <div className="example">
                <AppBar position="fixed" className={customClasses.header}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={8}>
                                <Button color="inherit" to="/" exact component={NavLink}>Logo</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    {/*<Button color="inherit" to="/products" exact component={NavLink}>Products</Button>*/}
                                    <Button color="inherit" to="/about" exact component={NavLink}>About us</Button>
                                    <Button color="inherit" to="/delivery" exact component={NavLink}>Shipping & Delivery</Button>
                                    <Button color="inherit" to="/catalog" exact component={NavLink}>Catalog</Button>
                                    <Button color="inherit" to="/cart" exact component={NavLink}>
                                        <Badge color="secondary" badgeContent={3}>
                                            <ShoppingCartOutlinedIcon />
                                        </Badge>
                                    </Button>
                                    {/*<Button color="inherit" to="/order" exact component={NavLink}>Order</Button>*/}
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment>

    );
}

Header.propTypes = {};
