import React from 'react';
import {Divider, Icon, List, ListItem, ListItemText, Paper, ListSubheader} from '@material-ui/core';
import {FuseAnimate, NavLinkAdapter} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from 'app/main/apps/notes/store/actions';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    paper   : {
        [theme.breakpoints.down('md')]: {
            boxShadow: 'none'
        }
    },
    listItem: {
        color              : 'inherit!important',
        textDecoration     : 'none!important',
        height             : 40,
        width              : 'calc(100% - 16px)',
        borderRadius       : '0 20px 20px 0',
        paddingLeft        : 24,
        paddingRight       : 12,
        '&.active'         : {
            backgroundColor    : theme.palette.secondary.main,
            color              : theme.palette.secondary.contrastText + '!important',
            pointerEvents      : 'none',
            '& .list-item-icon': {
                color: 'inherit'
            }
        },
        '& .list-item-icon': {
            marginRight: 16
        }
    }
}));

function NotesSidebarContent(props)
{
    const dispatch = useDispatch();
    const labels = useSelector(({notesApp}) => notesApp.labels.entities);

    const classes = useStyles(props);

    return (
        <div className="py-24 lg:p-24 lg:pr-4">
            <FuseAnimate animation="transition.slideLeftIn" delay={200}>
                <Paper elevation={1} className={clsx(classes.paper, "rounded-8")}>
                    <List>
                        <ListItem
                            button
                            component={NavLinkAdapter}
                            to={'/apps/notes'}
                            exact={true}
                            activeClassName="active"
                            className={classes.listItem}
                        >
                            <Icon className="list-item-icon text-16" color="action">label</Icon>
                            <ListItemText className="truncate pr-0" primary="Notes" disableTypography={true}/>
                        </ListItem>
                        <ListItem
                            button
                            component={NavLinkAdapter}
                            to={'/apps/notes/reminders'}
                            exact={true}
                            activeClassName="active"
                            className={classes.listItem}
                        >
                            <Icon className="list-item-icon text-16" color="action">notifications</Icon>
                            <ListItemText className="truncate pr-0" primary="Reminders" disableTypography={true}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListSubheader>
                            Labels
                        </ListSubheader>
                        {Object.entries(labels).map(([key, label]) => (

                            <ListItem
                                key={label.id}
                                button
                                component={NavLinkAdapter}
                                to={`/apps/notes/labels/${label.handle}/${label.id}`}
                                exact={true}
                                activeClassName="active"
                                className={classes.listItem}
                            >
                                <Icon className="list-item-icon text-16" color="action">label</Icon>
                                <ListItemText className="truncate pr-0" primary={label.name} disableTypography={true}/>
                            </ListItem>
                        ))}
                        <ListItem
                            button
                            className={classes.listItem}
                            onClick={ev => dispatch(Actions.openLabelsDialog())}
                        >
                            <Icon className="list-item-icon text-16" color="action">edit</Icon>
                            <ListItemText className="truncate pr-0" primary="Edit Labels" disableTypography={true}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem
                            button
                            component={NavLinkAdapter}
                            to={'/apps/notes/archive'}
                            activeClassName="active"
                            className={classes.listItem}
                        >
                            <Icon className="list-item-icon text-16" color="action">archive</Icon>
                            <ListItemText className="truncate pr-0" primary="Archive" disableTypography={true}/>
                        </ListItem>
                    </List>
                </Paper>
            </FuseAnimate>
        </div>
    );
}

export default NotesSidebarContent;
