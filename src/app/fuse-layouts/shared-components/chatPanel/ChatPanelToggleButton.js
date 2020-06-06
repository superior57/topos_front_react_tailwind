import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import * as Actions from './store/actions/state.actions';

const ChatPanelToggleButton = (props) => {
    const dispatch = useDispatch();

    return (
        <IconButton className="w-64 h-64" onClick={ev => dispatch(Actions.toggleChatPanel())}>
            {props.children}
        </IconButton>
    );
};

ChatPanelToggleButton.defaultProps = {
    children: <Icon>chat</Icon>
};

export default ChatPanelToggleButton;
