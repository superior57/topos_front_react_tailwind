import React, {useState} from 'react';
import {Avatar, Checkbox, Icon, IconButton, ListItemText, MenuItem} from '@material-ui/core';
import ToolbarMenu from './ToolbarMenu';

function MembersMenu(props)
{
    const [anchorEl, setAnchorEl] = useState(null);

    function handleMenuOpen(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose()
    {
        setAnchorEl(null);
    }

    return (
        <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
                <Icon>account_circle</Icon>
            </IconButton>
            <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
                <div className="">
                    {props.members.map(member => {
                        return (
                            <MenuItem
                                className="px-8"
                                key={member.id}
                                onClick={(ev) => {
                                    props.onToggleMember(member.id)
                                }}
                            >
                                <Checkbox checked={props.idMembers.includes(member.id)}/>
                                <Avatar className="w-32 h-32" src={member.avatar}/>
                                <ListItemText>
                                    {member.name}
                                </ListItemText>
                            </MenuItem>
                        );
                    })}
                </div>
            </ToolbarMenu>
        </div>
    );
}

export default MembersMenu;
