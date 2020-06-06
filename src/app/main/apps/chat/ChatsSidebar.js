import {useTranslation} from 'react-i18next';
import {FuseScrollbars, FuseAnimateGroup, FuseUtils} from '@fuse';
import {AppBar, Avatar, ListItemIcon, List, ListItemText, Menu, MenuItem, Typography, Toolbar, Icon, IconButton, Input, Paper} from '@material-ui/core';
import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from "./store/actions";
import StatusIcon from "./StatusIcon";
import ContactListItem from './ContactListItem'

const statusArr = [
    {
        title: 'Online',
        value: 'online'
    },
    {
        title: 'Away',
        value: 'away'
    },
    {
        title: 'Do not disturb',
        value: 'do-not-disturb'
    },
    {
        title: 'Offline',
        value: 'offline'
    }
];

function ChatsSidebar(props)
{
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const contacts = useSelector(({chatApp}) => chatApp.contacts.entities);
    const user = useSelector(({chatApp}) => chatApp.user);

    const [searchText, setSearchText] = useState('');
    const [statusMenuEl, setStatusMenuEl] = useState(null);
    const [moreMenuEl, setMoreMenuEl] = useState(null);

    function handleMoreMenuClick(event)
    {
        setMoreMenuEl(event.currentTarget);
    }

    function handleMoreMenuClose(event)
    {
        setMoreMenuEl(null);
    }

    function handleStatusMenuClick(event)
    {
        event.preventDefault();
        event.stopPropagation();
        setStatusMenuEl(event.currentTarget);
    }

    function handleStatusSelect(event, status)
    {
        event.preventDefault();
        event.stopPropagation();
        dispatch(Actions.updateUserData({
            ...user,
            status
        }));
        setStatusMenuEl(null);
    }

    function handleStatusClose(event)
    {
        event.preventDefault();
        event.stopPropagation();
        setStatusMenuEl(null);
    }

    function handleSearchText(event)
    {
        setSearchText(event.target.value);
    }

    return (
        <div className="flex flex-col flex-auto h-full">
            <AppBar
                position="static"
                color="default"
                elevation={1}
            >
                <Toolbar className="flex justify-between items-center px-16 pr-4">
                    {user && (
                        <div className="relative w-40 h-40 p-0 cursor-pointer" onClick={() => dispatch(Actions.openUserSidebar())}>

                            <Avatar src={user.avatar} alt={user.firstName} className="w-40 h-40">
                                {(!user.avatar || user.avatar === '') ? user.firstName : ''}
                            </Avatar>

                            <div
                                className="absolute right-0 bottom-0 -m-4 z-10 cursor-pointer"
                                aria-owns={statusMenuEl ? 'switch-menu' : null}
                                aria-haspopup="true"
                                onClick={handleStatusMenuClick}
                            >
                                <StatusIcon status={user.status}/>
                            </div>

                            <Menu
                                id="status-switch"
                                anchorEl={statusMenuEl}
                                open={Boolean(statusMenuEl)}
                                onClose={handleStatusClose}
                            >
                                {statusArr.map((status) => (
                                    <MenuItem onClick={(ev) => handleStatusSelect(ev, status.value)} key={status.value}>
                                        <ListItemIcon className="min-w-40">
                                            <StatusIcon status={status.value}/>
                                        </ListItemIcon>
                                        <ListItemText primary={status.title}/>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    )}
                </Toolbar>
                {useMemo(() => (
                    <Toolbar className="px-16">
                        <Paper className="flex p-4 items-center w-full px-8 py-4 rounded-8" elevation={1}>

                            <Icon className="mr-8" color="action">{t("search")}</Icon>

                            <Input
                                placeholder={t("Search")}
                                className="flex flex-1"
                                disableUnderline
                                fullWidth
                                value={searchText}
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                                onChange={handleSearchText}
                            />
                        </Paper>
                    </Toolbar>
                ), [searchText])}
            </AppBar>

            <FuseScrollbars className="overflow-y-auto flex-1">
                <List className="w-full">
                    {useMemo(() => {
                        function getFilteredArray(arr, searchText)
                        {
                            if ( searchText.length === 0 )
                            {
                                return arr;
                            }
                            return FuseUtils.filterArrayByString(arr, searchText);
                        }

                        const chatListContacts = contacts.length > 0 && user && user.chatList ? user.chatList.map((_chat) => (
                            {
                                ..._chat,
                                ...contacts.find((_contact) => _contact.id === _chat.contactId)
                            }
                        )) : [];
                        const contactsArr = getFilteredArray([...contacts], searchText);
                        const chatListArr = getFilteredArray([...chatListContacts], searchText);

                        return (
                            <React.Fragment>
                                <FuseAnimateGroup
                                    enter={{
                                        animation: "transition.expandIn"
                                    }}
                                    className="flex flex-col flex-shrink-0"
                                >
                                    {chatListArr.length > 0 && (
                                        <Typography
                                            className="font-300 text-20 px-16 py-24"
                                            color="secondary"
                                        >
                                            {t("Chats")}
                                        </Typography>
                                    )}

                                    {chatListArr.map(contact => (
                                        <ContactListItem key={contact.id} contact={contact} onContactClick={(contactId) => dispatch(Actions.getChat(contactId))}/>
                                    ))}

                                    {contactsArr.length > 0 && (
                                        <Typography
                                            className="font-300 text-20 px-16 py-24"
                                            color="secondary"
                                        >
                                            {t("Contacts")}
                                        </Typography>
                                    )}

                                    {contactsArr.map(contact => (
                                        <ContactListItem key={contact.id} contact={contact} onContactClick={(contactId) => dispatch(Actions.getChat(contactId))}/>
                                    ))}
                                </FuseAnimateGroup>
                            </React.Fragment>
                        )
                    }, [contacts, user, searchText, dispatch])
                    }
                </List>
            </FuseScrollbars>
        </div>
    )
}

export default ChatsSidebar;
