import React, {useEffect, useReducer, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {Popper, ClickAwayListener, MenuItem, Icon, IconButton, ListItemIcon, ListItemText, Paper, TextField, Tooltip, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useSelector} from 'react-redux';
import {FuseUtils} from '@fuse';
import clsx from 'clsx';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import {withRouter} from 'react-router-dom';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';

function renderInputComponent(inputProps)
{
    const {
        variant,
        classes, inputRef = () => {
        }, ref, ...other
    } = inputProps;
    return (
        <div className="w-full relative">
            {variant === "basic" ? (
                    // Outlined
                    <React.Fragment>
                        <TextField
                            fullWidth
                            InputProps={{
                                inputRef: node => {
                                    ref(node);
                                    inputRef(node);
                                },
                                classes : {
                                    input         : clsx(classes.input, "py-0 px-16 h-48 pr-48"),
                                    notchedOutline: "rounded-8"
                                }
                            }}
                            variant="outlined"
                            {...other}
                        />
                        <Icon className="absolute top-0 right-0 h-48 w-48 p-12 pointer-events-none" color="action">search</Icon>
                    </React.Fragment>
                )
                :
                (
                    // Standard
                    <TextField
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            inputRef        : node => {
                                ref(node);
                                inputRef(node);
                            },
                            classes         : {
                                input: clsx(classes.input, "py-0 px-16 h-64")
                            }
                        }}
                        variant="standard"
                        {...other}
                    />
                )}
        </div>
    );
}

function renderSuggestion(suggestion, {query, isHighlighted})
{
    const matches = match(suggestion.title, query);
    const parts = parse(suggestion.title, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <ListItemIcon className="min-w-40">
                {suggestion.icon ?
                    (
                        <Icon>{suggestion.icon}</Icon>
                    ) :
                    (
                        <span className="text-20 w-24 font-bold uppercase text-center">{suggestion.title[0]}</span>
                    )
                }
            </ListItemIcon>
            <ListItemText
                className="pl-0"
                primary={
                    parts.map((part, index) => {
                        return part.highlight ? (
                            <span key={String(index)} style={{fontWeight: 600}}>
                                {part.text}
                            </span>
                        ) : (
                            <strong key={String(index)} style={{fontWeight: 300}}>
                                {part.text}
                            </strong>
                        );
                    })
                }
            />
        </MenuItem>
    );
}

function getSuggestions(value, data)
{
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
        ? []
        : data.filter(suggestion => {
            const keep =
                count < 10 &&
                match(suggestion.title, inputValue).length > 0;

            if ( keep )
            {
                count += 1;
            }

            return keep;
        });
}

function getSuggestionValue(suggestion)
{
    return suggestion.title;
}

const useStyles = makeStyles(theme => ({
    root                    : {},
    container               : {
        position: 'relative'
    },
    suggestionsContainerOpen: {
        position : 'absolute',
        zIndex   : 1,
        marginTop: theme.spacing(),
        left     : 0,
        right    : 0
    },
    suggestion              : {
        display: 'block'
    },
    suggestionsList         : {
        margin       : 0,
        padding      : 0,
        listStyleType: 'none'
    },
    input                   : {
        transition: theme.transitions.create(['background-color'], {
            easing  : theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short
        }),
        '&:focus' : {
            backgroundColor: theme.palette.background.paper
        }
    }
}));

const initialState = {
    searchText   : '',
    search       : false,
    navigation   : null,
    suggestions  : [],
    noSuggestions: false
};

function reducer(state, action)
{
    switch ( action.type )
    {
        case 'open':
        {
            return {
                ...state,
                opened: true
            };
        }
        case 'close':
        {
            return {
                ...state,
                opened    : false,
                searchText: ''
            };
        }
        case 'setSearchText':
        {
            return {
                ...state,
                searchText: action.value
            };
        }
        case 'setNavigation':
        {
            return {
                ...state,
                navigation: action.value
            };
        }
        case 'updateSuggestions':
        {
            const suggestions = getSuggestions(action.value, state.navigation);
            const isInputBlank = action.value.trim() === '';
            const noSuggestions = !isInputBlank && suggestions.length === 0;

            return {
                ...state,
                suggestions,
                noSuggestions
            };
        }
        case 'clearSuggestions':
        {
            return {
                ...state,
                suggestions  : [],
                noSuggestions: false
            };
        }
        case 'decrement':
        {
            return {count: state.count - 1};
        }
        default:
        {
            throw new Error();
        }
    }
}

