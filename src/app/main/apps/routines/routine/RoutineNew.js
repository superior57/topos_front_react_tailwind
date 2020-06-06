import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from '@fuse/hooks';
import * as Actions from '../store/actions';
import {Button, Icon, IconButton, Typography, TextField, Select, Fab, InputLabel, Divider,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, MenuItem, OutlinedInput, 
    Stepper, Step, StepLabel, Card, CardContent} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import {green} from '@material-ui/core/colors';
import {makeStyles,useTheme} from '@material-ui/styles';
import {FuseAnimate,FusePageSimple} from '@fuse';
import _ from '@lodash';
import Formsy from 'formsy-react';
import {TextFieldFormsy} from '@fuse';

const useStyles = makeStyles(theme => ({
    layoutRoot: {},
    stepLabel : {
        cursor: 'pointer!important'
    },
    successFab: {
        background: green[500] + '!important',
        color     : 'white!important'
    }
}));

function RoutineNew()
{
    const { t } = useTranslation();
    const theme = useTheme();
    const pageLayout = useRef(null);
    const dispatch = useDispatch();
    // const routine = useSelector(({routinesApp}) => routinesApp.routine.newRoutine);
    const [selectedDateStart, setSelectedDateStart] = React.useState(new Date());
    const [selectedDateEnd, setSelectedDateEnd] = React.useState(new Date());
    const routine = {};
    const {form, handleChange, setForm} = useForm(null);
    const [activeStep, setActiveStep] = useState(1);
    const [members,setMembers] = useState([]);
    const [member,setMember] = useState({firstName:'', lastName:'', email: ''});
    const [openDialog, setOpenDialog] = useState(false);
    const inputFirstName = useRef(null);
    const classes = useStyles();
    const activeAccount = useSelector(({auth}) => auth.account);
    
    // useEffect(() => {dispatch(Actions.newRoutine());}, [dispatch]);
    useEffect(() => setForm(form => _.setIn(form, 'members', members)));
    useEffect(() => {
        if (routine && !form)
        {
            setForm(routine);
        }
    }, [form, routine, setForm]);

    const handleDateChangeStart = date => {setSelectedDateStart(date);};
    const handleDateChangeEnd = date => {setSelectedDateEnd(date);};
    
    const handleAdd =  () => {
        const updatedMembers = members.concat(member);
        setMembers(members => updatedMembers);
        setMember({firstName:'',lastName:'', email: ''});
    }

    const handleRemove = m => {
        setMembers(members => members.filter(obj => obj.email !== m.email && obj.firstName !== m.firstName && obj.lastName !== m.lastName));
    }

    const updateMemberField = e => {
        setMember({...member,[e.target.name]: e.target.value});
    };

    const handleNext = () => setActiveStep(activeStep + 1);

    const canBeNext = () =>
    {
        switch(activeStep){
            case 1:
                if(form && form.title && form.title.length > 3){return true}else{return false}
            case 2:
                return true; // é opção adicionar novos membros logo que criar o grupo
            default:
                return false;
        }
    }

    const canBeAdd = () =>
    {
        if(member && member.firstName && member.lastName && member.email &&
            member.firstName.length > 3 && member.lastName.length > 3 && member.email.length > 3){
                return true;
            }else{
                return false;
            }
    }

    const handleBack = () => setActiveStep(activeStep - 1);


    const handleSubmit = () =>
    {
        setForm(form => _.setIn(form, 'members', members));
        form.type = 'routine';
        form.startDateTime = selectedDateStart;
        form.dueDateTime = selectedDateEnd;
        form.accountId = activeAccount.id;
        handleCloseDialog();
        dispatch(Actions.createRoutine(form));
    }

    const stepContent = (step) => {

        switch (step){
            case 1:
                return (
                    <Formsy>
                        <Typography className="h2 mt-8 mb-8">{t('How are we going to call your routine ?')}</Typography>                        
                        <TextFieldFormsy className="mt-8 mb-16" label={t('Name')}   id="title"    name="title" 
                        value={form.title}  onChange={handleChange} variant="outlined" fullWidth autoFocus 
                        validations={{minLength: 4}}
                        validationErrors={{minLength: 'Min character length is 4'}}/>
                    </Formsy>
            );
            case 2:
                return (
                    <Formsy>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker className="pr-16" margin="normal" id="start-date" label={t('Start')}
                            format="dd/MM/yyyy" value={selectedDateStart} onChange={handleDateChangeStart}
                            KeyboardButtonProps={{'aria-label': 'change date',}}/>
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker className="pr-16" margin="normal" id="end-date" label={t('To')}
                            format="dd/MM/yyyy" value={selectedDateEnd} onChange={handleDateChangeEnd}
                            KeyboardButtonProps={{'aria-label': 'change date',}}/>
                        </MuiPickersUtilsProvider>
                    </Formsy>
            );
        }
    }

    const handleOpenDialog = () => setOpenDialog(true)

    const handleCloseDialog = () => setOpenDialog(false);
    
    return (
        <Grid item className="flex p-24 sm:p-32">
            <Hidden xsDown>
                <Grid item className="p-12" sm={4} md={3} lg={2} xl={2}>
                    <Box alignItems="center">
                        <Card>
                            <Stepper classes={{root: "bg-transparent"}} activeStep={activeStep - 1} orientation="vertical">
                                <Step key={1}> {/* onClick={() => handleChangeActiveStep(0)} */}
                                    <StepLabel classes={{root: classes.stepLabel}}>{t('Name')}</StepLabel>
                                </Step>
                                <Step key={2}> {/* onClick={() => handleChangeActiveStep(1)} */}
                                    <StepLabel classes={{root: classes.stepLabel}}>{t('Duration')}</StepLabel>
                                </Step>
                                <Step key={3}> {/* onClick={() => handleChangeActiveStep(2)} */}
                                    <StepLabel classes={{root: classes.stepLabel}}>{t('Confirmation')}</StepLabel>
                                </Step>
                            </Stepper>
                        </Card>
                    </Box>
                </Grid>
            </Hidden>
            <Grid item justifyContent="center" xs={12} sm={9} md={9} lg={4} xl={4}>
                <Box>
                    <Card>
                        <div className="p-12">
                            {form && stepContent(activeStep)}
                            {<div className="flex justify-between mt-12">
                                <div>
                                    {activeStep !== 1 &&
                                    <Button size="medium" starticon={<Icon>chevron_left</Icon>} onClick={handleBack} variant="contained" color="secondary"> {t('back')} </Button >}
                                </div>
                                <div>
                                    {activeStep < 2 &&
                                    <Button size="medium" starticon={<Icon>chevron_right</Icon>} onClick={handleNext} disabled={!canBeNext()} variant="contained"
                                        color="secondary"> Next </Button >}
                                    {activeStep === 2 &&
                                    <Button size="medium" starticon={<Icon>check</Icon>} disabled={!canBeNext()} variant="contained"  
                                    color="secondary" onClick={() => handleOpenDialog()}> {t('Create')} </Button >}
                                </div>
                            </div>
                            }
                            <Dialog
                            open={openDialog}
                            onClose={() => handleCloseDialog()}
                            >
                                <DialogTitle id="alert-dialog-title">Estamos quase lá !</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Chegamos no final. Vamos criar o time ?
                                        Se quiser pode voltar e revisar as etapas.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => handleCloseDialog()} color="primary">
                                        Voltar e revisar
                                    </Button>
                                    <Button onClick={() => handleSubmit()} color="primary" autoFocus>
                                        Vamos criar !
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    )
}

export default withReducer('routinesApp', reducer)(RoutineNew);