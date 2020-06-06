import React, {useEffect, useMemo, useState} from 'react';
import {Typography, ListItem, Input, IconButton, Icon, List} from '@material-ui/core';
import {useDebounce, useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import _ from '@lodash';
import * as Actions from 'app/main/apps/notes/store/actions';
import LabelModel from 'app/main/apps/notes/model/LabelModel';

function LabelsForm(props)
{
    const dispatch = useDispatch();
    const labels = useSelector(({notesApp}) => notesApp.labels.entities);

    const [labelsForm, setLabels] = useState(labels);
    const {form: newLabelForm, handleChange, resetForm} = useForm(
        {
            name: ""
        }
    );

    useEffect(() => {
        setLabels(labels);
    }, [labels]);

    const handleOnChange = useDebounce((labels) => {
        dispatch(Actions.updateLabels(labels));
    }, 600);

    useEffect(() => {
        if ( labelsForm && !_.isEqual(labelsForm, labels) )
        {
            handleOnChange(labelsForm);
        }
    }, [handleOnChange, labels, labelsForm]);

    function isFormInValid()
    {
        return newLabelForm.name === '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInValid() )
        {
            return;
        }
        const newLabel = new LabelModel(newLabelForm);
        setLabels(_.setIn(labelsForm, newLabel.id, newLabel));
        resetForm();
    }

    return (
        <React.Fragment>
            <Typography className="text-16 mb-8 font-600">Edit Labels</Typography>
            <List dense>
                <form onSubmit={handleSubmit}>
                    <ListItem
                        className="p-0 mb-16"
                        dense
                    >
                        <Icon className="list-item-icon text-16" color="action">add</Icon>
                        <Input
                            className={clsx("flex flex-1 mx-8")}
                            name="name"
                            value={newLabelForm.name}
                            onChange={handleChange}
                            placeholder="Create new label"
                        />
                        <IconButton
                            className="w-32 h-32 mx-4 p-0"
                            aria-label="Delete"
                            disabled={isFormInValid()}
                            type="submit"
                        >
                            <Icon fontSize="small">check</Icon>
                        </IconButton>
                    </ListItem>
                </form>
                {useMemo(() => {
                    function handleOnDelete(label)
                    {
                        setLabels(_.omit(labelsForm, [label.id]));
                    }

                    function handleLabelChange(event, label)
                    {
                        const updatedLabel = new LabelModel(_.setIn(label, event.target.name, event.target.value));
                        setLabels(_.setIn(labelsForm, updatedLabel.id, updatedLabel));
                    }

                    return Object.entries(labelsForm).map(([key, label]) => (
                        <ListItem
                            className="p-0"
                            key={label.id}
                            dense
                        >
                            <Icon className="list-item-icon text-16" color="action">label</Icon>
                            <Input
                                className={clsx("flex flex-1 mx-8")}
                                name="name"
                                value={label.name}
                                onChange={(event) => handleLabelChange(event, label)}
                                disableUnderline
                            />
                            <IconButton className="w-32 h-32 mx-4 p-0" aria-label="Delete" onClick={(ev) => handleOnDelete(label)}>
                                <Icon fontSize="small">delete</Icon>
                            </IconButton>
                        </ListItem>
                    ))
                }, [labelsForm])}
            </List>
        </React.Fragment>
    );
}

export default LabelsForm;
