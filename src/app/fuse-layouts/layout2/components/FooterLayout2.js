import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import PoweredByLinks from 'app/fuse-layouts/shared-components/PoweredByLinks';
import {useSelector} from 'react-redux';

function FooterLayout2(props)
{
    const footerTheme = useSelector(({fuse}) => fuse.settings.footerTheme);

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" color="default">
                <Toolbar className="px-16 py-0 flex items-center">

                    <div className="flex flex-1">
                    </div>

                    <div>
                        <PoweredByLinks/>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default FooterLayout2;
