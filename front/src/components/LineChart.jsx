import React from 'react';

import {Line} from 'react-chartjs-2';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import {options} from "../utils/options";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        maxHeight: '500px',
    },
    header: {
        fontSize: '21px',
        padding: '5px'
    },
    chartContainer: {
        height: 400,
        position: 'relative'
    },
    actions: {
        justifyContent: 'flex-end'
    }
}));

export const LineChart = (props) => {
    const color = ["#5C6AC4", "#006FBB", "#47C1BF", "#50B83C", "#F49342", "#DE3618", "#EEC200", "#43467F", "#454F5B", "#9C6ADE","#573B00"]
    const classes = useStyles();
    const {posts} = props
    const datasets = []
    posts.Top10Prefectures.map((content) => {
        datasets.push({label: content["prefecture"],  fill: false,data: content["confirmed_graph"], fillColor:color[content["id"]],strokeColor:color[content["id"]],borderColor: color[content["id"]]})
    })

    console.log(datasets)

    const data = {
        labels: posts.date_label,
        datasets: datasets,

    };

    return (
        <Card
            className={classes.root}>
            <CardContent>
                <CardHeader
                    className={classes.header}
                    titleTypographyProps={{className: classes.header, variant: 'h6', gutterBottom: true}}
                    title="都道府県別の感染者数推移"
                />
                <Divider/>
                <div className={classes.chartContainer}>
                    <Line
                        data={data}
                        options={options}

                    />

                </div>
            </CardContent>
        </Card>
    );
}