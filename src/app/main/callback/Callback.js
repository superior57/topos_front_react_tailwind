import React, {useEffect} from 'react';
import {FuseSplashScreen} from '@fuse';
import auth0Service from 'app/services/auth0Service';
import * as userActions from 'app/auth/store/actions';
import * as Actions from 'app/store/actions';
import {useDispatch} from 'react-redux';

function Callback(props)
{
    const dispatch = useDispatch();

    useEffect(() => {
        auth0Service.onAuthenticated(() => {
            dispatch(Actions.showMessage({message: 'Logging in with Auth0'}));

            /**
             * Retrieve user data from Auth0
             */
            auth0Service.getUserData().then(tokenData => {
                dispatch(userActions.setUserDataAuth0(tokenData));
                dispatch(Actions.showMessage({message: 'Logged in with Auth0'}));
            });
        });
    }, [dispatch]);

    return (
        <FuseSplashScreen/>
    );
}

export default Callback;
