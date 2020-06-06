import React from 'react';
import {AppBar, Hidden, Icon} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import clsx from 'clsx';
import UserNavbarHeader from 'app/fuse-layouts/shared-components/UserNavbarHeader';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import NavbarFoldedToggleButton from 'app/fuse-layouts/shared-components/NavbarFoldedToggleButton';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import * as Actions from 'app/store/actions';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import {makeStyles} from '@material-ui/styles';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles({
    content: {
        overflowX                   : 'hidden',
        overflowY                   : 'auto',
        '-webkit-overflow-scrolling': 'touch',
        background                  : 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
        backgroundRepeat            : 'no-repeat',
        backgroundSize              : '100% 40px, 100% 10px',
        backgroundAttachment        : 'local, scroll'
    }
});

function NavbarLayout1(props)
{
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div className={clsx("flex flex-col overflow-hidden h-full", props.className)}>

            <AppBar
                color="primary"
                position="static"
                elevation={0}
                className="flex flex-row items-center flex-shrink h-64 min-h-64 pl-20 pr-12"
            >

                <div className="flex flex-1 pr-8" onClick={() => dispatch(Actions.navbarOpenFolded())}>
                    <Logo/>
                </div>
                {/* <div>
                    <Hidden mdDown >
                        <NavbarFoldedToggleButton className="w-40 h-40 p-0"/>
                    </Hidden>
                </div> */}
                <div onClick={() => dispatch(Actions.navbarCloseFolded())}>
                    <Hidden mdDown >
                        <Icon>arrow_back</Icon>
                    </Hidden>
                </div>
                <div onClick={() => dispatch(Actions.navbarCloseFolded())}>
                    <Hidden lgUp>
                        <NavbarMobileToggleButton className="w-40 h-40 p-0">
                            <Icon>arrow_back</Icon>
                        </NavbarMobileToggleButton>
                    </Hidden>
                </div>
                
            </AppBar>

            <FuseScrollbars className={clsx(classes.content)}>

                <UserNavbarHeader/>

                <Navigation layout="vertical"/>

            </FuseScrollbars>
        </div>
    );
}

export default NavbarLayout1;


