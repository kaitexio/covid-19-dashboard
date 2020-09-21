import React from 'react';
import DateTime from "../components/Datetime";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useRouteData} from "react-static";


const useStyles = makeStyles(theme => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#F4F6F8",
        padding: theme.spacing(4),
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
    updated_at: {
        textAlign: "right",
        color: '#919EAB',
        fontSize: '0.8rem',
    }
}))
const Header = () => {
    const classes = useStyles();
    const data = useRouteData()

    return (
        <div className={classes.header}>
            <div>
                <span className={classes.pageSubtitle}>Dashboard</span>
                <h3 className={classes.pageTitle}>Covid-19 Japan Tracker</h3>
            </div>
            <div className={classes.updated_at}>
                最終更新日
                <DateTime datetime={data.posts.Updated_at}/>
            </div>
        </div>
    )
}

export default Header;