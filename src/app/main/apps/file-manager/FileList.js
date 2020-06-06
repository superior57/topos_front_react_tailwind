import React from 'react';
import {Hidden, Icon, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import * as Actions from './store/actions';

const useStyles = makeStyles({
    typeIcon: {
        '&.folder:before'     : {
            content: "'folder'",
            color  : '#FFB300'
        },
        '&.document:before'   : {
            content: "'insert_drive_file'",
            color  : '#1565C0'
        },
        '&.spreadsheet:before': {
            content: "'insert_chart'",
            color  : '#4CAF50'
        }
    }
});

function FileList(props)
{
    const dispatch = useDispatch();
    const files = useSelector(({fileManagerApp}) => fileManagerApp.files);
    const selectedItemId = useSelector(({fileManagerApp}) => fileManagerApp.selectedItemId);

    const classes = useStyles();

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell className="max-w-64 w-64 p-0 text-center"> </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell className="hidden sm:table-cell">Type</TableCell>
                        <TableCell className="hidden sm:table-cell">Owner</TableCell>
                        <TableCell className="text-center hidden sm:table-cell">Size</TableCell>
                        <TableCell className="hidden sm:table-cell">Modified</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {Object.entries(files).map(([key, n]) => {
                        return (
                            <TableRow
                                key={n.id}
                                hover
                                onClick={event => dispatch(Actions.setSelectedItem(n.id))}
                                selected={n.id === selectedItemId}
                                className="cursor-pointer"
                            >
                                <TableCell className="max-w-64 w-64 p-0 text-center">
                                    <Icon className={clsx(classes.typeIcon, n.type)}/>
                                </TableCell>
                                <TableCell>{n.name}</TableCell>
                                <TableCell className="hidden sm:table-cell">{n.type}</TableCell>
                                <TableCell className="hidden sm:table-cell">{n.owner}</TableCell>
                                <TableCell className="text-center hidden sm:table-cell">{n.size === '' ? '-' : n.size}</TableCell>
                                <TableCell className="hidden sm:table-cell">{n.modified}</TableCell>
                                <Hidden lgUp>
                                    <TableCell>
                                        <IconButton
                                            onClick={(ev) => props.pageLayout.current.toggleRightSidebar()}
                                            aria-label="open right sidebar"
                                        >
                                            <Icon>info</Icon>
                                        </IconButton>
                                    </TableCell>
                                </Hidden>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </FuseAnimate>
    );
}

export default FileList;
