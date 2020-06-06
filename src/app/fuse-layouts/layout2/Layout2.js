import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {FuseScrollbars, FuseMessage, FuseDialog, FuseSuspense} from '@fuse';
import {renderRoutes} from 'react-router-config'
import {useSelector} from 'react-redux';
import clsx from 'clsx';
import AppContext from 'app/AppContext';
import LeftSideLayout2 from './components/LeftSideLayout2';
import ToolbarLayout2 from './components/ToolbarLayout2';
import NavbarWrapperLayout2 from './components/NavbarWrapperLayout2';
import FooterLayout2 from './components/FooterLayout2';
import RightSideLayout2 from './components/RightSideLayout2';
import SettingsPanel from 'app/fuse-layouts/shared-components/SettingsPanel';

const useStyles = makeStyles(theme => ({
    root          : {
        position     : 'relative',
        display      : 'flex',
        flexDirection: 'row',
        width        : '100%',
        height       : '100%',
        overflow     : 'hidden',
        '&.boxed'    : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '&.container': {
            '& .container' : {
                maxWidth: 1120,
                width   : '100%',
                margin  : '0 auto'
            },
            '& .navigation': {}
        }
    },
    content       : {
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex                      : 4
    },
    toolbarWrapper: {
        display : 'flex',
        position: 'relative',
        zIndex  : 5
    },
    toolbar       : {
        display: 'flex',
        flex   : '1 0 auto'
    },
    footerWrapper : {
        position: 'relative',
        zIndex  : 5
    },
    footer        : {
        display: 'flex',
        flex   : '1 0 auto'
    }
}));

function Layout2(props)
{
    const config = useSelector(({fuse}) => fuse.settings.current.layout.config);

    const classes = useStyles(props);

    return (
        <AppContext.Consumer>
            {({routes}) => (
                <div id="fuse-layout" className={clsx(classes.root, config.mode)}>

                    {config.leftSidePanel.display && (
                        <LeftSideLayout2/>
                    )}

                    <div className="flex flex-1 flex-col overflow-hidden relative">

                        {config.toolbar.display && config.toolbar.position === 'above' && (
                            <ToolbarLayout2/>
                        )}

                        {config.navbar.display && (
                            <NavbarWrapperLayout2/>
                        )}

                        {config.toolbar.display && config.toolbar.position === 'below' && (
                            <ToolbarLayout2/>
                        )}

                        <FuseScrollbars className={classes.content}>

                            <FuseDialog/>

                            <div className="flex flex-auto flex-col relative">

                                <FuseSuspense>
                                    {renderRoutes(routes)}
                                </FuseSuspense>

                                {props.children}

                                {config.footer.display && config.footer.style === 'static' && (
                                    <FooterLayout2/>
                                )}

                            </div>

                        </FuseScrollbars>

                        {config.footer.display && config.footer.style === 'fixed' && (
                            <FooterLayout2/>
                        )}

                        <SettingsPanel/>

                    </div>

                    {config.rightSidePanel.display && (
                        <RightSideLayout2/>
                    )}

                    <FuseMessage/>
                </div>)}
        </AppContext.Consumer>
    );
}

export default Layout2;
