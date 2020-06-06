import React, {useState} from 'react';
import {Avatar, Checkbox, Icon, IconButton, ListItemText, MenuItem} from '@material-ui/core';
import ToolbarMenu from './ToolbarMenu';

function MembersMenu(props)
{
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);

    const handleMenuClose = () => setAnchorEl(null);

    const onClick = (id) => {
        props.onToggleMember(id);
        handleMenuClose();
    } 
    return (
        <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
                <Icon>account_circle</Icon>
            </IconButton>
            <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
                <div className="">
                    {props.members.map(obj => {
                        return (
                            <MenuItem
                                className="px-8"
                                key={obj.member.id}
                                onClick={() => onClick(obj.member.id)}
                            >
                                <Avatar className="w-32 h-32" src={obj.member.avatar}/>
                                <ListItemText className="p-12">
                                    {obj.member.firstName}
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
