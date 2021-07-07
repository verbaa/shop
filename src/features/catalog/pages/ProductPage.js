import React from 'react';
import PropTypes from 'prop-types';

import {Redirect} from "react-router";

import {useParams} from "react-router";
import {useQuery} from "react-query";
import {get} from "../api/ProductsAPI";
import {Badge, Box, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import CardActions from "@material-ui/core/CardActions";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";



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

export function ProductPage() {
    const {id} = useParams()
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {data, error, isLoading} = useQuery(["products", id], async () => {
        let {data} =  await get(id)
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
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                title={data.title}
                                subheader={data.createdAt}
                            />
                            <CardMedia
                                className={classes.media}
                                image={data.photo}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {data.title}
                                </Typography>
                            </CardContent>
                            {data.isNew ? <Badge color="secondary">
                                <NewReleasesOutlinedIcon/>
                            </Badge> : ""}
                            {data.isSale ?
                                <Badge color="secondary">
                                    <MonetizationOnOutlinedIcon/>
                                </Badge> : ""}

                            <Typography variant="h6">
                                {data.price}
                            </Typography>
                            <Box>
                                <Typography variant="h6">
                                    Rating: {data.rating}
                                </Typography>

                            </Box>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                </div>
            )}
        </div>
    );
}

ProductPage.propTypes = {};
