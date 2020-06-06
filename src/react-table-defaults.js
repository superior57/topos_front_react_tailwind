import "react-table/react-table.css";
import React, {Component} from 'react';
import {FormControl, FormHelperText, Icon, IconButton, Input, InputAdornment, Menu, MenuItem} from '@material-ui/core';
import {ReactTableDefaults} from 'react-table'
import _ from '@lodash';

const filterTypes = [
    {
        value: "contains",
        title: "Contains"
    }, {
        value: "starts-with",
        title: "Starts with"
    }, {
        value: "ends-with",
        title: "Ends with"
    }, {
        value: "matches",
        title: "Matches"
    }, {
        value: "greater-than",
        title: "Grater than"
    }, {
        value: "less-than",
        title: "Less than"
    }
];

class FilterComponent extends Component {

    state = {
        filterType  : 'contains',
        filterValue : '',
        filterMenuEl: null
    };
    changeFilterType = (filterType) => {
        const newState = {
            ...this.state,
            filterType
        };
        // Update local state
        this.setState(newState);
        // Fire the callback to alert React-Table of the new filter
        this.props.onChange(newState);
        this.handleFilterMenuClose();
    };

    changeFilterValue = (event) => {
        const newState = {
            ...this.state,
            filterValue: event.target.value
        };
        // Update local state
        this.setState(newState);
        // Fire the callback to alert React-Table of the new filter
        this.props.onChange(newState);
    };

    handleFilterMenuClick = event => {
        this.setState({filterMenuEl: event.currentTarget});
    };

    handleFilterMenuClose = () => {
        this.setState({filterMenuEl: null});
    };

    render()
    {
        const {filterMenuEl} = this.state;
        return (
            <div className="filter flex flex-col">
                <FormControl className="">
                    <Input
                        type="text"
                        onChange={this.changeFilterValue}
                        value={this.state.filterValue}
                        className="w-full"
                        inputProps={{placeholder: 'Filter'}}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-owns={filterMenuEl ? 'filter-menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleFilterMenuClick}
                                >
                                    <Icon color="action" className="text-20">filter_list</Icon>
                                </IconButton>
                                <Menu
                                    id="filter-menu"
                                    anchorEl={filterMenuEl}
                                    open={Boolean(filterMenuEl)}
                                    onClose={this.handleFilterMenuClose}
                                >
                                    {filterTypes.map(filter => (
                                        <MenuItem key={filter.value} onClick={() => this.changeFilterType(filter.value)}>{filter.title}</MenuItem>
                                    ))}
                                </Menu>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>{_.find(filterTypes, {value: this.state.filterType}).title}</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

const defaultFilterMethod = (filter, row) => {
    const id = filter.pivotId || filter.id;
    // Pivoted rows won't contain the column.
    //  If that's the case, we set the to true (allowing us to only filter on the current column)
    const rowValue = row[id].toLowerCase();
    if ( !rowValue )
    {
        return true;
    }

    const filterValue = filter.value.filterValue.toLowerCase() || '';
    const filterType = filter.value.filterType;

    switch ( filterType )
    {
        case 'contains':
            return rowValue.indexOf(filterValue) > -1;
        case 'starts-with':
            return rowValue.startsWith(filterValue);
        case 'ends-with':
            return rowValue.endsWith(filterValue);
        case 'matches':
            return rowValue === filterValue;
        case 'greater-than':
            return rowValue > filterValue;
        case 'less-than':
            return rowValue < filterValue;
        default:
            return true;
    }
};

/**
 * React Table Defaults
 */
Object.assign(ReactTableDefaults, {
    PreviousComponent: (props) => (
        <IconButton {...props}>
            <Icon>chevron_left</Icon>
        </IconButton>
    ),
    NextComponent    : (props) => (
        <IconButton {...props}>
            <Icon>chevron_right</Icon>
        </IconButton>
    ),
    FilterComponent  : (props) => (
        <FilterComponent {...props}/>
    ),
    defaultFilterMethod
});
