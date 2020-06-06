import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Actions from '../store/actions/index';

const pathToRegexp = require('path-to-regexp');

function MailToolbar(props)
{
    const dispatch = useDispatch();
    const mail = useSelector(({mailApp}) => mailApp.mail);

    const toPath = pathToRegexp.compile(props.match.path);
    const matchParams = {...props.match.params};
    delete matchParams['mailId'];
    const deselectUrl = toPath(matchParams);

    if ( !mail )
    {
        return null;
    }

    return (
        <div className="flex flex-1 items-center justify-between overflow-hidden sm:px-16">

            <IconButton onClick={() => props.history.push(deselectUrl)}>
                <Icon>arrow_back</Icon>
            </IconButton>

            <div className="flex items-center justify-start" aria-label="Toggle star">
                <FuseAnimate animation="transition.expandIn" delay={100}>
                    <IconButton onClick={() => dispatch(Actions.toggleStar(mail))}>
                        {mail.starred ?
                            (
                                <Icon>star</Icon>
                            )
                            :
                            (
                                <Icon>star_border</Icon>
                            )
                        }
                    </IconButton>
                </FuseAnimate>
                <FuseAnimate animation="transition.expandIn" delay={100}>
                    <IconButton onClick={() => dispatch(Actions.toggleImportant(mail))}>
                        {mail.important ?
                            (
                                <Icon>label</Icon>
                            )
                            :
                            (
                                <Icon>label_outline</Icon>
                            )
                        }
                    </IconButton>
                </FuseAnimate>
            </div>
        </div>
    );
}

export default withRouter(MailToolbar);
