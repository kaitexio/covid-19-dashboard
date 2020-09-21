import React from 'react'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        margin: "300px",
        backgroundColor: "#F4F6F8",
        padding: theme.spacing(2),
    }
}));
const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>
            404
            </h1>
        </div>
    )
}
export default NotFound;
