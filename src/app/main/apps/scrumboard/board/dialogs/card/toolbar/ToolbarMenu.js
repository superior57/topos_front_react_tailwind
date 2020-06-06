import React from 'react';
import {Popover, ClickAwayListener} from '@material-ui/core';

function ToolbarMenu(props)
{
    return (
        <ClickAwayListener onClickAway={props.onClose}>
            <Popover
                hideBackdrop={true}
                open={Boolean(props.state)}
                anchorEl={props.state}
                onClose={props.onClose}
                anchorOrigin={{
                    vertical  : 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical  : 'top',
                    horizontal: 'center'
                }}
                className="pointer-events-none"
                classes={{
                    paper: "pointer-events-auto py-8"
                }}
            >
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            </Popover>
        </ClickAwayListener>
    );
}

export default ToolbarMenu;
