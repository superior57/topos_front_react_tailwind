import React, {useContext} from 'react';
import {renderRoutes} from 'react-router-config'
import {FuseScrollbars, FuseMessage, FuseDialog, FuseSuspense} from '@fuse';
import {makeStyles} from '@material-ui/styles';
import {Hidden} from '@material-ui/core';
import {useSelector} from 'react-redux';
import ToolbarLayout1 from './components/ToolbarLayout1';
import FooterLayout1 from './components/FooterLayout1';
import LeftSideLayout1 from './components/LeftSideLayout1';
import RightSideLayout1 from './components/RightSideLayout1';
import NavbarWrapperLayout1 from './components/NavbarWrapperLayout1';
import clsx from 'clsx';
import AppContext from 'app/AppContext';

const useStyles = makeStyles(theme => ({
    root          : {
        position          : 'relative',
        display           : 'flex',
        flexDirection     : 'row',
        width             : '100%',
        height            : '100%',
        overflow          : 'hidden',
        backgroundColor   : theme.palette.background.default,
        color             : theme.palette.text.primary,
        '&.boxed'         : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '&.scroll-body'   : {
            '& $wrapper'       : {
                height  : 'auto',
                flex    : '0 0 auto',
                overflow: 'auto'
            },
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '&.scroll-content': {
            '& $wrapper'       : {},
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '& .navigation'   : {
            '& .list-subheader-text, & .list-item-text, & .item-badge, & .arrow-icon': {
                transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.shortest,
                    easing  : theme.transitions.easing.easeInOut
                })
            },
        }
    },
    wrapper       : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%',
        flex    : '1 1 auto',
    },
    contentWrapper: {
        display      : 'flex',
        flexDirection: 'column',
        position     : 'relative',
        zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto'
    },
    content       : {
        position                    : 'relative',
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex                      : 2
    }
}));

function Layout1(props)
{
    const config = useSelector(({fuse}) => fuse.settings.current.layout.config);

    const appContext = useContext(AppContext);
    const classes = useStyles(props);
    const {routes} = appContext;

    // console.warn('FuseLayout:: rendered');

    switch ( config.scroll )
    {
        case 'body':
        {
            return (
                <div id="fuse-layout" className={clsx(classes.root, config.mode, 'scroll-' + config.scroll)}>

                    {config.leftSidePanel.display && (
                        <LeftSideLayout1/>
                    )}

                    <div className="flex flex-1 flex-col overflow-hidden relative">

                        {config.toolbar.display && config.toolbar.style === 'fixed' && config.toolbar.position === 'above' && (
                            <ToolbarLayout1/>
                        )}

                        <FuseScrollbars className="overflow-auto" scrollToTopOnChildChange>

                            {config.toolbar.display && config.toolbar.style !== 'fixed' && config.toolbar.position === 'above' && (
                                <ToolbarLayout1/>
                            )}

                            <div className={classes.wrapper}>

                                {config.navbar.display && config.navbar.position === 'left' && (
                                    <NavbarWrapperLayout1/>
                                )}

                                <div className={classes.contentWrapper}>

                                    {config.toolbar.display && config.toolbar.position === 'below' && (
                                        <ToolbarLayout1/>
                                    )}

                                    <div className={classes.content}>

                                        <FuseDialog/>

                                        <FuseSuspense>
                                            {renderRoutes(routes)}
                                        </FuseSuspense>

                                        {props.children}

                                    </div>

                                    {config.footer.display && config.footer.position === 'below' && (
                                        <FooterLayout1/>
                                    )}


                                </div>

                                {config.navbar.display && config.navbar.position === 'right' && (
                                    <NavbarWrapperLayout1/>
                                )}
                            </div>

                            {config.footer.display && config.footer.style !== 'fixed' && config.footer.position === 'above' && (
                                <FooterLayout1/>
                            )}

                        </FuseScrollbars>

                        {config.footer.display && config.footer.style === 'fixed' && config.footer.position === 'above' && (
                            <FooterLayout1/>
                        )}

                    </div>

                    {config.rightSidePanel.display && (
                        <RightSideLayout1/>
                    )}

                    <FuseMessage/>

                </div>
            );
        }
        case 'content':
        default:
        {
            return (
                <div id="fuse-layout" className={clsx(classes.root, config.mode, 'scroll-' + config.scroll)}>
                    {config.leftSidePanel.display && (
                        <LeftSideLayout1/>
                    )}

                    <div className="flex flex-1 flex-col overflow-hidden relative">

                        {config.toolbar.display && config.toolbar.position === 'above' && (
                            // <Hidden lgUp>
                                <ToolbarLayout1/>
                            // </Hidden>
                        )}

                        <div className={classes.wrapper}>

                            {config.navbar.display && config.navbar.position === 'left' && (
                                <NavbarWrapperLayout1/>
                            )}

                            <div className={classes.contentWrapper}>
                                {config.toolbar.display && config.toolbar.position === 'below' && config.toolbar.style === 'fixed' && (
                                    // <Hidden lgUp>
                                        <ToolbarLayout1/>
                                    // </Hidden>
                                )}

                                <FuseScrollbars className={classes.content} scrollToTopOnChildChange>
                                    {config.toolbar.display && config.toolbar.position === 'below' && config.toolbar.style !== 'fixed' && (
                                        // <Hidden lgUp>
                                            <ToolbarLayout1/>
                                        // </Hidden>
                                    )}

                                    <FuseDialog/>

                                    <FuseSuspense>
                                        {renderRoutes(routes)}
                                    </FuseSuspense>

                                    {props.children}

                                    {config.footer.display && config.footer.position === 'below' && config.footer.style !== 'fixed' && (
                                        <FooterLayout1/>
                                    )}
                                </FuseScrollbars>

                                {config.footer.display && config.footer.position === 'below' && config.footer.style === 'fixed' && (
                                    <FooterLayout1/>
                                )}

                            </div>

                            {config.navbar.display && config.navbar.position === 'right' && (
                                <NavbarWrapperLayout1/>
                            )}
                        </div>

                        {config.footer.display && config.footer.position === 'above' && (
                            <FooterLayout1/>
                        )}
                    </div>

                    {config.rightSidePanel.display && (
                        <RightSideLayout1/>
                    )}

                    <FuseMessage/>
                </div>
            )
        }
    }
}

export default Layout1;
