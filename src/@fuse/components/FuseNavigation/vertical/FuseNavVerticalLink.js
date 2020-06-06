import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon, ListItem, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseUtils} from '@fuse';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from 'app/store/actions';
import FuseNavBadge from './../FuseNavBadge';

const useStyles = makeStyles(theme => ({
    item: {
        height                     : 40,
        width                      : 'calc(100% - 16px)',
        borderRadius               : '0 20px 20px 0',
        paddingRight               : 12,
        '&.active'                 : {
            backgroundColor            : theme.palette.secondary.main,
            color                      : theme.palette.secondary.contrastText + '!important',
            pointerEvents              : 'none',
            transition                 : 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
            '& .list-item-text-primary': {
                color: 'inherit'
            },
            '& .list-item-icon'        : {
                color: 'inherit'
            }
        },
        '&.square, &.active.square': {
            width       : '100%',
            borderRadius: '0'
        },
        '& .list-item-icon'        : {},
        '& .list-item-text'        : {},
        color                      : theme.palette.text.primary,
        textDecoration             : 'none!important'
    }
}));

function FuseNavVerticalLink(props)
{
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userRole = useSelector(({auth}) => auth.user.role);

    const classes = useStyles(props);
    const {item, nestedLevel, active} = props;
    let paddingValue = 40 + (nestedLevel * 16);
    const listItemPadding = nestedLevel > 0 ? 'pl-' + (paddingValue > 80 ? 80 : paddingValue) : 'pl-24';

    if ( !FuseUtils.hasPermission(item.auth, userRole) )
    {
        return null;
    }

    return (
        <ListItem
            button
            component="a"
            href={item.url}
            target={item.target ? item.target : "_blank"}
            className={clsx(classes.item, listItemPadding, 'list-item', active)}
            onClick={ev => dispatch(Actions.navbarCloseMobile())}
        >
            {item.icon && (
                <Icon className="list-item-icon text-16 flex-shrink-0 mr-16" color="action">{item.icon}</Icon>
            )}
            <ListItemText className="list-item-text" primary={t(item.title.toString())} classes={{primary: 'text-14 list-item-text-primary'}}/>
            {item.badge && (
                <FuseNavBadge badge={item.badge}/>
            )}
        </ListItem>
    );
}

FuseNavVerticalLink.propTypes = {
    item: PropTypes.shape(
        {
            id    : PropTypes.string.isRequired,
            title : PropTypes.string,
            icon  : PropTypes.string,
            url   : PropTypes.string,
            target: PropTypes.string
        })
};
FuseNavVerticalLink.defaultProps = {};

const NavVerticalLink = withRouter(React.memo(FuseNavVerticalLink));

export default NavVerticalLink;
