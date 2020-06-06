import React, {useCallback} from 'react';
import {TextField, DialogContent, DialogTitle, Icon, 
    IconButton, Typography, Toolbar, AppBar, Avatar, InputAdornment, Tooltip, List} from '@material-ui/core';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {FuseChipSelect} from '@fuse';
import {useForm, useDebounce, useUpdateEffect} from '@fuse/hooks';
import _ from '@lodash';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from 'app/main/apps/scrumboard/store/actions/index';
import LabelModel from 'app/main/apps/scrumboard/model/LabelModel';
import CardAttachment from './attachment/CardAttachment';
import DueMenu from './toolbar/DueMenu';
import LabelsMenu from './toolbar/LabelsMenu';
import MembersMenu from './toolbar/MembersMenu';
import CheckListMenu from './toolbar/CheckListMenu';
import OptionsMenu from './toolbar/OptionsMenu';
import CardChecklist from './checklist/CardChecklist';
import CardActivity from './activity/CardActivity';
import CardComment from './comment/CardComment';

function BoardCardForm(props)
{
    const dispatch = useDispatch();
    const card = useSelector(({scrumboardApp}) => scrumboardApp.card.data);
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const {form: cardForm, handleChange, setForm, setInForm} = useForm(card);
    const updateCard = useDebounce((boardId, newCard) => {
        dispatch(Actions.updateCard(boardId, {...newCard}));
    }, 600);
    const dueDate = cardForm && cardForm.due ? moment(cardForm.due).format(moment.HTML5_FMT.DATE) : "";

    useUpdateEffect(() => {
        updateCard(board.id, cardForm);
    }, [dispatch, board.id, cardForm, updateCard]);

    const handleDate = date => {setSelectedDate(date)};

    function removeDue()
    {
        setInForm('due', null);
    }

    function toggleLabel(labelId)
    {
        setInForm('idLabels', _.xor(cardForm.idLabels, [labelId]));
    }

    function toggleMember(memberId)
    {
        setInForm('idMembers', _.xor(cardForm.idMembers, [memberId]));
    }

    function addCheckList(newList)
    {
        setInForm('checklists', [...cardForm.checklists, newList]);
    }

    function chipChange(name, value)
    {
        setInForm(name, value.map(item => item.value));
    }

    function addNewChip(name, value)
    {
        setInForm(name, [...cardForm[name], value]);
    }

    function makeCover(attachmentId)
    {
        setInForm('idAttachmentCover', attachmentId);
    }

    function removeCover()
    {
        setInForm('idAttachmentCover', '');
    }

    function removeAttachment(attachmentId)
    {
        setForm(
            {
                ...cardForm,
                attachments      : _.reject(cardForm.attachments, {id: attachmentId}),
                idAttachmentCover: cardForm.idAttachmentCover === attachmentId ? '' : cardForm.idAttachmentCover
            }
        );
    }

    const handleCheckListChange = useCallback((item, index) => {
        setInForm(`checklists[${index}]`, item);
    }, [setInForm]);

    function removeCheckList(id)
    {
        setInForm('checklists', _.reject(cardForm.checklists, {id: id}));
    }

    function commentAdd(comment)
    {
        return setInForm('activities', [comment, ...cardForm.activities]);
    }

    return (
        <>
            <DialogTitle component="div" className="p-0">
                <AppBar position="static" elevation={1}>
                    <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                        <div className="flex flex-1">

                            <DueMenu
                                onDueChange={handleChange}
                                onRemoveDue={removeDue}
                                due={dueDate}
                            />

                            <LabelsMenu
                                onToggleLabel={toggleLabel}
                                labels={board.labels}
                                idLabels={cardForm.idLabels}
                            />

                            <MembersMenu
                                onToggleMember={toggleMember}
                                members={board.members}
                                idMembers={cardForm.idMembers}
                            />

                            <IconButton color="inherit">
                                <Icon>attachment</Icon>
                            </IconButton>

                            <CheckListMenu
                                onAddCheckList={addCheckList}
                            />

                            <OptionsMenu
                                onRemoveCard={() => dispatch(Actions.removeCard(board.id, cardForm.id))}
                            />

                        </div>
                        <IconButton color="inherit" onClick={ev => dispatch(Actions.closeCardDialog())}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </DialogTitle>

            <DialogContent className="p-16 sm:p-24">
                <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center mb-24">
                        <TextField
                            className="mr-5" 
                            label="Title"
                            type="text"
                            name="name"
                            value={cardForm.name}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    {cardForm.due && (
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            inputVariant="outlined" 
                            className="w-full sm:w-auto" 
                            label="Due date"
                            format="dd/MM/yyyy" 
                            value={selectedDate} 
                            onChange={handleDate}
                            variant="outlined"
                            // KeyboardButtonProps={{'aria-label': 'change date',}}
                            />
                        </MuiPickersUtilsProvider>
                    )}
                </div>

                <div className="mb-24">
                    <TextField
                        label="Description"
                        name="description"
                        multiline
                        rows="4"
                        value={cardForm.description}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </div>

                <div className="flex flex-col sm:flex-row">
                    {cardForm.idLabels.length > 0 && (
                        <div className="flex-1 mb-24">
                            <div className="flex items-center mt-16 mb-12">
                                <Icon className="text-20 mr-8" color="inherit">label</Icon>
                                <Typography className="font-600 text-16">Labels</Typography>
                            </div>
                            <FuseChipSelect
                                className={cardForm.idMembers.length > 0 && 'sm:mr-8'}
                                value={
                                    cardForm.idLabels.map(labelId => {
                                        const label = _.find(board.labels, {id: labelId});
                                        return label && {
                                            value: labelId,
                                            label: label.name,
                                            class: label.class
                                        }
                                    })
                                }
                                onChange={(value) => chipChange('idLabels', value)}
                                placeholder="Select multiple Labels"
                                isMulti
                                textFieldProps={{
                                    variant: "outlined"
                                }}
                                options={board.labels.map((label) => (
                                    {
                                        value: label.id,
                                        label: label.name,
                                        class: label.class
                                    }
                                ))}
                                onCreateOption={(name) => {
                                    // Create New Label
                                    const newLabel = new LabelModel({name});

                                    // Ad new Label to board(redux store and server)
                                    dispatch(Actions.addLabel(newLabel));

                                    // Trigger handle chip change
                                    addNewChip('idLabels', newLabel.id);

                                    return newLabel.id;
                                }}
                            />
                        </div>
                    )}

                    {cardForm.idMembers.length > 0 && (
                        <div className="flex-1 mb-24">
                            <div className="flex items-center mt-16 mb-12">
                                <Icon className="text-20 mr-8" color="inherit">supervisor_account</Icon>
                                <Typography className="font-600 text-16">Members</Typography>
                            </div>
                            <FuseChipSelect
                                className={cardForm.idLabels.length > 0 && 'sm:ml-8'}
                                value={
                                    cardForm.idMembers.map(memberId => {
                                        const member = _.find(board.members, {id: memberId});
                                        return member && {
                                            value: member.id,
                                            label: (<Tooltip title={member.name}><Avatar className="-ml-12 w-32 h-32" src={member.avatar}/></Tooltip>)
                                        }
                                    })
                                }
                                onChange={(value) => chipChange('idMembers', value)}
                                placeholder="Select multiple Members"
                                isMulti
                                textFieldProps={{
                                    variant: "outlined"
                                }}
                                options={board.members.map((member) => (
                                    {
                                        value: member.id,
                                        label: (<span className="flex items-center"><Avatar className="w-32 h-32 mr-8" src={member.avatar}/>{member.name}</span>)
                                    }
                                ))}
                                variant="fixed"
                            />
                        </div>
                    )}
                </div>

                {cardForm.attachments.length > 0 && (
                    <div className="mb-24">
                        <div className="flex items-center mt-16 mb-12">
                            <Icon className="text-20 mr-8" color="inherit">attachment</Icon>
                            <Typography className="font-600 text-16">Attachments</Typography>
                        </div>
                        <div className="flex flex-col sm:flex-row flex-wrap">
                            {cardForm.attachments.map(item => (
                                    <CardAttachment
                                        item={item}
                                        card={cardForm}
                                        makeCover={makeCover}
                                        removeCover={removeCover}
                                        removeAttachment={removeAttachment}
                                        key={item.id}
                                    />
                                )
                            )}
                        </div>
                    </div>
                )}

                {cardForm.checklists.map((checklist, index) => (
                    <CardChecklist
                        key={checklist.id}
                        checklist={checklist}
                        index={index}
                        onCheckListChange={handleCheckListChange}
                        onRemoveCheckList={() => removeCheckList(checklist.id)}
                    />
                ))}

                <div className="mb-24">
                    <div className="flex items-center mt-16 mb-12">
                        <Icon className="text-20 mr-8" color="inherit">comment</Icon>
                        <Typography className="font-600 text-16">Comment</Typography>
                    </div>
                    <div>
                        <CardComment
                            members={board.members}
                            onCommentAdd={commentAdd}
                        />
                    </div>
                </div>

                {cardForm.activities.length > 0 && (
                    <div className="mb-24">
                        <div className="flex items-center mt-16">
                            <Icon className="text-20 mr-8" color="inherit">list</Icon>
                            <Typography className="font-600 text-16">Activity</Typography>
                        </div>
                        <List className="">
                            {cardForm.activities.map(item => (
                                    <CardActivity
                                        item={item}
                                        key={item.id}
                                        members={board.members}
                                    />
                                )
                            )}
                        </List>
                    </div>
                )}
            </DialogContent>
        </>
    );
}

export default BoardCardForm;
