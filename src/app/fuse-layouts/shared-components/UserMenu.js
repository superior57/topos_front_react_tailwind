import React, {useState,useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Avatar, Button, Icon, ListItemIcon, ListItemText, Popover, MenuItem, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from 'app/auth/store/actions';
import * as Actions from 'app/main/apps/profile/store/actions'
import {Link} from 'react-router-dom';

function UserMenu(props)
{
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);
    const member = [];

    const [userMenu, setUserMenu] = useState(null);

    // useEffect(() => {
    //     dispatch(Actions.getProfile(user.id));
    // }, [dispatch, user.id])

    const userMenuClick = event => {
        setUserMenu(event.currentTarget);
    };

    const userMenuClose = () => {
        setUserMenu(null);
    };

    return (
        <React.Fragment>

            <Button className="h-64" onClick={userMenuClick}>
                {user.avatar?
                    (
                        <Avatar className="" alt="user photo" src={user.avatar}/>
                    )
                    :
                    (
                        <Avatar className="">{user.firstName}</Avatar>
                    )
                }

                <div className="hidden md:flex flex-col ml-12 items-start">
                    <Typography component="span" className="normal-case font-600 flex">
                        {user.firstName}
                    </Typography>
                    <Typography className="text-11 capitalize" color="textSecondary">
                        {user.role}
                    </Typography>
                </div>

                <Icon className="text-16 ml-12 hidden sm:flex" variant="action">keyboard_arrow_down</Icon>
            </Button>

            <Popover
                open={Boolean(userMenu)}
                anchorEl={userMenu}
                onClose={userMenuClose}
                anchorOrigin={{
                    vertical  : 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical  : 'top',
                    horizontal: 'center'
                }}
                classes={{
                    paper: "py-8"
                }}
            >
                {!user.role || user.role.length === 0 ? (
                    <React.Fragment>
                        <MenuItem component={Link} to="/login">
                            <ListItemIcon className="min-w-40">
                                <Icon>lock</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary="Login"/>
                        </MenuItem>
                        <MenuItem component={Link} to="/register">
                            <ListItemIcon className="min-w-40">
                                <Icon>person_add</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary="Register"/>
                        </MenuItem>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <MenuItem component={Link} to="/apps/profile" onClick={userMenuClose}>
                            <ListItemIcon className="min-w-40">
                                <Icon>account_circle</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary={t('Profile')}/>
                        </MenuItem>
                        <MenuItem component={Link} to="/pages/settings" onClick={userMenuClose}>
                            <ListItemIcon className="min-w-40">
                                <Icon>settings</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary={t('Settings')}/>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                dispatch(authActions.logoutUser());
                                userMenuClose();
                            }}
                        >
                            <ListItemIcon className="min-w-40">
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary={t('Logout')}/>
                        </MenuItem>
                    </React.Fragment>
                )}
            </Popover>
        </React.Fragment>
    );
}

export default UserMenu;
