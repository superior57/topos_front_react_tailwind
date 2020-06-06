import {fuseDark} from '@fuse/fuse-colors';
import lightBlue from '@material-ui/core/colors/lightBlue';
import red from '@material-ui/core/colors/red';

const themesConfig = {
    default    : {
        palette: {
            type     : 'light',
            primary  : fuseDark,
            secondary: {
                light: lightBlue[400],
                main : lightBlue[600],
                dark : lightBlue[700]
            },
            error    : red
        },
        status : {
            danger: 'orange'
        }
    },
    sunset     : {
        palette: {
            type     : 'light',
            primary  : {
                light: '#ff908b',
                main : '#d0605e',
                dark : '#9b3134'
            },
            secondary: {
                light       : '#c76a1d',
                main        : '#ff994c',
                dark        : '#ffca7b',
                contrastText: '#fff'
            },
            error    : red
        },
        status : {
            danger: 'orange'
        }
    },
    greeny     : {
        palette: {
            type     : 'light',
            primary  : {
                light: '#6cabd4',
                main : '#387ca3',
                dark : '#005074'
            },
            secondary: {
                light       : '#89f6cf',
                main        : '#55c39e',
                dark        : '#159270',
                contrastText: '#fff'
            },
            error    : red
        },
        status : {
            danger: 'orange'
        }
    },
    beach      : {
        palette: {
            type     : 'light',
            primary  : {
                light       : '#c4d8dd',
                main        : '#93a7ab',
                dark        : '#65787c',
                contrastText: '#fff'
            },
            secondary: {
                light       : '#ffb281',
                main        : '#f18153',
                dark        : '#ba5228',
                contrastText: '#fff'
            }
        }
    },
    tech       : {
        palette: {
            type     : 'light',
            primary  : {
                light       : '#87efff',
                main        : '#4dbce9',
                dark        : '#008cb7',
                contrastText: '#fff'
            },
            secondary: {
                light: '#ffff83',
                main : '#d1e751',
                dark : '#9db516'
            }
        }
    },
    sweetHues  : {
        palette: {
            type     : 'light',
            primary  : {
                light       : '#d5c1eb',
                main        : '#a391b9',
                dark        : '#746389',
                contrastText: '#fff'
            },
            secondary: {
                light: '#90afd4',
                main : '#6080a3',
                dark : '#325474'
            }
        }
    },
    defaultDark: {
        palette: {
            type     : 'dark',
            primary  : fuseDark,
            secondary: {
                light: lightBlue[400],
                main : lightBlue[600],
                dark : lightBlue[700]
            },
            error    : red
        },
        status : {
            danger: 'orange'
        }
    },
    deepOcean  : {
        palette: {
            type     : 'dark',
            primary  : {
                light: '#8f53e7',
                main : '#5a24b4',
                dark : '#1e0083'
            },
            secondary: {
                light       : '#ff61ff',
                main        : '#fe00e9',
                dark        : '#c600b6',
                contrastText: '#fff'
            }
        }
    },
    slate      : {
        palette: {
            type     : 'dark',
            primary  : {
                light: '#86fff7',
                main : '#4ecdc4',
                dark : '#009b94'
            },
            secondary: {
                light       : '#ff9d99',
                main        : '#ff6b6b',
                dark        : '#c73840',
                contrastText: '#fff'
            }
        }
    }
};

export default themesConfig;
