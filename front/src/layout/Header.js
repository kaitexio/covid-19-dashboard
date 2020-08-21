import React from "react";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },

    content: {
        backgroundColor: "#F4F6F8",
        height: "100%"
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
            </div>

        </div>
    )

}

Header.propTypes = {
    children: PropTypes.node
};

export default Header;