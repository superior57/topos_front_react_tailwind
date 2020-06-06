import React, {useEffect, useState} from 'react';
import {Avatar, Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import ReactTable from "react-table";
import * as Actions from '../../store/actions';
import UsersMultiSelectMenu from './UsersMultiSelectMenu';

function AccountTeams(props)
{
    const dispatch = useDispatch();
    const teams = [];
    // const teams = useSelector(({accountsApp}) => accountsApp.teams.entities);
    // const teams = useSelector(({accountsApp}) => accountsApp.teams);

    const selectedTeamIds = useSelector(({accountsApp}) => accountsApp.teams.selectedTeamIds);
    const searchText = useSelector(({accountsApp}) => accountsApp.teams.searchText);
    
    const [filteredData, setFilteredData] = useState(null);
    
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
        
        if ( teams )
        {
            setFilteredData(getFilteredArray(teams, searchText));
        }
    }, [teams, searchText]);


    if ( !filteredData )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no teams!
                </Typography>
            </div>
        );
    }

    if ( filteredData.length === 0 )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no teams!
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
                                dispatch(Actions.openEditTeamDialog(rowInfo.original));
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
                                    event.target.checked ? dispatch(Actions.selectAllTeams()) : dispatch(Actions.deSelectAllTeams());
                                }}
                                checked={selectedTeamIds.length === Object.keys(teams).length && selectedTeamIds.length > 0}
                                indeterminate={selectedTeamIds.length !== Object.keys(teams).length && selectedTeamIds.length > 0}
                            />
                        ),
                        accessor : "",
                        Cell     : row => {
                            return (<Checkbox
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    checked={selectedTeamIds.includes(row.value.id)}
                                    onChange={() => dispatch(Actions.toggleInSelectedTeams(row.value.id))}
                                />
                            )
                        },
                        className: "justify-center",
                        sortable : false,
                        width    : 64
                    },
                    {
                        Header   : () => (
                            selectedTeamIds.length > 0 && (
                                <UsersMultiSelectMenu/>
                            )
                        ),
                        accessor : "avatar",
                        Cell     : row => (
                            <Avatar className="mr-8" alt={row.original.name} src={row.value}/>
                        ),
                        className: "justify-center",
                        width    : 64,
                        sortable : false
                    },
                    {
                        Header    : "Name",
                        accessor  : "name",
                        filterable: true,
                        className : "font-bold"
                    },
                    {
                        Header    : "Created Date",
                        accessor  : "dateCreated",
                        filterable: true,
                        className : "font-bold"
                    },
                    {
                        Header    : "Archived",
                        accessor  : "isArchived",
                        filterable: true
                    },
                    {
                        Header    : "Private",
                        accessor  : "isPrivate",
                        filterable: true
                    },
                    {
                        Header: "",
                        width : 128,
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.toggleStarredTeam(row.original.id))
                                    }}
                                >
                                </IconButton>
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.removeTeam(row.original.id));
                                    }}
                                >
                                    <Icon>delete</Icon>
                                </IconButton>
                            </div>
                        )
                    }
                ]}
                defaultPageSize={10}
                noDataText="No Teams found"
            />
        </FuseAnimate>
    );
}

export default AccountTeams;
