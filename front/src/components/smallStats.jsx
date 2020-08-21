import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    card: {
        borderRadius: 20,
        maxHeight: 140
    },

    label: {
        fontFamily: "Century Gothic",
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 10,
    },
    value: {
        fontFamily: "Tahoma",
        fontSize: 30,
        margin: 10
    },
    difference: {
        display: 'flex',
        justifyContent: 'center'
    },

}));


const SmallStats = props => {
    const {label, value, newlyConfirmed, iconColor, ...rest} = props;
    const classes = useStyles();
    const handleDifference = (newlyConfirmed) => {
        if (newlyConfirmed === 0) {
            return (
                <Typography
                    style={{color: "#212B36"}}
                    variant="body2"
                >
                    {newlyConfirmed}
                </Typography>
            )
        } else if (newlyConfirmed > 0) {
            return (
                <div className={classes.difference}>
                    <ArrowDropUpIcon style={{color: iconColor}} fontSizeAdjust="small"/>
                    <Typography
                        style={{color: iconColor}}
                        variant="body2"
                    >
                        {newlyConfirmed}
                    </Typography>
                </div>
            )
        } else {
            return (
                <div className={classes.difference}>
                    <ArrowDropDownIcon style={{color: iconColor}} fontSizeAdjust="small"/>
                    <Typography
                        style={{color: "#50B83C"}}
                        variant="body2"
                    >
                        {newlyConfirmed}
                    </Typography>
                </div>
            )

        }
    }

    return (
        <Card
            className={classes.card}
            {...rest}
        >
            <CardContent>
                <Grid
                    container
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <span
                            className={classes.label}
                        >
                            {label}
                        </span>

                        <Grid item xs={12}>
                            <h4 className={classes.value}>{value}</h4>
                        </Grid>
                        <Grid item xs={12}>
                            {handleDifference(newlyConfirmed)}
                        </Grid>
                    </Grid>

                </Grid>

            </CardContent>
        </Card>
    );
};


SmallStats.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    newlyConfirmed: PropTypes.number
};

SmallStats.defaultProps = {
    iconColor: "#BF0711",
};
export default SmallStats;