import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import {Bar} from 'react-chartjs-2';
import {options} from "../utils/options";


const useStyles = makeStyles(() => ({
    root: {
        maxHeight: '500px',
    },
    header: {
        fontSize: '16px',
        textAlign: 'left'

    },
    chartContainer: {
        height: 400,
        position: 'relative'
    },
    actions: {
        justifyContent: 'flex-end'
    }
}));


export default function Chart(props) {
    const classes = useStyles();
    const {data} = props
    const d = {
        labels: data.date_label,
        datasets: [
            {
                label: '新規感染者数',
                backgroundColor: " #00848E",
                data: data.Bar_data
            },
        ]
    };

    return (
        <Card
            className={classes.root}>
            <CardContent>
                <CardHeader
                    titleTypographyProps={{className: classes.header, variant: 'h6'}}
                    title="日別新規感染者数"
                />
                <Divider/>
                <div className={classes.chartContainer}>
                    <Bar
                        data={d}
                        options={options}
                    />


                </div>
            </CardContent>
        </Card>
    );
}