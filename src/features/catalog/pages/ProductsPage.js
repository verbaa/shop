import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Example} from "../components/Example";
import {useQuery} from "react-query";
import {getProducts} from "../api/ProductsAPI";
import {Link, NavLink} from "react-router-dom";

import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Badge, Box, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import {useDispatch, useSelector} from "react-redux";
import {addCart} from "../../../store/actions";
import {allItems} from "../../../shared/ducks/setting.duck";


import * as SettingDuck from '../ducks/example.duck'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export function ProductsPage() {



    const dispatch = useDispatch()


    const handleCart = (e) => {
        dispatch(allItems(e))
    };


    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const {data, error, isLoading} = useQuery("products", async () => {
        let {data} = await getProducts()
        return data
    })
    return (
        <div className="page">
            {isLoading ? (
                <div>Loading</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>


                    <div className={classes.root}>
                        <Typography id="continuous-slider" gutterBottom>
                            Price
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                            </Grid>
                        </Grid>
                    </div>



                    <Grid container>{data.map((products) => (

                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardHeader
                                    title={products.title}
                                    subheader={products.createdAt}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={products.photo}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary" component="p">
                                        {products.title}
                                    </Typography>
                                </CardContent>

                                <Box onClick={() => handleCart(products)}>Add cart</Box>

                                {products.isNew ? <Badge color="secondary">
                                    <NewReleasesOutlinedIcon/>
                                </Badge> : ""}
                                {products.isSale ?
                                    <Badge color="secondary">
                                        <MonetizationOnOutlinedIcon/>
                                    </Badge> : ""}

                                <Typography variant="h6">
                                    {products.price}
                                </Typography>
                                <Box>
                                    <Typography variant="h6">
                                        Rating: {products.rating}
                                    </Typography>

                                </Box>
                                <CardActions disableSpacing>
                                    <Link to={`products/${products.id}`}>Learn more</Link>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon/>
                                    </IconButton>

                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                            {products.description}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>


                    ))}
                    </Grid>
                </div>
            )}
        </div>
    );
}

ProductsPage.propTypes = {};
