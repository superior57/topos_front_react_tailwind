import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Drawer, AppBar, Toolbar, Typography, IconButton, Hidden, Avatar, Icon, Paper, Button} from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import withReducer from 'app/store/withReducer';
import * as Actions from "./store/actions";
import Chat from "./Chat";
import ChatsSidebar from "./ChatsSidebar";
import StatusIcon from "./StatusIcon";
import ContactSidebar from './ContactSidebar';
import UserSidebar from './UserSidebar';
import reducer from './store/reducers';
import {makeStyles} from '@material-ui/styles';

const drawerWidth = 400;
const headerHeight = 200;

const useStyles = makeStyles(theme => ({
    root              : {
        display        : 'flex',
        flexDirection  : 'row',
        minHeight      : '100%',
        position       : 'relative',
        flex           : '1 1 auto',
        height         : 'auto',
        backgroundColor: theme.palette.background.default
    },
    topBg             : {
        position       : 'absolute',
        left           : 0,
        right          : 0,
        top            : 0,
        height         : headerHeight,
        backgroundImage: 'url("../../assets/images/backgrounds/header-bg.png")',
        backgroundColor: theme.palette.primary.dark,
        backgroundSize : 'cover',
        pointerEvents  : 'none'
    },
    contentCardWrapper: {
        position                      : 'relative',
        padding                       : 24,
        maxWidth                      : 1400,
        display                       : 'flex',
        flexDirection                 : 'column',
        flex                          : '1 0 auto',
        width                         : '100%',
        minWidth                      : '0',
        maxHeight                     : '95%',
        margin                        : '0 auto',
        [theme.breakpoints.down('sm')]: {
            padding: 16
        },
        [theme.breakpoints.down('xs')]: {
            padding: 12
        }
    },
    contentCard       : {
        display        : 'flex',
        position       : 'relative',
        flex           : '1 1 100%',
        flexDirection  : 'row',
        backgroundColor: "f7f7f7",
        boxShadow      : theme.shadows[1],
        borderRadius   : 8,
        minHeight      : 0,
        overflow       : 'hidden'
    },
    drawerPaper       : {
        width                       : drawerWidth,
        maxWidth                    : '100%',
        overflow                    : 'hidden',
        height                      : '100%',
        [theme.breakpoints.up('md')]: {
            position: 'relative'
        }
    },
    contentWrapper    : {
        display      : 'flex',
        flexDirection: 'column',
        flex         : '1 1 100%',
        zIndex       : 10,
        background   : `linear-gradient(to bottom, ${fade(theme.palette.background.paper, 0.8)} 0,${fade(theme.palette.background.paper, 0.6)} 20%,${fade(theme.palette.background.paper, 0.8)})`
    },
    content           : {
        display  : 'flex',
        flex     : '1 1 100%',
        minHeight: 0
    }
}));

