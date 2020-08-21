import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: 700
    },

}));

export default function Title(props) {
    const classes = useStyles();

    return (
        <Typography variant="body2" color="textSecondary" gutterBottom className={classes.title}>
            {props.children}
        </Typography>
    )
}
Title.propTypes = {
    children: PropTypes.node,
};