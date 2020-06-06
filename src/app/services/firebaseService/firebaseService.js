import config from './firebaseServiceConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {AUTH_CONFIG} from '../auth0Service/auth0ServiceConfig';

class firebaseService {

    init(success)
    {
        if ( Object.entries(AUTH_CONFIG).length === 0 && AUTH_CONFIG.constructor === Object )
        {
            if ( process.env.NODE_ENV === 'development' )
            {
                console.warn("Missing Firebase Configuration at src/app/services/firebaseService/firebaseServiceConfig.js");
            }
            success(false);
            return;
        }

        if ( firebase.apps.length )
        {
            return;
        }
        firebase.initializeApp(config);
        this.db = firebase.database();
        this.auth = firebase.auth();
        success(true);
    }

    getUserData = (userId) => {
        if ( !firebase.apps.length )
        {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref(`users/${userId}`)
                .once('value')
                .then((snapshot) => {
                    const user = snapshot.val();
                    resolve(user);
                });
        });
    };

    updateUserData = (user) => {
        if ( !firebase.apps.length )
        {
            return;
        }
        return this.db.ref(`users/${user.uid}`)
            .set(user);
    };

    onAuthStateChanged = (callback) => {
        if ( !this.auth )
        {
            return;
        }
        this.auth.onAuthStateChanged(callback);
    };

    signOut = () => {
        if ( !this.auth )
        {
            return;
        }
        this.auth.signOut();
    }
}

const instance = new firebaseService();

export default instance;
