import React from 'react';
import {Drawer, Hidden} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import clsx from 'clsx';
import * as Actions from 'app/store/actions';
import NavbarLayout1 from './NavbarLayout1';
import {useDispatch, useSelector} from 'react-redux';

const navbarWidth = 280;

const useStyles = makeStyles(theme => ({
    wrapper        : {
        display                     : 'flex',
        flexDirection               : 'column',
        zIndex                      : 4,
        [theme.breakpoints.up('lg')]: {
            width   : navbarWidth,
            minWidth: navbarWidth
        }
    },
    wrapperFolded  : {
        [theme.breakpoints.up('lg')]: {
            width   : 64,
            minWidth: 64
        }
    },
    navbar         : {
        display      : 'flex',
        overflow     : 'hidden',
        flexDirection: 'column',
        flex         : '1 1 auto',
        width        : navbarWidth,
        minWidth     : navbarWidth,
        height       : '100%',
        zIndex       : 4,
        transition   : theme.transitions.create(['width', 'min-width'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        }),
        boxShadow    : theme.shadows[3]
    },
    left           : {
        left: 0
    },
    right          : {
        right: 0
    },
    folded         : {
        position: 'absolute',
        width   : 64,
        minWidth: 64,
        top     : 0,
        bottom  : 0
    },
    foldedAndOpened: {
        width   : navbarWidth,
        minWidth: navbarWidth
    },
    navbarContent  : {
        flex: '1 1 auto',
    },
    foldedAndClosed: {
        '& $navbarContent': {
            '& .logo-icon'                                   : {
                width : 32,
                height: 32
            },
            '& .logo-text'                                   : {
                opacity: 0
            },
            '& .react-badge'                                 : {
                opacity: 0
            },
            '& .list-item-text, & .arrow-icon, & .item-badge': {
                opacity: 0
            },
            '& .list-subheader .list-subheader-text'         : {
                opacity: 0
            },
            '& .list-subheader:before'                       : {
                content  : '""',
                display  : 'block',
                position : 'absolute',
                minWidth : 16,
                borderTop: '2px solid',
                opacity  : .2
            },
            '& .collapse-children'                           : {
                display: 'none'
            },
            '& .user'                                        : {
                '& .username, & .email': {
                    opacity: 0
                },
                '& .avatar'            : {
                    width  : 40,
                    height : 40,
                    top    : 32,
                    padding: 0
                }
            },
            '& .list-item.active'                            : {
                marginLeft  : 12,
                width       : 40,
                padding     : 12,
                borderRadius: 20,
                '&.square'  : {
                    borderRadius: 0,
                    marginLeft  : 0,
                    paddingLeft : 24,
                    width       : '100%'
                }
            }
        }
    }
}));

function NavbarWrapperLayout1(props)
{
    const dispatch = useDispatch();
    const config = useSelector(({fuse}) => fuse.settings.current.layout.config);
    const navbarTheme = useSelector(({fuse}) => fuse.settings.navbarTheme);
    const navbar = useSelector(({fuse}) => fuse.navbar);

    const classes = useStyles();

    const folded = config.navbar.folded;
    const foldedAndClosed = folded && !navbar.foldedOpen;
    const foldedAndOpened = folded && navbar.foldedOpen;

    return (
        <ThemeProvider theme={navbarTheme}>
            <div id="fuse-navbar"
                 className={
                     clsx(
                         classes.wrapper,
                         folded && classes.wrapperFolded
                     )}
            >
                <Hidden mdDown>
                    <div
                        className={
                            clsx(
                                classes.navbar,
                                classes[config.navbar.position],
                                folded && classes.folded,
                                foldedAndOpened && classes.foldedAndOpened,
                                foldedAndClosed && classes.foldedAndClosed
                            )
                        }
                        style={{backgroundColor: navbarTheme.palette.background.default}}
                    >
                        <NavbarLayout1 className={classes.navbarContent}/>
                    </div>
                </Hidden>

                <Hidden lgUp>
                    <Drawer
                        anchor={config.navbar.position}
                        variant="temporary"
                        open={navbar.mobileOpen}
                        classes={{
                            paper: classes.navbar
                        }}
                        onClose={() => dispatch(Actions.navbarCloseMobile())}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        <NavbarLayout1 className={classes.navbarContent}/>
                    </Drawer>
                </Hidden>
            </div>
        </ThemeProvider>
    );
}

export default NavbarWrapperLayout1;
