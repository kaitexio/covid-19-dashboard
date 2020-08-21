import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    header: {
        fontSize: '16px',
        textAlign: 'left',
    },
    chartContainer: {
        position: 'relative',
        height: '300px',
        paddingTop: 20,
    },
    stats: {
        display: 'flex',
        justifyContent: 'center'
    },
    device: {
        textAlign: 'center',
    },
    deviceIcon: {}
}));
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
        originalDoughnutDraw.apply(this, arguments);

        var chart = this.chart.chart;
        var ctx = chart.ctx;
        var width = chart.width;
        var height = chart.height;

        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em Verdana";
        ctx.textBaseline = "middle";
        ctx.color = "#BF0711";

        var text = chart.config.data.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
    }
});
const DoughnutChart = props => {
    const {className, data, ...rest} = props;

    const classes = useStyles();

    const dataset = {
        datasets: [
            {
                data: [data.confirmedCumulative, data.negative,],
                backgroundColor: [
                    "#DE3618",
                    "#006FBB",
                ],
                borderWidth: 5,
                borderColor: "#F9FAFB",
                hoverBorderColor: "#F9FAFB",
            }
        ],
        labels: ['陽性', '陰性'],
        text: `${data.positive}%`
    };

    const options = {
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            onProgress: 10

        },
        cutoutPercentage: 80,

        layout: {padding: 15},
        tooltips: {
            enabled: true,
            mode: 'index',
            intersect: true,
            borderWidth: 1,
            borderColor: "#5C6AC4",
            backgroundColor: "#E3F1DF",
            titleFontColor: "#EEC200",
            bodyFontColor: "#BF0711",
            footerFontColor: "#50B83C",
        }
    };


    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                titleTypographyProps={{className: classes.header, variant: 'h6'}}
                title="陽性率"
            />
            <Divider/>
            <CardContent>
                <div className={classes.chartContainer}>
                    <Doughnut
                        data={dataset}
                        options={options}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

DoughnutChart.propTypes = {
    className: PropTypes.string
};

export default DoughnutChart;