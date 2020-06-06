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

function TeamNew()
{
    const { t } = useTranslation();
    const theme = useTheme();
    const pageLayout = useRef(null);
    const dispatch = useDispatch();
    const team = useSelector(({teamsApp}) => teamsApp.team.newTeam);
    const {form, handleChange, setForm} = useForm(null);
    const [activeStep, setActiveStep] = useState(1);
    const [members,setMembers] = useState([]);
    const [member,setMember] = useState({firstName:'', lastName:'', email: ''});
    const [openDialog, setOpenDialog] = useState(false);
    const inputFirstName = useRef(null);
    const classes = useStyles();
    const activeAccount = useSelector(({auth}) => auth.account);
    
    useEffect(() => {dispatch(Actions.newTeam());}, [dispatch]);
    useEffect(() => setForm(form => _.setIn(form, 'members', members)));
    useEffect(() => {
        if (team && !form)
        {
            setForm(team);
        }
    }, [form, team, setForm]);

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
                if(form && form.name && form.name.length > 4){return true}else{return false}
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
        form.from = 'team';
        form.accountId = activeAccount.id;
        handleCloseDialog();
        dispatch(Actions.createTeam(form));
    }
    
    const stepContent = (step) => {

        switch (step){
            case 1:
                return (
                    <Formsy>
                        <Typography className="h2 mt-8 mb-8">Como vamos chamar o time ?</Typography>                        
                        <Typography className="font-medium mt-8 ml-8" variant="caption" color="textSecondary">Pode ser, por exemplo, o nome da área ou do projeto</Typography>
                        <TextFieldFormsy className="mt-8 mb-16" required label={t('Name')}   id="name"    name="name" 
                        value={form.name}  onChange={handleChange} variant="outlined" fullWidth autoFocus 
                        validations={{minLength: 4}}
                        validationErrors={{minLength: 'Min character length is 4'}}/>
                    </Formsy>
            );
            case 2:
                return (
                    <div>
                        <Formsy>
                            <Typography className="h2 mt-8 mb-8">Chegou a hora de convidarmos o pessoal que trabalha com você e que vai fazer parte do time</Typography>                        
                            <Typography className="flex flex-row font-medium mt-8 ml-8" variant="caption" color="textSecondary">fique tranquilo que mesmo depois da conta criada você vai conseguir adicionar ou remover usuários</Typography>
                            <TextFieldFormsy ref={inputFirstName} className="mt-8 mb-16 mr-16" required label="First Name"   id="firstName"    name="firstName" 
                            value={member.firstName} onChange={updateMemberField} variant="outlined" 
                            validations={{minLength: 4}} validationErrors={{minLength: 'Min character length is 4'}}  />
                            <TextFieldFormsy className="mt-8 mb-16 mr-16" required label="Last Name"   id="lastName"    name="lastName" 
                            value={member.lastName} onChange={updateMemberField} variant="outlined" 
                            validations={{minLength: 4}} validationErrors={{minLength: 'Min character length is 4'}}  />
                            <TextFieldFormsy className="mt-8 mb-16 mr-16" required label="E-mail"   id="email"    name="email" 
                            value={member.email} type="email" onChange={updateMemberField} variant="outlined" 
                            validations="isEmail" validationErrors={{isEmail: 'Please enter a valid email'}} />
                            <Button className="mt-8 mb-16 mr-16" onClick={() => handleAdd()} disabled={!canBeAdd()} variant="contained"> Add</Button>
                        </Formsy>
                        <div>
                            {members && members.map((m, i) => (
                                <div key={i}>
                                    <TextField className="mt-8 mb-16 mr-16" key={`firstName`+ i}  value={m.firstName}  label="Read Only" variant="outlined" margin="normal" InputProps={{readOnly: true,}}/>
                                    <TextField className="mt-8 mb-16 mr-16" key={`lastName`+ i}  value={m.lastName}  label="Read Only" variant="outlined" margin="normal" InputProps={{readOnly: true,}}/>
                                    <TextField className="mt-8 mb-16 mr-16" key={`email`+ i} value={m.email} label="Read Only" variant="outlined" margin="normal" InputProps={{readOnly: true,}}/>
                                    <Button className="mt-8 mb-16 mr-16" key={`btn`+ i} onClick={() => handleRemove(m)} variant="contained"> Remove</Button>
                                </div>
                            ))}
                        </div>
                    </div>
            );
        }
    }

    const handleOpenDialog = () => setOpenDialog(true)

    const handleCloseDialog = () => setOpenDialog(false);
    
    return (
        <Grid item className="flex p-24 sm:p-32">
            <Hidden xsDown>
                <Grid item className="pr-2" sm={4} md={3} lg={2} xl={2}>
                    <Box alignItems="center">
                        <Card>
                            <Stepper classes={{root: "bg-transparent"}} activeStep={activeStep - 1} orientation="vertical">
                                <Step key={1}> {/* onClick={() => handleChangeActiveStep(0)} */}
                                    <StepLabel classes={{root: classes.stepLabel}}>{'Nome'}</StepLabel>
                                </Step>
                                <Step key={2}> {/* onClick={() => handleChangeActiveStep(1)} */}
                                    <StepLabel classes={{root: classes.stepLabel}}>{'Membros'}</StepLabel>
                                </Step>
                                <Step key={3}> {/* onClick={() => handleChangeActiveStep(2)} */}
                                    <StepLabel classes={{root: classes.stepLabel}}>{'Confirmação'}</StepLabel>
                                </Step>
                            </Stepper>
                        </Card>
                    </Box>
                </Grid>
            </Hidden>
            <Grid item className="pr-2" justifyContent="center" xs={12} sm={9} md={9} lg={9} xl={9}>
                <Box>
                    <Card>
                        <div className="p-12">
                            {form && stepContent(activeStep)}
                            {<div className="flex justify-between mt-12 w-1/2">
                                <div>
                                    {activeStep !== 1 &&
                                    <Button size="medium" starticon={<Icon>chevron_left</Icon>} onClick={handleBack} variant="contained" color="secondary"> back </Button >}
                                </div>
                                <div>
                                    {activeStep < 2 &&
                                    <Button size="medium" starticon={<Icon>chevron_right</Icon>} onClick={handleNext} disabled={!canBeNext()} variant="contained"
                                        color="secondary"> Next </Button >}
                                    {activeStep === 2 &&
                                    <Button size="medium" starticon={<Icon>check</Icon>} onClick={handleNext} variant="contained"  
                                    color="secondary" onClick={() => handleOpenDialog()}> Create </Button >}
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

    // return (
    //     <Grid item className="p-24 sm:p-32" xs={12} sm={10} md={10} lg={10} xl={10}>
    //         <FusePageSimple
    //             classes={{
    //                 root: classes.layoutRoot
    //             }}
    //             header={readOnly
    //                 team && (
    //                     <div className="flex flex-1 w-full items-center justify-between">

    //                         <div className="flex flex-1 flex-col items-center sm:items-start">

    //                             <FuseAnimate animation="transition.slideRightIn" delay={300}>
    //                                 <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/apps/teams" color="inherit">
    //                                     <Icon className="ml-8 mr-4 text-20">arrow_back</Icon>
    //                                     Times
    //                                 </Typography>
    //                             </FuseAnimate>

    //                             <div className="flex flex-col min-w-0 items-center sm:items-start">

    //                                 <FuseAnimate animation="transition.slideLeftIn" delay={300}>
    //                                     <Typography className="text-16 sm:text-20 truncate">
    //                                         {team.name}
    //                                     </Typography>
    //                                 </FuseAnimate>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 )
    //             }

    //             leftSidebarContent={
    //                 <Stepper classes={{root: "bg-transparent"}} activeStep={activeStep - 1} orientation="vertical">
    //                     <Step key={1}> {/* onClick={() => handleChangeActiveStep(0)} */}
    //                         <StepLabel classes={{root: classes.stepLabel}}>{'Nome'}</StepLabel>
    //                     </Step>
    //                     <Step key={2}> {/* onClick={() => handleChangeActiveStep(1)} */}
    //                         <StepLabel classes={{root: classes.stepLabel}}>{'Membros'}</StepLabel>
    //                     </Step>
    //                     <Step key={3}> {/* onClick={() => handleChangeActiveStep(2)} */}
    //                         <StepLabel classes={{root: classes.stepLabel}}>{'Confirmação'}</StepLabel>
    //                     </Step>
    //                 </Stepper>
    //             }
    //             content={

    //                 <div className="p-12">
    //                     {form && stepContent(activeStep)}
    //                     {<div className="flex justify-between mt-12 w-1/2">
    //                         <div>
    //                             {activeStep !== 1 &&
    //                             <Button size="medium" starticon={<Icon>chevron_left</Icon>} onClick={handleBack} variant="contained" color="secondary"> back </Button >}
    //                         </div>
    //                         <div>
    //                             {activeStep < 2 &&
    //                             <Button size="medium" starticon={<Icon>chevron_right</Icon>} onClick={handleNext} disabled={!canBeNext()} variant="contained"
    //                                 color="secondary"> Next </Button >}
    //                             {activeStep === 2 &&
    //                             <Button size="medium" starticon={<Icon>check</Icon>} onClick={handleNext} variant="contained"  
    //                             color="secondary" onClick={() => handleOpenDialog()}> Create </Button >}
    //                         </div>
    //                     </div>
    //                     }
    //                     <Dialog
    //                     open={openDialog}
    //                     onClose={() => handleCloseDialog()}
    //                     >
    //                         <DialogTitle id="alert-dialog-title">Estamos quase lá !</DialogTitle>
    //                         <DialogContent>
    //                             <DialogContentText id="alert-dialog-description">
    //                                 Chegamos no final. Vamos criar o time ?
    //                                 Se quiser pode voltar e revisar as etapas.
    //                             </DialogContentText>
    //                         </DialogContent>
    //                         <DialogActions>
    //                             <Button onClick={() => handleCloseDialog()} color="primary">
    //                                 Voltar e revisar
    //                             </Button>
    //                             <Button onClick={() => handleSubmit()} color="primary" autoFocus>
    //                                 Vamos criar !
    //                             </Button>
    //                         </DialogActions>
    //                     </Dialog>
    //                 </div>
                                    
    //             }
    //             sidebarInner
    //             ref={pageLayout}
    //         />
    //     </Grid>
    // )
}

export default withReducer('teamsApp', reducer)(TeamNew);