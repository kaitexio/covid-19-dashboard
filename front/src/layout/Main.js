import React from "react";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        backgroundColor: "#F4F6F8",
        padding: theme.spacing(2),
    },
    content: {
        height: "100%"
    }
}));

const Main = (props) => {
    const {children} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.node
};

export default Main;