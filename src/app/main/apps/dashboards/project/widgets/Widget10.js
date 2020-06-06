import React from 'react';
import {Icon, Table, TableHead, TableCell, TableRow, Typography, Paper, TableBody} from '@material-ui/core';
import clsx from 'clsx';

function Widget10(props)
{
    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between px-16 h-64 border-b-1">
                <Typography className="text-16">{props.widget.title}</Typography>
            </div>
            <div className="table-responsive">
                <Table className="w-full min-w-full">
                    <TableHead>
                        <TableRow>
                            {props.widget.table.columns.map(column => (
                                <TableCell key={column.id} className="whitespace-no-wrap">
                                    {column.title}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.widget.table.rows.map(row => (
                            <TableRow key={row.id}>
                                {row.cells.map(cell => {
                                        switch ( cell.id )
                                        {
                                            case 'budget_type':
                                            {
                                                return (
                                                    <TableCell
                                                        key={cell.id}
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        <Typography className={clsx(cell.classes, "inline text-11 font-500 px-8 py-4 rounded-4")}>
                                                            {cell.value}
                                                        </Typography>
                                                    </TableCell>
                                                )
                                            }
                                            case 'spent_perc':
                                            {
                                                return (
                                                    <TableCell
                                                        key={cell.id}
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        <Typography className={clsx(cell.classes, "flex items-center")}>
                                                            {cell.value}
                                                            <Icon className="text-14 ml-4">{cell.icon}</Icon>
                                                        </Typography>
                                                    </TableCell>
                                                )
                                            }
                                            default:
                                            {
                                                return (
                                                    <TableCell key={cell.id} component="th" scope="row">
                                                        <Typography className={cell.classes}>
                                                            {cell.value}
                                                        </Typography>
                                                    </TableCell>
                                                )
                                            }
                                        }
                                    }
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

export default React.memo(Widget10);
