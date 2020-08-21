import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 10
    },
    inner: {
        minWidth: 800
    },
    statusContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    status: {
        marginRight: 1
    },

}));


const PrefectureTable = props => {
    const {className, data, ...rest} = props;

    const classes = useStyles();

    const orders = data

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader

                title="TOP 10 都道府県"
            />
            <Divider/>
            <CardContent className={classes.content}>

                <div className={classes.inner}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>都道府県</TableCell>
                                <TableCell>感染者</TableCell>
                                <TableCell>昨日比</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map(order => (
                                <TableRow
                                    hover
                                    key={order.id}
                                >
                                    <TableCell>{order.prefecture}</TableCell>
                                    <TableCell>{order.amount}</TableCell>
                                    <TableCell>+{order.compYesterday}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

PrefectureTable.propTypes = {};

export default PrefectureTable;