function ChatApp(props)
{
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const chat = useSelector(({chatApp}) => chatApp.chat);
    const contacts = useSelector(({chatApp}) => chatApp.contacts.entities);
    const selectedContactId = useSelector(({chatApp}) => chatApp.contacts.selectedContactId);
    const mobileChatsSidebarOpen = useSelector(({chatApp}) => chatApp.sidebars.mobileChatsSidebarOpen);
    const userSidebarOpen = useSelector(({chatApp}) => chatApp.sidebars.userSidebarOpen);
    const contactSidebarOpen = useSelector(({chatApp}) => chatApp.sidebars.contactSidebarOpen);

    const classes = useStyles(props);
    const selectedContact = contacts.find(_contact => (_contact.id === selectedContactId));

    useEffect(() => {
        dispatch(Actions.getUserData());
        dispatch(Actions.getContacts());
    }, [dispatch]);

    return (
        <div className={clsx(classes.root)}>

            <div className={clsx(classes.contentCardWrapper, 'container')}>
            
                <div className={classes.contentCard}>

                    <Hidden mdUp>
                        <Drawer
                            className="h-full absolute z-20"
                            variant="temporary"
                            anchor="left"
                            open={mobileChatsSidebarOpen}
                            onClose={() => dispatch(Actions.closeMobileChatsSidebar())}
                            classes={{
                                paper: clsx(classes.drawerPaper, "absolute left-0")
                            }}
                            style={{position: 'absolute'}}
                            ModalProps={{
                                keepMounted  : true,
                                disablePortal: true,
                                BackdropProps: {
                                    classes: {
                                        root: "absolute"
                                    }
                                }
                            }}
                        >
                            <ChatsSidebar/>
                        </Drawer>
                    </Hidden>
                    <Hidden smDown>
                        <Drawer
                            className="h-full z-20"
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            <ChatsSidebar/>
                        </Drawer>
                    </Hidden>
                    <Drawer
                        className="h-full absolute z-30"
                        variant="temporary"
                        anchor="left"
                        open={userSidebarOpen}
                        onClose={() => dispatch(Actions.closeUserSidebar())}
                        classes={{
                            paper: clsx(classes.drawerPaper, "absolute left-0")
                        }}
                        style={{position: 'absolute'}}
                        ModalProps={{
                            keepMounted  : false,
                            disablePortal: true,
                            BackdropProps: {
                                classes: {
                                    root: "absolute"
                                }
                            }
                        }}
                    >
                        <UserSidebar/>
                    </Drawer>

                    <main className={clsx(classes.contentWrapper, "z-10")}>
                        {!chat ?
                            (
                                <>
                                    <AppBar position="static" elevation={1}>
                                        <Toolbar className="px-16"/>
                                    </AppBar>
                                    <div className="flex flex-col flex-1 items-center justify-center p-24">
                                        <Paper className="rounded-full p-48">
                                            <Icon className="block text-64" color="secondary">chat</Icon>
                                        </Paper>
                                        <Typography variant="h6" className="my-24">{t("Chat")}</Typography>
                                        <Typography className="hidden md:flex px-16 pb-24 mt-24 text-center" color="textSecondary">
                                            {t("Select a contact to start a conversation!")}
                                        </Typography>
                                        <Button variant="outlined" color="primary" className="flex md:hidden normal-case" onClick={() => dispatch(Actions.openMobileChatsSidebar())}>
                                            {t("Select a contact to start a conversation!")}
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <AppBar position="static" elevation={1}>
                                        <Toolbar className="px-16">
                                            <IconButton
                                                color="inherit"
                                                aria-label="Open drawer"
                                                onClick={() => dispatch(Actions.openMobileChatsSidebar())}
                                                className="flex md:hidden"
                                            >
                                                <Icon>chat</Icon>
                                            </IconButton>
                                            <div className="flex items-center cursor-pointer" onClick={() => dispatch(Actions.openContactSidebar())}>
                                                <div className="relative ml-8 mr-12">
                                                    <div className="absolute right-0 bottom-0 -m-4 z-10">
                                                        <StatusIcon status={selectedContact.status}/>
                                                    </div>

                                                    <Avatar src={selectedContact.avatar} alt={selectedContact.name}>
                                                        {!selectedContact.avatar || selectedContact.avatar === '' ? selectedContact.name[0] : ''}
                                                    </Avatar>
                                                </div>
                                                <Typography color="inherit" className="text-18 font-600">{selectedContact.name}</Typography>
                                            </div>
                                        </Toolbar>
                                    </AppBar>

                                    <div className={classes.content}>
                                        <Chat className="flex flex-1 z-10"/>
                                    </div>
                                </>
                            )
                        }
                    </main>

                    <Drawer
                        className="h-full absolute z-30"
                        variant="temporary"
                        anchor="right"
                        open={contactSidebarOpen}
                        onClose={() => dispatch(Actions.closeContactSidebar())}
                        classes={{
                            paper: clsx(classes.drawerPaper, "absolute right-0")
                        }}
                        style={{position: 'absolute'}}
                        ModalProps={{
                            keepMounted  : true,
                            disablePortal: true,
                            BackdropProps: {
                                classes: {
                                    root: "absolute"
                                }
                            }
                        }}
                    >
                        <ContactSidebar/>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default withReducer('chatApp', reducer)(ChatApp);
