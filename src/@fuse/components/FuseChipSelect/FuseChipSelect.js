import React from 'react';
import {Paper, Chip, Typography, TextField, MenuItem} from '@material-ui/core';
import {emphasize} from '@material-ui/core/styles/colorManipulator';
import CreatableSelect from 'react-select/lib/Creatable';
import Select from 'react-select';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root            : {
        '& .fuse-chip-select__input': {
            color: theme.palette.text.primary
        },
        '&.standard'                : {
            '& $placeholder'   : {},
            '& $valueContainer': {
                paddingTop: 0
            }
        },
        '&.filled'                  : {
            '& $placeholder'   : {
                left: 12
            },
            '& $valueContainer': {
                paddingTop : 0,
                paddingLeft: 0
            },
            '& $chip'          : {
                border: '1px solid rgba(0, 0, 0, 0.12)'
            }
        },
        '&.outlined'                : {
            '& $placeholder'   : {
                left: 12
            },
            '& $valueContainer': {
                paddingLeft: 12,
                paddingTop : 0
            }
        }
    },
    input           : {
        display: 'flex',
        padding: 0,
        height : 'auto'
    },
    valueContainer  : {
        display      : 'flex',
        // flexWrap     : 'wrap',
        flex         : 1,
        alignItems   : 'center',
        paddingBottom: 0,
        paddingTop   : 0,
        minHeight    : 40
    },
    chip            : {
        margin: '4px 4px 4px 0'
    },
    chipFocused     : {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08
        )
    },
    noOptionsMessage: {
        padding: `${theme.spacing()}px ${theme.spacing(2)}px`
    },
    singleValue     : {
        fontSize: 16
    },
    placeholder     : {
        position: 'absolute',
        left    : 0,
        fontSize: 16,
        margin  : 0
    },
    paper           : {
        position : 'absolute',
        zIndex   : 2,
        // marginTop: theme.spacing(),
        left     : 0,
        right    : 0
    },
    divider         : {
        height: theme.spacing(2)
    }
}));

function NoOptionsMessage(props)
{
    const classes = useStyles();

    return (
        <Typography
            color="textSecondary"
            className={classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function inputComponent({inputRef, ...props})
{
    return <div ref={inputRef} {...props} />;
}

function Control(props)
{
    const classes = useStyles();

    return (
        <TextField
            fullWidth
            className={clsx(classes.root, props.selectProps.textFieldProps.variant)}
            InputProps={{
                inputComponent,
                inputProps: {
                    className: classes.input,
                    inputRef : props.innerRef,
                    children : props.children,
                    ...props.innerProps
                }
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

function Option(props)
{
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 600 : 400
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function Placeholder(props)
{
    const classes = useStyles();

    return (
        <Typography
            color="textSecondary"
            className={classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function SingleValue(props)
{
    const classes = useStyles();

    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={clsx(classes.chip, {
                [classes.chipFocused]: props.isFocused
            }, props.data.class)}
            
        />
    );
}

function ValueContainer(props)
{
    const classes = useStyles();

    return <div className={classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props)
{
    const classes = useStyles();

    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={clsx(classes.chip, {
                [classes.chipFocused]: props.isFocused
            }, props.data.class)}
            onDelete={event => {
                props.removeProps.onClick();
                props.removeProps.onMouseDown(event);
            }}
        />
    );
}

function Menu(props)
{
    const classes = useStyles();

    return (
        <Paper square className={classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer
};

function FuseChipSelect(props)
{
    return (
        props.variant === 'fixed' ? (
            <Select
                classNamePrefix="fuse-chip-select"
                {...props}
                components={components}
            />
        ) : (
            <CreatableSelect
                classNamePrefix="fuse-chip-select"
                {...props}
                components={components}
            />
        )
    );
}

export default React.memo(FuseChipSelect);
