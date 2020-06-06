import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {withRouter} from 'react-router-dom';
import {matchRoutes} from 'react-router-config'
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from 'app/store/actions';
import {FuseLayouts} from '@fuse';
import _ from '@lodash';
import AppContext from 'app/AppContext';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor                   : theme.palette.background.default,
        color                             : theme.palette.text.primary,
        '& code:not([class*="language-"])': {
            color          : theme.palette.secondary.dark,
            backgroundColor: '#F5F5F5',
            padding        : '2px 3px',
            borderRadius   : 2,
            lineHeight     : 1.7
        },
        '& table.simple tbody tr td'      : {
            borderColor: theme.palette.divider
        },
        '& table.simple thead tr th'      : {
            borderColor: theme.palette.divider
        },
        '& a:not([role=button])'          : {
            color         : theme.palette.secondary.main,
            textDecoration: 'none',
            '&:hover'     : {
                textDecoration: 'underline'
            }
        },
        '& [class^="border-"]'            : {
            borderColor: theme.palette.divider
        },
        '& [class*="border-"]'            : {
            borderColor: theme.palette.divider
        }
    }
}));

function FuseLayout(props)
{
    const dispatch = useDispatch();
    const defaultSettings = useSelector(({fuse}) => fuse.settings.defaults);
    const settings = useSelector(({fuse}) => fuse.settings.current);

    const classes = useStyles(props);
    const appContext = useContext(AppContext);
    const {routes} = appContext;

    useEffect(() => {
        function routeSettingsCheck()
        {
            const matched = matchRoutes(routes, props.location.pathname)[0];

            if ( matched && matched.route.settings )
            {
                const routeSettings = _.merge({}, defaultSettings, matched.route.settings);
                if ( !_.isEqual(settings, routeSettings) )
                {
                    dispatch(Actions.setSettings(_.merge({}, routeSettings)));
                }
            }
            else
            {
                if ( !_.isEqual(settings, defaultSettings) )
                {
                    dispatch(Actions.resetSettings());
                }
            }
        }

        routeSettingsCheck();
    }, [defaultSettings, dispatch, props.location.pathname, routes, settings]);

    // console.warn('FuseLayout:: rendered');

    const Layout = FuseLayouts[settings.layout.style];
    return (
        <Layout classes={{root: classes.root}} {...props}/>
    );
}

export default withRouter(React.memo(FuseLayout));
