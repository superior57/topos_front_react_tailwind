import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {FuseScrollbars} from '@fuse';
import clsx from 'clsx';
import {useSelector} from 'react-redux';

function FusePageCardedSidebarContent(props)
{
    const mainThemeDark = useSelector(({fuse}) => fuse.settings.mainThemeDark);

    const classes = props.classes;

    return (
        <React.Fragment>
            {props.header && (
                <ThemeProvider theme={mainThemeDark}>
                    <div className={clsx(classes.sidebarHeader, props.variant)}>
                        {props.header}
                    </div>
                </ThemeProvider>
            )}

            {props.content && (
                <FuseScrollbars className={classes.sidebarContent} enable={props.innerScroll}>
                    {props.content}
                </FuseScrollbars>
            )}
        </React.Fragment>
    )
}

export default FusePageCardedSidebarContent;
