import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import ReactTable from "react-table";
import * as Actions from '../../store/actions';
import UsersMultiSelectMenu from './UsersMultiSelectMenu';
import _ from '@lodash';


function AccountUsers(props)
{
    const dispatch = useDispatch();
    const account = useSelector(({accountsApp}) => accountsApp.account);
    const selectedUserIds = useSelector(({accountsApp}) => accountsApp.users.selectedUserIds);
    const memberships = useSelector(({accountsApp}) => accountsApp.account.members);
    const searchText = useSelector(({accountsApp}) => accountsApp.users.searchText);
    const removeUser = (accountId, userId) => {{dispatch(Actions.blockUser(accountId, userId))}}
    const activeUser = (accountId, userId) => dispatch(Actions.activeUser(accountId, userId))
    
    const [filteredData, setFilteredData] = useState(null);
    
    useEffect(() => { 
        if(!_.isEqual(account && account.memberships,memberships)){
        {dispatch(Actions.getAccount(props.params))}}
    },[]);
   
    
    useEffect(() => {
        function getFilteredArray(entities, searchText)
        {
            const arr = Object.keys(entities).map((id) => entities[id]);
            if ( searchText.length === 0 )
            {
                return arr;
            }
            return FuseUtils.filterArrayByString(arr, searchText);
        }
        
        if ( memberships )
        {
            setFilteredData(getFilteredArray(memberships, searchText));
        }
    }, [memberships, searchText]);

    
    if ( !filteredData || filteredData.length === 0)
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no memberships!
                </Typography>
            </div>
        );
    }

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
            <ReactTable
                className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
                getTrProps={(state, rowInfo, column) => {
                    return {
                        className: "cursor-pointer",
                        onClick  : (e, handleOriginal) => {
                            if ( rowInfo )
                            {
                            }
                        }
                    }
                }}
                data={filteredData}
                columns={[
                    {
                        Header   : () => (
                            <Checkbox
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                                onChange={(event) => {
                                    event.target.checked ? dispatch(Actions.selectAllUsers()) : dispatch(Actions.deSelectAllUsers());
                                }}
                                checked={selectedUserIds.length === Object.keys(memberships).length && selectedUserIds.length > 0}
                                indeterminate={selectedUserIds.length !== Object.keys(memberships).length && selectedUserIds.length > 0}
                            />
                        ),
                        accessor : "",
                        Cell     : row => {
                            return (<Checkbox
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    checked={selectedUserIds.includes(row.value.id)}
                                    onChange={() => dispatch(Actions.toggleInSelectedUsers(row.value.id))}
                                />
                            )
                        },
                        className: "justify-center",
                        sortable : false,
                        width    : 64
                    },
                    {
                        Header   : () => (
                            selectedUserIds.length > 0 && (
                                <UsersMultiSelectMenu/>
                            )
                        ),
                        accessor : "avatar",
                        Cell     : row => (
                            <Avatar className="mr-8" alt={row.original.user.name} src={row.original.user.avatar}/>
                        ),
                        className: "justify-center",
                        width    : 64,
                        sortable : false
                    },
                    {
                        Header    : "Name",
                        accessor  : "user.fullName",
                        filterable: true,
                        className : "font-bold"
                    },
                    {
                        Header    : "Role",
                        accessor  : "user.accountRole[0].role.name",
                        className : "text-center",
                        filterable: true
                    },
                    {
                        Header    : "Email",
                        accessor  : "user.email",
                        filterable: true
                    },
                    {
                        Header    : "Phone",
                        accessor  : "user.phoneNumber",
                        filterable: true
                    },
                    {
                        Header    : "Status",
                        align     : "center",
                        accessor  : "original.blocked",
                        Cell      : row => (
                            <div className="flex"><div className={"inline text-12 p-4 align-center rounded truncate"}>
                            {row.original.user.accountRole[0].blocked === false ? ' Active ' : ' Blocked '}</div>
                            <div>{row.original.user.accountRole[0].blocked === false ? <Icon className="text-green text-20">check_circle</Icon> : <Icon className="text-red text-20">remove_circle</Icon>}</div>
                            </div>
                        )
                    },
                    {
                        Header: "Actions",
                        width : 128,
                        Cell  : row => (
                            row.original.user.accountRole[0].blocked === false ? 
                            <div className="flex items-center">
                                <IconButton onClick={(ev) => {ev.stopPropagation();removeUser(row.original.accountId, row.original.userId)}}>
                                    <Icon className="text-red text-20">remove_circle</Icon>
                                </IconButton>
                            </div>
                            :
                            <div className="flex items-center">
                                <IconButton onClick={(ev) => {ev.stopPropagation(); activeUser(row.original.accountId, row.original.userId);}}>
                                    <Icon className="text-green text-20">check_circle</Icon>
                                </IconButton>
                            </div>
                        )
                    },
                    {
                        Header: "Profile",
                        width : 128,
                        Cell  : row => ( 
                            <div className="flex items-center">
                                <IconButton component={Link} role="button" to={`/apps/profile/${row.original.userId}`} onClick={(ev) => {ev.stopPropagation()}}>
                                    <Icon className="text-blue text-20">arrow_right</Icon>
                                </IconButton>
                            </div>
                        )
                    }
                ]}
                defaultPageSize={10}
                noDataText="No Memberships found"
            />
        </FuseAnimate>
    );
}

export default AccountUsers;
