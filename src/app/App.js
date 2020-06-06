import '@fake-db'
import React, {Suspense} from 'react';
import {FuseAuthorization, FuseLayout, FuseTheme} from '@fuse';
import Provider from 'react-redux/es/components/Provider';
import {Router} from 'react-router-dom';
import jssExtend from 'jss-extend';
import history from '@history';
import {Auth} from './auth';
import store from './store';
import AppContext from './AppContext';
import routes from './fuse-configs/routesConfig';
import {create} from 'jss';
import {StylesProvider, jssPreset, createGenerateClassName} from '@material-ui/styles';
import axios from 'axios';

const jss = create({
    ...jssPreset(),
    plugins       : [...jssPreset().plugins, jssExtend()],
    insertionPoint: document.getElementById('jss-insertion-point'),
});

// axios.defaults.baseURL = 'https://localhost:5001/api/v1/';
axios.defaults.baseURL = 'https://topos-dev-api.azurewebsites.net/api/v1/';

const generateClassName = createGenerateClassName();

const App = () => {
    return (
        <Suspense fallback="loading">
            <AppContext.Provider value={{routes}}>
                <StylesProvider jss={jss} generateClassName={generateClassName}>
                    <Provider store={store}>
                        <Auth>
                            <Router history={history}>
                                <FuseAuthorization>
                                    <FuseTheme>
                                        <FuseLayout/>
                                    </FuseTheme>
                                </FuseAuthorization>
                            </Router>
                        </Auth>
                    </Provider>
                </StylesProvider>
            </AppContext.Provider>
        </Suspense>
    );
};

export default App;
