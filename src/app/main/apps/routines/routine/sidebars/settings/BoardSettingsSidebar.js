import React from 'react';
import {AppBar, Toolbar, List, ListItem, ListItemIcon, Divider, ListSubheader,  
    Icon, ListItemText, ListItemSecondaryAction, Switch} from '@material-ui/core';
import * as Actions from 'app/main/apps/scrumboard/store/actions';
import {useDispatch, useSelector} from 'react-redux';

function BoardSettingsSidebar(props)
{
    const dispatch = useDispatch();
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board);
    const close = () => {
        props.toggleSettingsDrawer(false)
    }


    return (
        <div>
            <AppBar position="static" className="flex-row">
                <div className="flex self-center p-10" onClick={() => close()} > 
                    <Icon>arrow_back</Icon>
                </div>
                <div className="flex justify-center">
                    <Toolbar style={{fontSize:`large`}}>Settings</Toolbar>
                </div>
            </AppBar>

            <List className="py-16" dense>
            <ListSubheader>Board</ListSubheader>
            <ListItem button
                onClick={() => dispatch(Actions.changeBoardSettings({subscribed: !board.settings.subscribed}))}
            >
                <ListItemIcon className="min-w-40">
                    <Icon>remove_red_eye</Icon>
                </ListItemIcon>
                <ListItemText primary="Subscribe"/>
                <ListItemSecondaryAction>
                    <Switch
                        onChange={() => dispatch(Actions.changeBoardSettings({subscribed: !board.settings.subscribed}))}
                        checked={board.settings.subscribed}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <ListItemIcon className="min-w-40">
                    <Icon>file_copy</Icon>
                </ListItemIcon>
                <ListItemText primary="Members"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon className="min-w-40">
                    <Icon>file_copy</Icon>
                </ListItemIcon>
                <ListItemText primary="Labels"/>
            </ListItem>
            {/* <ListItem button onClick={() => dispatch(Actions.copyBoard(board))}>
                <ListItemIcon className="min-w-40">
                    <Icon>file_copy</Icon>
                </ListItemIcon>
                <ListItemText primary="Copy Board"/>
            </ListItem> */}

            <ListItem button onClick={() => dispatch(Actions.deleteBoard(board.id))}>
                <ListItemIcon className="min-w-40">
                    <Icon>delete</Icon>
                </ListItemIcon>
                <ListItemText primary="Archive Board"/>
            </ListItem>
            <Divider />
            <ListSubheader>Cards</ListSubheader>
            <ListItem
                button
                onClick={() => dispatch(Actions.changeBoardSettings({cardCoverImages: !board.settings.cardCoverImages}))}
            >
                <ListItemIcon className="min-w-40">
                    <Icon>photo</Icon>
                </ListItemIcon>
                <ListItemText primary="Card Cover Images"/>
                <ListItemSecondaryAction>
                    <Switch
                        onChange={() => dispatch(Actions.changeBoardSettings({cardCoverImages: !board.settings.cardCoverImages}))}
                        checked={board.settings.cardCoverImages}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListSubheader>Activity</ListSubheader>
            <ListItem button>
                {/* <LogActivity></LogActivity> */}
            </ListItem>

            </List>
        </div>
    );
}

export default BoardSettingsSidebar;
