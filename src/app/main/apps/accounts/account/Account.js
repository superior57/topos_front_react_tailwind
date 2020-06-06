import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../store/actions';
import {Icon, Tab, Tabs, Tooltip, Typography} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import AccountDetail from './AccountDetail';
import AccountUsers from './components/AccountUsers';
import AccountTeams from './components/AccountTeams';

function Marker(props)
{
    return (
        <Tooltip title={props.text} placement="top">
            <Icon className="text-red">place</Icon>
        </Tooltip>
    );
}

function Account(props)
{
    const dispatch = useDispatch();
    const account = useSelector(({accountsApp}) => accountsApp.account);

    const [tabValue, setTabValue] = useState(0);
    const [map, setMap] = useState('shipping');

    useEffect(() => {
        dispatch(Actions.getAccount(props.match.params));
    }, [dispatch, props.match.params]);

    useEffect(() => {
        dispatch(Actions.getUsers(props.match.params));
    }, [dispatch, props.match.params]);

    useEffect(() => {
        dispatch(Actions.getTeams(props.match.params));
    }, [dispatch, props.match.params]);

    function handleChangeTab(event, tabValue)
    {
        setTabValue(tabValue);
    }

    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                account && (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-1 flex-col items-center sm:items-start">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/apps/accounts" color="inherit">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Accounts
                                </Typography>
                            </FuseAnimate>

                            <div className="flex flex-col min-w-0 items-center sm:items-start">

                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography className="text-16 sm:text-20 truncate">
                                        {account.name}
                                    </Typography>
                                </FuseAnimate>

                            </div>

                        </div>
                    </div>
                )
            }
            contentToolbar={
                <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    classes={{root: "w-full h-64"}}
                >
                    <Tab className="h-64 normal-case" label="Profile"/>
                    <Tab className="h-64 normal-case" label="Users"/>
                    <Tab className="h-64 normal-case" label="Teams"/>
                </Tabs>
            }
            content={
                account && (
                    <div className="p-16 sm:p-24 w-full">
                        {/*Account Data*/}
                        {tabValue === 0 &&
                        (
                            <AccountDetail params = {props.match.params} ></AccountDetail>
                        )}
                        {/*Users*/}
                        {tabValue === 1 &&
                        (
                            <AccountUsers params = {props.match.params} ></AccountUsers>
                        )}
                        {/*Teams*/}
                        {tabValue === 2 &&
                        (
                            <AccountTeams params = {props.match.params} ></AccountTeams>
                        )}
                    </div>
                )
            }
            innerScroll
        />
    )
}

export default withReducer('accountsApp', reducer)(Account);
