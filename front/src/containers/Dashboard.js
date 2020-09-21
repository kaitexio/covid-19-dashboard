import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Chart from "../components/Chart";
import DoughnutChart from "../components/DoughnutChart";
import {LineChart} from "../components/LineChart";
import {useRouteData} from "react-static";
import SmallStats from "../components/smallStats";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    }
}));

function Dashboard() {
    const classes = useStyles();
    const data = useRouteData()

    return (
        <div className={classes.root}>
            <Grid
                container
                justify="center"
                spacing={5}
            >

                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={6}
                >
                    <SmallStats label="累計感染者数" value={data.posts.ConfirmedCumulative.confirmedCumulative}
                                newlyConfirmed={data.posts.ConfirmedCumulative.confirmed}


                    />

                </Grid>
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={6}
                >
                    <SmallStats label="回復者数" value={data.posts.RecoveredCumulative.recoveredCumulative}
                                newlyConfirmed={data.posts.RecoveredCumulative.recovered}
                                iconColor="#50B83C"
                    />
                </Grid>
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={6}
                >
                    <SmallStats label="死者数" value={data.posts.DeceasedCumulative.deceasedCumulative}
                                newlyConfirmed={data.posts.DeceasedCumulative.deceased}/>

                </Grid>
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={6}
                >
                    <SmallStats label="既存感染者数" value={data.posts.ActiveCumulative.activeCumulative}
                                newlyConfirmed={data.posts.ActiveCumulative.active}/>
                </Grid>
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={6}
                >
                    <SmallStats label="検査実施総数" value={data.posts.TestedCumulative.testedCumulative}
                                newlyConfirmed={data.posts.ConfirmedCumulative.confirmed}
                                iconColor="#637381"

                    />

                </Grid>
                <Grid
                    item
                    lg={8}
                    md={12}
                    xl={9}
                    xs={12}
                >
                    <Chart data={data.posts}/>
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={6}
                    xl={3}
                    xs={12}
                >
                    <DoughnutChart data={data.posts.TestedCumulative}/>
                </Grid>
                <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                >
                    <LineChart posts={data.posts}/>
                </Grid>

                <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    xs={6}
                >
                    {/*<PrefectureTable data={data.posts.Top10Prefectures}/>*/}
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;
