import React, {useState, useRef, useCallback} from 'react';
import {Icon, Typography, Menu, MenuItem, LinearProgress, List, ListItemText, ListItemIcon, IconButton} from '@material-ui/core';
import CardChecklistItem from './CardChecklistItem';
import CardAddChecklistItem from './CardAddChecklistItem';
import _ from '@lodash';
import {useForm, useUpdateEffect} from '@fuse/hooks';
import CardChecklistName from './CardChecklistName';

function CardChecklist(props)
{
    const {onCheckListChange, checklist, index} = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const {form, setInForm} = useForm(checklist);
    const checkListNameRef = useRef();

    useUpdateEffect(() => {
        onCheckListChange(form, index);
    }, [form, index, onCheckListChange]);

    function handleOpenNameForm()
    {
        handleMenuClose();
        checkListNameRef.current.openForm()
    }

    function handleMenuOpen(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose()
    {
        setAnchorEl(null);
    }

    function handleNameChange(name)
    {
        setInForm("name", name);
    }

    const handleListItemChange = useCallback((item, index) => {
        setInForm(`checkItems[${index}]`, item);
    }, [setInForm]);

    function handleListItemRemove(id)
    {
        setInForm('checkItems', _.reject(form.checkItems, {id}));
    }

    function checkItemsChecked()
    {
        return _.sum(form.checkItems.map(x => (x.checked ? 1 : 0)));
    }

    function handleListItemAdd(item)
    {
        setInForm('checkItems', [...form.checkItems, item]);
    }

    if ( !form )
    {
        return null;
    }
    return (
        <div className="mb-24">

            <div className="flex items-center justify-between mt-16 mb-12">
                <div className="flex items-center">
                    <Icon className="text-20 mr-8">check_box</Icon>
                    <CardChecklistName name={form.name} onNameChange={handleNameChange} ref={checkListNameRef}/>
                </div>
                <div className="">
                    <IconButton
                        aria-owns={anchorEl ? 'actions-menu' : null}
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        variant="outlined"
                        size="small"
                    >
                        <Icon className="text-20">more_vert</Icon>
                    </IconButton>
                    <Menu
                        id="actions-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={props.onRemoveCheckList}>
                            <ListItemIcon className="min-w-40">
                                <Icon>delete</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Remove Checklist"/>
                        </MenuItem>
                        <MenuItem onClick={handleOpenNameForm}>
                            <ListItemIcon className="min-w-40">
                                <Icon>edit</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Rename Checklist"/>
                        </MenuItem>
                    </Menu>
                </div>
            </div>

            <div className="">
                <div className="flex items-center pl-16">
                    <Typography className="flex font-600 mr-12">
                        {checkItemsChecked() + ' / ' + form.checkItems.length}
                    </Typography>
                    <LinearProgress
                        className="flex flex-1"
                        variant="determinate"
                        color="secondary"
                        value={100 * checkItemsChecked() / form.checkItems.length}
                    />
                </div>
                <List className="">
                    {form.checkItems.map((checkItem, index) => (
                        <CardChecklistItem
                            item={checkItem}
                            key={checkItem.id}
                            index={index}
                            onListItemChange={handleListItemChange}
                            onListItemRemove={() => handleListItemRemove(checkItem.id)}
                        />
                    ))}
                    <CardAddChecklistItem
                        onListItemAdd={(item) => handleListItemAdd(item)}
                    />
                </List>
            </div>
        </div>
    )
}

export default CardChecklist;
