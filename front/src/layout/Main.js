import React from "react";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        backgroundColor: "#F4F6F8",
        padding: theme.spacing(4),

    },

    content: {
        height: "100%"
    },
    pageHeader: {
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        textAlign: 'left',
        fontFamily: "Century Gothic"

    },
    pageTitle: {
        fontSize: '1.625rem',
        fontWeight: 500,
        color: '#454F5B',
        lineHeight: 1,
        margin: 0,
        padding: 0,
        fontFamily: "Century Gothic"

    },
    pageSubtitle: {
        color: '#919EAB',
    },
}));

const Main = (props) => {
    const {children} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div className={classes.pageHeader}>
                    <span className={classes.pageSubtitle}>Dashboard</span>
                    <h3 className={classes.pageTitle}>Covid-19 Japan Tracker</h3>
                </div>
                {children}
            </main>
        </div>
    )

}

Main.propTypes = {
    children: PropTypes.node
};

export default Main;