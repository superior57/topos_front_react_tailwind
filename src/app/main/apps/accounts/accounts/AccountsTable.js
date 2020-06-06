import React, {useEffect, useState} from 'react';
import {Avatar, Table, TableBody, TableCell, TablePagination, TableRow, Checkbox, Icon, IconButton,Typography,Button} from '@material-ui/core';
import {FuseScrollbars, FuseUtils} from '@fuse';
import {withRouter} from 'react-router-dom';
import _ from '@lodash';
import {Link} from 'react-router-dom';
import AccountsTableHead from './AccountsTableHead';
import AccountStatus from '../account/AccountStatus';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';

function AccountsTable(props)
{
    const dispatch = useDispatch();
    const accounts = useSelector(({accountsApp}) => accountsApp.accounts.data);
    const searchText = useSelector(({accountsApp}) => accountsApp.accounts.searchText);
    const user = useSelector(({auth}) => auth.user);

    const [selected, setSelected] = useState([]);
    const [data, setData] = useState(accounts);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState({
        direction: 'asc',
        id       : null
    });

    useEffect(() => {dispatch(Actions.getAccounts());}, [dispatch]);
    useEffect(() => {setData(searchText.length === 0 ? accounts : FuseUtils.filterArrayByString(accounts, searchText))
    }, [accounts, searchText]);

    const handleRequestSort = (event, property) =>
    {
        const id = property;
        let direction = 'desc';

        if ( order.id === property && order.direction === 'desc' )
        {
            direction = 'asc';
        }

        setOrder({
            direction,
            id
        });
    }

    const handleSelectAllClick = (event) =>
    {
        if ( event.target.checked )
        {
            setSelected(data.map(n => n.id));
            return;
        }
        setSelected([]);
    }

    const handleClick = (item) =>
    {
        let data = item.accountUserRoles.filter(x => x.user.id == user.id)[0];
        if(data.role.normalizedName === 'ADMIN'){
            props.history.push('/apps/account/' + item.id);
        }
    }

    const handleCheck = (event, id) =>
    {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if ( selectedIndex === -1 )
        {
            newSelected = newSelected.concat(selected, id);
        }
        else if ( selectedIndex === 0 )
        {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if ( selectedIndex === selected.length - 1 )
        {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if ( selectedIndex > 0 )
        {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    }

    const handleChangePage = (event, page) =>
    {
        setPage(page);
    }

    const handleChangeRowsPerPage = (event) =>
    {
        setRowsPerPage(event.target.value);
    }

    return (
        <div className="w-full flex flex-col">

            <FuseScrollbars className="flex-grow overflow-x-auto">

                <Table className="min-w-xl" aria-labelledby="tableTitle">

                    <AccountsTableHead
                        numSelected={selected.length}
                        order={order}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={data.length}
                        />

                    <TableBody>
                        {
                            _.orderBy(data, [
                                (o) => {
                                    switch ( o.id )
                                    {
                                        case 'id':
                                        {
                                            return parseInt(o.id, 10);
                                        }
                                        case 'name':
                                        {
                                            return o.name;
                                        }
                                        case 'planName':
                                        {
                                            return o.plan.name;
                                        }
                                        case 'taxCode':
                                        {
                                            return o.taxCode;
                                        }
                                        case 'date':
                                        {
                                            return o.date;
                                        }
                                        default:
                                        {
                                            return o.id;
                                        }
                                    }
                                }
                            ], [order.direction])
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(n => {
                                    const isSelected = selected.indexOf(n.id) !== -1;
                                    const data = n.accountUserRoles.filter(x => x.user.id == user.id)[0];
                                    return (
                                    data && <TableRow
                                            className="h-64 cursor-pointer"
                                            hover
                                            aria-checked={isSelected}
                                            tabIndex={-1}
                                            key={n.id}
                                            selected={isSelected}
                                            onClick={event => handleClick(n)}
                                        >
                                            <TableCell  component="th" scope="row" style={{textAlign: '-webkit-center'}}>
                                            {n.avatar != '' ? (
                                                <Avatar alt={n.name} src={n.avatar}></Avatar>
                                            ) : (
                                                <Avatar alt={n.name} src="assets/images/ecommerce/product-image-placeholder.png"></Avatar>
                                            )}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="center">
                                                {n.name}
                                            </TableCell>

                                            <TableCell component="th" scope="row" align="center">
                                                {n.taxCode}
                                            </TableCell>

                                            <TableCell component="th" scope="row" align="center">
                                                <AccountStatus name={n.plan.name}/>
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="center">
                                                {new Date(Date.parse(n.createdAt)).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className="w-64" component="th" scope="row" align="center">
                                                {data.role.normalizedName === 'ADMIN' &&
                                                <IconButton
                                                    onClick={(ev) => {
                                                        ev.stopPropagation();
                                                        dispatch(Actions.deleteAccount(n.id));
                                                    }}
                                                >
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                                } 
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                    </TableBody>
                </Table>
             {/* {data.length == 0 &&
             <div className="text-center">
                <Typography color="inherit" className="text-24 sm:text-40 font-light">
                    NO ACCOUNT :(
                </Typography>
                <Button component={Link} to="/apps/accounts/accounts/new" className="whitespace-no-wrap" variant="contained">
                    <span className="hidden sm:flex">Create New Account</span>
                    <span className="flex sm:hidden">New</span>
                </Button>
            </div>
            }     */}
            </FuseScrollbars>
            

            <TablePagination
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page'
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page'
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default withRouter(AccountsTable);
