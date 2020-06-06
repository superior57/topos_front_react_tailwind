import React, {useState} from 'react';
import {Avatar,TableHead, TableSortLabel, TableCell, TableRow, Tooltip} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const rows = [
    {
        id            : 'avatar',
        align         : 'center',
        disablePadding: false,
        label         : '   ',
        sort          : true
    },
    {
        id            : 'name',
        align         : 'center',
        disablePadding: false,
        label         : 'Nome',
        sort          : true
    },
    {
        id            : 'taxCode',
        align         : 'center',
        disablePadding: false,
        label         : 'Código',
        sort          : true
    },
    {
        id            : 'planName',
        align         : 'center',
        disablePadding: false,
        label         : 'Plano',
        sort          : true
    },
    {
        id            : 'date',
        align         : 'center',
        disablePadding: false,
        label         : 'Desde',
        sort          : true
    },
    {
        id            : 'actions',
        align         : 'center',
        disablePadding: false,
        label         : "Ações",
        width         : 64,
        sort          : true
    }
];

const useStyles = makeStyles(theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
}));

function AccountsTableHead(props)
{
    const [ setSelectedOrdersMenu] = useState(null);

    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };


    // const {onSelectAllClick, order, orderBy, numSelected, rowCount} = props;

    return (
        <TableHead>
            <TableRow className="h-64">
                {rows.map(row => {
                    return (
                        <TableCell
                            key={row.id}
                            align={row.align}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={props.order.id === row.id ? props.order.direction : false}
                        >
                            {row.sort && (
                                <Tooltip
                                    title="Sort"
                                    placement={row.align === "right" ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={props.order.id === row.id}
                                        direction={props.order.direction}
                                        onClick={createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            )}
                        </TableCell>
                    );
                }, this)}
            </TableRow>
        </TableHead>
    );
}

export default AccountsTableHead;
