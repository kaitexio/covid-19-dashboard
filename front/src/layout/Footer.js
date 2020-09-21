import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#F4F6F8",
        padding: "33px"
    }
}))
export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div>
                COVID19 感染者データ 以下の二次データを利用しています。
            </div>
            <a href={"https://covid19japan.com/"}>COVID-19 Japan website</a>
        </div>
    )
}