function FuseSearch(props)
{
    const { t } = useTranslation();
    const userRole = useSelector(({auth}) => auth.user.role);
    const navigation = useSelector(({fuse}) => fuse.navigation);

    const [state, dispatch] = useReducer(reducer, initialState);
    const classes = useStyles(props);
    const suggestionsNode = useRef(null);
    const popperNode = useRef(null);

    useEffect(() => {
        function itemAuthAllowed(item)
        {
            return FuseUtils.hasPermission(item.auth, userRole)
        }

        function setNavigation()
        {
            dispatch({
                type : "setNavigation",
                value: FuseUtils.getFlatNavigation(navigation).filter(item => itemAuthAllowed(item))
            });
        }

        setNavigation();
    }, [userRole, navigation]);

    function showSearch()
    {
        dispatch({type: "open"});
        document.addEventListener("keydown", escFunction, false);
    }

    function hideSearch()
    {
        dispatch({type: "close"});
        document.removeEventListener("keydown", escFunction, false);
    }

    function escFunction(event)
    {
        if ( event.keyCode === 27 )
        {
            hideSearch();
        }
    }

    function handleSuggestionsFetchRequested({value})
    {
        dispatch({
            type: "updateSuggestions",
            value
        });
    }

    function handleSuggestionSelected(event, {suggestion})
    {
        event.preventDefault();
        event.stopPropagation();
        if ( !suggestion.url )
        {
            return;
        }
        props.history.push(suggestion.url);
        hideSearch();
    }

    function handleSuggestionsClearRequested()
    {
        dispatch({
            type: "clearSuggestions",
        });
    }

    function handleChange(event)
    {
        dispatch({
            type : "setSearchText",
            value: event.target.value
        });
    }

    function handleClickAway(event)
    {
        return (
            !suggestionsNode.current ||
            !suggestionsNode.current.contains(event.target)
        ) && hideSearch();
    }

    const autosuggestProps = {
        renderInputComponent,
        highlightFirstSuggestion   : true,
        suggestions                : state.suggestions,
        onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: handleSuggestionsClearRequested,
        onSuggestionSelected       : handleSuggestionSelected,
        getSuggestionValue,
        renderSuggestion
    };
    
    switch ( props.variant )
    {
        case 'basic':
        {
            return (
                <div className={clsx("flex items-center w-full", props.className)} ref={popperNode}>
                    <Autosuggest
                        {...autosuggestProps}
                        inputProps={{
                            variant        : props.variant,
                            classes,
                            placeholder    : t('Search'),
                            value          : state.searchText,
                            onChange       : handleChange,
                            onFocus        : showSearch,
                            InputLabelProps: {
                                shrink: true
                            },
                            autoFocus      : false
                        }}
                        theme={{
                            container      : "flex flex-1 w-full",
                            suggestionsList: classes.suggestionsList,
                            suggestion     : classes.suggestion
                        }}
                        renderSuggestionsContainer={options => (
                            <Popper
                                anchorEl={popperNode.current}
                                open={Boolean(options.children) || state.noSuggestions}
                                popperOptions={{positionFixed: true}}
                                className="z-9999"
                            >
                                <div ref={suggestionsNode}>
                                    <Paper
                                        elevation={1}
                                        square
                                        {...options.containerProps}
                                        style={{width: popperNode.current ? popperNode.current.clientWidth : null}}
                                    >
                                        {options.children}
                                        {state.noSuggestions && (
                                            <Typography className="px-16 py-12">
                                                No results..
                                            </Typography>
                                        )}
                                    </Paper>
                                </div>
                            </Popper>
                        )}
                    />
                </div>
            )
        }
        case 'full':
        {
            return (
                <div className={clsx(classes.root, "flex", props.className)}>

                    <Tooltip title="Click to search" placement="bottom">
                        <div onClick={showSearch}>
                            {props.trigger}
                        </div>
                    </Tooltip>

                    {state.opened && (
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Paper
                                className="absolute left-0 right-0 h-full z-9999"
                                square={true}
                            >
                                <div className="flex items-center w-full" ref={popperNode}>
                                    <Autosuggest
                                        {...autosuggestProps}
                                        inputProps={{
                                            classes,
                                            placeholder    : t('Search'),
                                            value          : state.searchText,
                                            onChange       : handleChange,
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            autoFocus      : true
                                        }}
                                        theme={{
                                            container      : "flex flex-1 w-full",
                                            suggestionsList: classes.suggestionsList,
                                            suggestion     : classes.suggestion
                                        }}
                                        renderSuggestionsContainer={options => (
                                            <Popper
                                                anchorEl={popperNode.current}
                                                open={Boolean(options.children) || state.noSuggestions}
                                                popperOptions={{positionFixed: true}}
                                                className="z-9999"
                                            >
                                                <div ref={suggestionsNode}>
                                                    <Paper
                                                        elevation={1}
                                                        square
                                                        {...options.containerProps}
                                                        style={{width: popperNode.current ? popperNode.current.clientWidth : null}}
                                                    >
                                                        {options.children}
                                                        {state.noSuggestions && (
                                                            <Typography className="px-16 py-12">
                                                                No results..
                                                            </Typography>
                                                        )}
                                                    </Paper>
                                                </div>
                                            </Popper>
                                        )}
                                    />
                                    <IconButton onClick={hideSearch} className="mx-8">
                                        <Icon>close</Icon>
                                    </IconButton>
                                </div>
                            </Paper>
                        </ClickAwayListener>
                    )}
                </div>
            )
        }
        default :
        {
            return null;
        }
    }
}

FuseSearch.propTypes = {};
FuseSearch.defaultProps = {
    trigger: (<IconButton className="w-64 h-64"><Icon>search</Icon></IconButton>),
    variant: 'full'// basic, full
};

export default withRouter(React.memo(FuseSearch));
