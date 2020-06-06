import React, {useEffect} from 'react';
import {Button} from '@material-ui/core';
import auth0Service from 'app/services/auth0Service';
import * as Actions from 'app/store/actions';
import * as authActions from 'app/auth/store/actions';
import {useDispatch} from 'react-redux';

function Auth0RegisterTab(props)
{
    const dispatch = useDispatch();


    useEffect(() => {

        showDialog();

        auth0Service.onAuthenticated(() => {

            dispatch(Actions.showMessage({message: 'Logging in with Auth0'}));

            auth0Service.getUserData().then(tokenData => {

                dispatch(authActions.setUserDataAuth0(tokenData));

                dispatch(Actions.showMessage({message: 'Logged in with Auth0'}));
            });
        });
    }, [dispatch]);

    function showDialog()
    {
        auth0Service.register();
    }

    return (
        <div className="w-full">
            <Button
                className="w-full my-48"
                color="primary"
                variant="contained"
                onClick={showDialog}
            >
                Log In/Sign Up with Auth0
            </Button>
        </div>
    );
}

export default Auth0RegisterTab;
