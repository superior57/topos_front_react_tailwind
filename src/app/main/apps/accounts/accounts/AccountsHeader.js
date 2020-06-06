import React, {useEffect, useMemo, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Paper, Input,Button, Icon, Typography, TextField, Select, InputLabel, MenuItem, OutlinedInput} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import {useForm} from '@fuse/hooks';
import {Link} from 'react-router-dom';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import _ from '@lodash';

const useStyles = makeStyles(theme => ({
    container: {display: 'flex',flexWrap: 'wrap',justifyContent:'around'},
    formControl: {display:'flex',margin: theme.spacing(1),},
}));

function AccountsHeader(props)
{
    const dispatch = useDispatch();
    const mainTheme = useSelector(({fuse}) => fuse.settings.mainTheme);
    const searchText = useSelector(({accountsApp}) => accountsApp.accounts.searchText);
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex flex-1 w-full items-center justify-between">

            <div className="flex items-center">
                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Icon className="text-32 mr-0 sm:mr-12">account_balance</Icon>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <Typography className="hidden sm:flex" variant="h6">Contas</Typography>
                </FuseAnimate>
            </div>

            <div className="flex flex-1 items-center justify-center pr-0 pl-12 sm:px-12">

                <ThemeProvider theme={mainTheme}>
                    <FuseAnimate animation="transition.slideDownIn" delay={300}>
                        <Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>
                            <Icon className="mr-8" color="action">search</Icon>
                        </Paper>
                    </FuseAnimate>
                </ThemeProvider>
            </div>
            <FuseAnimate animation="transition.slideRightIn"  delay={300}>
                <Button component={Link} role="button" to="/apps/accounts/new" className="whitespace-no-wrap" variant="contained">
                    <span className="hidden sm:flex">Criar Nova Conta</span>
                    <span className="flex sm:hidden">Nova</span>
                </Button>
            </FuseAnimate>
        </div>
    );
}

export default AccountsHeader;
