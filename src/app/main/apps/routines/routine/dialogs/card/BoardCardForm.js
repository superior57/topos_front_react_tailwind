import React, {useState , useCallback, useEffect} from 'react';
import {TextField, DialogContent, DialogTitle, Icon, 
    IconButton, Typography, Toolbar, AppBar, Avatar, InputAdornment, Tooltip, List} from '@material-ui/core';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {FuseChipSelect} from '@fuse';
import {useForm, useDebounce, useUpdateEffect} from '@fuse/hooks';
import _ from '@lodash';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from 'app/main/apps/routines/store/actions/index';
import OptionsMenu from './toolbar/OptionsMenu';
import CardAttachment from './attachment/CardAttachment';
import MembersMenu from './toolbar/MembersMenu';
import LabelModel from 'app/main/apps/routines/model/LabelModel';
import moment from 'moment';
import DueMenu from './toolbar/DueMenu';
import LabelsMenu from './toolbar/LabelsMenu';
import CheckListMenu from './toolbar/CheckListMenu';
import CardChecklist from './checklist/CardChecklist';
import CardActivity from './activity/CardActivity';
import CardComment from './comment/CardComment';

function BoardCardForm(props)
{
    const dispatch = useDispatch();
    const card = useSelector(({routineApp}) => routineApp.card.data);
    const board = useSelector(({routineApp}) => routineApp.routine);
    
    const {form: cardForm, handleChange, setForm, setInForm} = useForm(card);
    const [selectedDate, setSelectedDate] = useState(cardForm.dueDateTime);
    const updateCard = useDebounce((newCard) => {dispatch(Actions.updateCard({...newCard}));}, 600);

    useUpdateEffect(() => {
        updateCard(cardForm);
    }, [dispatch, cardForm, updateCard]);

    useEffect(() => {
        const obj = board.team.userTeam.find(x => x.member.id == cardForm.assignedId);
        setInForm('assignedUser', obj == null ? null : obj.member);
    },[cardForm.assignedId])

    const handleDate = date => {setInForm('dueDateTime', date); setSelectedDate(date)};

    // const removeDue = () => setInForm('dueDateTime', null); setSelectedDate(null);

    const toggleLabel = (labelId) => setInForm('idLabels', _.xor(cardForm.idLabels, [labelId]));
    
    const toggleMember = (memberId) => setInForm('assignedId', memberId);

    const addCheckList = (newList) => setInForm('checklists', [...cardForm.checklists, newList]);

    const chipChange = (name, checkbox) => setInForm(name, checkbox.length == 0 ? "" : checkbox.value);

    const addNewChip = (name, value) => setInForm(name, [...cardForm[name], value]);

    const makeCover = (attachmentId) => setInForm('idAttachmentCover', attachmentId);

    const removeCover = () => setInForm('idAttachmentCover', '');

    const removeCheckList = (id) => setInForm('checklists', _.reject(cardForm.checklists, {id: id}));
    
    const removeAttachment = (attachmentId) =>
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

    

    const commentAdd = (comment) => setInForm('activities', [comment, ...cardForm.activities]);


    return (
        <>
            <DialogTitle component="div" className="p-0">
                <AppBar position="static" elevation={1}>
                    <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                        <div className="flex flex-1">
                            
                            {!cardForm.dueDateTime && <IconButton color="inherit" onClick={() => handleDate(new Date())}>
                                <Icon>today</Icon>
                            </IconButton>
                            }
                            {/* <LabelsMenu
                                onToggleLabel={toggleLabel}
                                labels={board.labels}
                                idLabels={cardForm.idLabels}
                            /> */}

                            {!cardForm.assignedId &&( 
                            <MembersMenu
                                onToggleMember={toggleMember}
                                members={board.team.userTeam}
                                assignedId={cardForm.assignedId}
                            />)}

                            {/* <IconButton color="inherit">
                                <Icon>attachment</Icon>
                            </IconButton> */}

                            {/* <CheckListMenu
                                onAddCheckList={addCheckList}
                            /> */}

                            <OptionsMenu
                                onRemoveCard={() => dispatch(Actions.removeCard(cardForm.id))}
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
                            className={cardForm.assignedId && 'mr-5'}
                            label="Title"
                            type="text"
                            name="title"
                            value={cardForm.title}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                        {cardForm.assignedId && (
                        <div className="mb-24 mt-3">
                            <FuseChipSelect
                                value={
                                    cardForm.assignedUser && {
                                        value: cardForm.assignedUser.id,
                                        label: (<>
                                        <Avatar className="ml-12 w-32 h-32 mr-8" src={cardForm.assignedUser.avatar}/>
                                        <div>{cardForm.assignedUser.firstName}</div></>)
                                    }
                                }
                                onChange={(value) => chipChange('assignedId', value)}
                                textFieldProps={{variant: "outlined"}}
                                options={board.team.userTeam.map((obj) => (
                                    {
                                        value: obj.member.id,
                                        label: (<><Avatar className="w-32 h-32 mr-8" src={obj.member.avatar}/><div>{obj.member.firstName}</div></>)
                                    }
                                )).concat({value: "", label: (<>Remover</>)}
                                )}
                            />
                        </div>
                    )}
                </div>

                <div className="mb-24">
                    <TextField
                        className="mr-5" 
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
                {cardForm.dueDateTime && (
                    <div className="flex flex-row justify-start items-center mb-24">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            inputVariant="outlined" 
                            className="w-full sm:w-auto mr-5" 
                            label="Start Date"
                            format="dd/MM/yyyy" 
                            value={selectedDate} 
                            onChange={handleDate}
                            variant="outlined"
                            KeyboardButtonProps={{'aria-label': 'change date',}}
                            />
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        inputVariant="outlined" 
                        className="w-full sm:w-auto  mr-5" 
                        label="Due date"
                        format="dd/MM/yyyy" 
                        value={selectedDate} 
                        onChange={handleDate}
                        variant="outlined"
                        KeyboardButtonProps={{'aria-label': 'change date',}}
                        />
                        </MuiPickersUtilsProvider>
                </div>
                )}

                <div className="flex flex-col sm:flex-row">
                    {/* {cardForm.idLabels.length > 0 && (
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
                    )} */}
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

                {/* {cardForm.checklists.map((checklist, index) => (
                    <CardChecklist
                        key={checklist.id}
                        checklist={checklist}
                        index={index}
                        onCheckListChange={handleCheckListChange}
                        onRemoveCheckList={() => removeCheckList(checklist.id)}
                    />
                ))} */}

                {/* <div className="mb-24">
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
                </div> */}

                {/* {cardForm.activities.length > 0 && (
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
                )} */}
            </DialogContent>
        </>
    );
}

export default BoardCardForm;
