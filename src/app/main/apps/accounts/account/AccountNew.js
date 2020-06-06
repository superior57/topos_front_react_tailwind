import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from '@fuse/hooks';
import * as Actions from '../store/actions';
import {Button, Icon, IconButton, Typography, TextField, Select, Fab, InputLabel, Divider,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, MenuItem, OutlinedInput, 
    Stepper, Step, StepLabel, Card, CardContent} from '@material-ui/core';
import {green} from '@material-ui/core/colors';
import {makeStyles,useTheme} from '@material-ui/styles';
import {FuseAnimate,FusePageSimple} from '@fuse';
import _ from '@lodash';
import clsx from 'clsx';
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

function AccountNew()
{
    const theme = useTheme();
    const pageLayout = useRef(null);
    const dispatch = useDispatch();
    const types = useSelector(({accountsApp}) => accountsApp.account.types);
    const account = useSelector(({accountsApp}) => accountsApp.account.newAccount);
    const {form, handleChange, setForm} = useForm(null);
    const [selectedPlan, setSelectedPlan] = useState('743178d6-aa69-458e-ad2d-755c6a383820');
    const [activeStep, setActiveStep] = useState(1);
    const [members,setMembers] = useState([]);
    const [member,setMember] = useState({firstName:'', lastName:'', email: ''});
    const [openDialog, setOpenDialog] = useState(false);
    const inputFirstName = useRef(null);
    const plan1 = useSelector(({accountsApp}) => accountsApp.account.plans.find(p => p.id === '1dc7ccd7-0b48-466a-98d3-a3dedc1bec5d'));
    const plan2 = useSelector(({accountsApp}) => accountsApp.account.plans.find(p => p.id === '5594a3c5-82c0-467f-a799-d390242ff702'));
    const plan3 = useSelector(({accountsApp}) => accountsApp.account.plans.find(p => p.id === '743178d6-aa69-458e-ad2d-755c6a383820'));
    const plan4 = useSelector(({accountsApp}) => accountsApp.account.plans.find(p => p.id === '49736cd2-5108-41b6-8cb9-2f8f89134e78'));
    const classes = useStyles();
    const [full, setFull] = useState(false);
    
    useEffect(() => {dispatch(Actions.getAccountTypes()); dispatch(Actions.getPlans());}, [dispatch]);
    useEffect(() => {dispatch(Actions.newAccount());}, [dispatch]);
    useEffect(() => setForm(form => _.setIn(form, 'members', members)));
    useEffect(() => {
        if (account && !form)
        {
            setForm(account);
            setForm(form => _.setIn(form, 'planId', selectedPlan));
            setForm(form => _.setIn(form, 'accountTypeId', ''));
        }
    }, [form, account, setForm]);

    const handleChangeActiveStep = index => {
        setActiveStep(index + 1);
    }

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
                if(form && form.taxCode && 
                    form.taxCode.replace(/\D/g,"").length > 10 && 
                    form.taxCode.replace(/\D/g,"").length < 15){return true}else{return false}
            case 2:
                if(form && form.name && form.name.length > 4){return true}else{return false}
            case 3:
                if(form && form.planId && form.planId !== ''){return true}else{return false}
            case 4:
            if(form && form.paymentDetail_fullName && form.paymentDetail_fullName.length > 4 &&
            form.paymentDetail_email && form.paymentDetail_email !== ''){return true}else{return false}
            case 5:
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
    

    const handlePlanSelect = planId =>
    {
        setForm(_.set({...form}, 'planId', planId));
        setSelectedPlan(planId);
    }

    const isRaised = planId => {if(selectedPlan === planId){return true}else{return false}}
    
    const handleFull = () => setFull(!full)

    const handleSubmit = () =>
    {

        setForm(form => _.setIn(form, 'members', members));
        form.taxCode = form.taxCode.replace(/\D/g,"");
        form.taxCode > 12 ? 
        form.accountTypeId = types.find(type => type.name.toLowerCase() === 'organization').id :
        form.accountTypeId = types.find(type => type.name.toLowerCase() === 'personal').id
        handleCloseDialog();
        dispatch(Actions.createAccount(form));
    }
     
    const cpfCnpj = (v) => {
     
        //Tratativa se nao tiver valor disponível em v
        if(v == null) return v;

        //Remove tudo o que não é dígito
        v=v.replace(/\D/g,"")
     
        if (v.length < 14) { //CPF
     
            //Coloca um ponto entre o terceiro e o quarto dígitos
            v=v.replace(/(\d{3})(\d)/,"$1.$2")
     
            //Coloca um ponto entre o terceiro e o quarto dígitos
            //de novo (para o segundo bloco de números)
            v=v.replace(/(\d{3})(\d)/,"$1.$2")
     
            //Coloca um hífen entre o terceiro e o quarto dígitos
            v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
     
        } else { //CNPJ
     
            //Coloca ponto entre o segundo e o terceiro dígitos
            v=v.replace(/^(\d{2})(\d)/,"$1.$2")
     
            //Coloca ponto entre o quinto e o sexto dígitos
            v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
     
            //Coloca uma barra entre o oitavo e o nono dígitos
            v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
     
            //Coloca um hífen depois do bloco de quatro dígitos
            v=v.replace(/(\d{4})(\d)/,"$1-$2")
     
        }

        form.taxCode = v
    }

    const stepContent = (step) => {

        switch (step){
            case 1:
                return (
                    <Formsy>
                        <Typography className="h2 mt-8 mb-8">Vamos criar uma conta para você ou para a sua empresa ?</Typography>
                        <Typography className="flex flex-row font-medium mt-8 ml-8" variant="caption" color="textSecondary">Se o seu caso for uma empresa, no futuro iremos verificar a conta. Pode ficar tranquilo, confiamos em você então pode ir para o próximo passo.</Typography>
                        <TextFieldFormsy className="flex flex-row w-1/2 mt-8 mb-16" required label="Digite aqui seu CPF ou CNPJ da sua empresa" 
                        id="taxCode" onkeypress={cpfCnpj(form.taxCode)} name="taxCode" 
                        value={form.taxCode} onChange={handleChange} variant="outlined" fullWidth autoFocus
                        validations={{minLength: 14, maxLength: 18}}
                        validationErrors={{minLength: 'Min character length is 11',maxLength: 'You can not type in more than 14 characters'}}/>
                    </Formsy>
            );
            case 2:
                return (
                    <Formsy>
                        <Typography className="h2 mt-8 mb-8">Como vamos chamar a sua conta ?</Typography>                        
                        <Typography className="flex flex-row font-medium mt-8 ml-8" variant="caption" color="textSecondary">Pode ser o nome da empresa ou o seu nome.</Typography>
                        <TextFieldFormsy className="flex flex-row w-1/2 mt-8 mb-16" required label="Display Name"   id="name"    name="name" 
                        value={form.name}  onChange={handleChange} variant="outlined" fullWidth autoFocus 
                        validations={{minLength: 4}}
                        validationErrors={{minLength: 'Min character length is 4'}}/>

                    </Formsy>
            );    
            case 3:
                if(full === false) {handleFull()}
                return (form && plan1 && plan2 && plan3 && plan4 &&
                    <Formsy>
                    <Typography className="h2 mt-8 mb-8">Chegou a hora de escolher o plano, qual o melhor para você ?</Typography>
                        <div className="flex items-center justify-center flex-wrap">
                        <div className="w-full max-w-320 sm:w-1/3 p-12">
                            {/* Plan 01 */}
                            <Button  onClick={() => handlePlanSelect(plan1.id)}>
                                <Card className="relative"  raised={isRaised(plan1.id)}>
                                    {isRaised(plan1.id) &&
                                    <div className="flex flex-shrink-0 items-center justify-between px-24 h-24"
                                    style={{
                                        background:  "rgb(33, 150, 243)",
                                        color     : theme.palette.getContrastText("rgb(33, 150, 243)")
                                    }} ></div>}
                                    <div className="pt-48 pb-24 text-center">
                                        <Typography variant="subtitle1" color="inherit" className="text-20 font-medium">
                                            {plan1.name.toUpperCase()}
                                        </Typography>
                                    </div>
                                    <CardContent className="text-center p-0">
                                        <div className="flex flex-col">
                                            <div className="flex justify-center mb-52">
                                                <Typography className="text-56 ml-4 font-light leading-none">Free</Typography>
                                            </div>
                                            <Typography color="textSecondary" className="font-medium text-16">
                                            </Typography><span className="mb-4"></span>
                                        </div>
                                        <div className="flex flex-col p-32">
                                            <Typography variant="subtitle1" className="mb-8">
                                                <span className="font-bold mr-4">até 12</span>
                                                Usuários
                                            </Typography>
                                            <Typography variant="subtitle1" className="mb-8">
                                                <span className="font-bold mr-4">até 3</span>
                                                Times ou Projetos
                                            </Typography>
                                            <span className="font-bold mb-4"></span>
                                            <Typography variant="subtitle1" className="mb-8">
                                                <span className="font-bold mr-4">15</span>
                                                Gb de storage
                                            </Typography>
                                            <Divider className="mt-6 mb-6" variant="middle" />
                                            <Typography variant="subtitle1" className="mb-8" style={{minHeight:"164px"}}>
                                                FAQ e Help 
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Button>
                        </div>

                        <div className="w-full max-w-320 min-h-604 sm:w-1/3 p-12">
                            {/* Plan 02 */}
                            <Button  onClick={() => handlePlanSelect(plan2.id)}>
                                <Card className="relative"  raised={isRaised(plan2.id)}>
                                    {isRaised(plan2.id) &&
                                    <div className="flex flex-shrink-0 items-center justify-between px-24 h-24"
                                    style={{
                                    background:  "rgb(33, 150, 243)",
                                    color     : theme.palette.getContrastText("rgb(33, 150, 243)")
                                    }} ></div>}
                                    <div className="pt-48 pb-24 text-center">
                                        <Typography variant="subtitle1" color="inherit" className="text-20 font-medium">
                                            {plan2.name.toUpperCase()}
                                        </Typography>
                                    </div>
                                    <CardContent className="text-center p-0">
                                        <div className="flex flex-col">
                                            <div className="flex justify-center mb-8">
                                                <Typography variant="h5" color="textSecondary" className="font-medium">$</Typography>
                                                <Typography className="text-56 ml-4 font-light leading-none">30</Typography>
                                            </div>
                                            <Typography color="textSecondary" className="font-medium text-16">
                                                POR USUÁRIO POR MÊS
                                            </Typography>
                                            <span className="mr-4">cobrado anualmente</span>
                                        </div>
                                        <div className="flex flex-col p-32">
                                            <Typography variant="subtitle1" className="mb-8">
                                                <span className="font-bold mr-4">até 32</span>
                                                Usuários
                                            </Typography>
                                            <Typography variant="subtitle1" className="mb-8">
                                                <span className="font-bold mr-4">até 5</span>
                                                Times ou Projetos
                                            </Typography>
                                            <span className="font-bold mb-4"></span>
                                            <Typography variant="subtitle1" className="mb-8">
                                                <span className="font-bold mr-4">50</span>
                                                Gb de storage
                                            </Typography>
                                            <Divider className="mt-6 mb-6" variant="middle" />
                                            <Typography variant="subtitle1" className="mb-8" style={{minHeight:"164px"}}>
                                                Atendimento por chamado
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Button>
                        </div>

                        <div className="w-full max-w-320 sm:w-1/3 p-12">
                            {/* Plan 03 */}
                            <Button onClick={() => handlePlanSelect(plan3.id)}>
                                <Card className="relative" raised={isRaised(plan3.id)}>
                                    {isRaised(plan3.id) &&
                                    <div className="flex flex-shrink-0 items-center justify-between px-24 h-24"
                                    style={{
                                    background:  "rgb(33, 150, 243)",
                                    color     : theme.palette.getContrastText("rgb(33, 150, 243)")
                                    }} ></div>}
                                    <div className="pt-48 pb-24 text-center">
                                        <Typography variant="subtitle1" color="inherit" className="text-20 font-medium">
                                            {plan3.name.toUpperCase()}
                                        </Typography>
                                    </div>
                                    <CardContent className="text-center p-0">
                                        <div className="flex flex-col">
                                            <div className="flex justify-center mb-8">
                                                <Typography variant="h5" color="textSecondary" className="font-medium">$</Typography>
                                                <Typography className="text-56 ml-4 font-light leading-none">60</Typography>
                                            </div>
                                            <Typography color="textSecondary" className="font-medium text-16">
                                                POR USUÁRIO POR MÊS
                                            </Typography>
                                            <span className="mr-4">cobrado anualmente</span>
                                        </div>
                                        <div className="flex flex-col p-32">
                                            <Typography variant="subtitle1" className="mb-8">
                                                Usuários 
                                                <span className="font-bold mr-4"> ilimitados</span>
                                            </Typography>
                                            <Typography variant="subtitle1" className="mb-8">
                                                Times ou Projetos 
                                                <span className="font-bold mr-4"> ilimitados</span>
                                            </Typography>
                                            <Typography variant="subtitle1" className="mb-8">
                                                Storage 
                                                <span className="font-bold mr-4"> ilimitado</span>
                                            </Typography>
                                            <Divider className="mt-6 mb-6" variant="middle" />
                                            <Typography variant="subtitle1" className="mb-8" style={{maxHeight:"140px"}}>
                                                1 treinamento presencial demais por vídeo chamada e atendimento em horário comercial
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Button>
                        </div>
                        <div className="w-full max-w-320 sm:w-1/3 p-12">
                            {/* Plan 04 */}
                            <Button  onClick={() => handlePlanSelect(plan4.id)}>
                                <Card className="relative"  raised={isRaised(plan4.id)}>
                                    {isRaised(plan4.id) &&
                                    <div className="flex flex-shrink-0 items-center justify-between px-24 h-24"
                                    style={{
                                    background:  "rgb(33, 150, 243)",
                                    color     : theme.palette.getContrastText("rgb(33, 150, 243)")
                                    }} ></div>}
                                    <div className="pt-48 pb-24 text-center">
                                        <Typography variant="subtitle1" color="inherit" className="text-20 font-medium">
                                            {plan4.name.toUpperCase()}
                                        </Typography>
                                    </div>
                                    <CardContent className="text-center p-0">
                                        <div className="flex flex-col">
                                            <div className="flex justify-center mb-8">
                                                <Typography variant="h5" color="textSecondary" className="font-medium">$</Typography>
                                                <Typography className="text-56 ml-4 font-light leading-none">90</Typography>
                                            </div>
                                            <Typography color="textSecondary" className="font-medium text-16">
                                                POR USUÁRIO POR MÊS
                                            </Typography>
                                            <span className="mr-4">cobrado anualmente</span>
                                        </div>
                                        <div className="flex flex-col p-32">
                                            <Typography variant="subtitle1" className="mb-8">
                                                Usuários 
                                                <span className="font-bold mr-4"> ilimitados</span>
                                            </Typography>
                                            <Typography variant="subtitle1" className="mb-8">
                                                Times ou Projetos 
                                                <span className="font-bold mr-4"> ilimitados</span>
                                            </Typography>
                                            <Typography variant="subtitle1" className="mb-8">
                                                Storage 
                                                <span className="font-bold mr-4"> ilimitado</span>
                                            </Typography>
                                            <Divider className="mt-6 mb-6" variant="middle" />
                                            <Typography variant="subtitle1" className="mb-8" style={{minHeight:"140px"}}>
                                                Gerente dedicado e treinamentos presenciais e atendimento 24H
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Button>
                        </div>
                        <div className="flex flex-col items-center justify-center pt-8">
                            <Link className="font-medium w-full mx-auto mt-16" to="/register">ainda tem dúvidas ? quer saber em detalhes as features de cada plano ? clique aqui! </Link>
                        </div>
                        </div>
                    </Formsy>
            );
            case 4:
                if(full === true) {handleFull()}
                return (
                    <Formsy>
                    <Typography className="h2 mt-8 mb-8">Vamos definir um contato financeiro para sua conta ?</Typography>                        
                    <Typography className="flex flex-row font-medium mt-8 ml-8" variant="caption" color="textSecondary">Aqui você pode colocar o contato de alguém do financeiro da sua empresa ou deixar os seus dados como contato</Typography>
                    <TextFieldFormsy className="flex flex-row mt-8 mb-16 w-1/2" required label="Nome do contato"  id="fullName" name="paymentDetail_fullName" 
                    value={form.paymentDetail_fullName} onChange={handleChange} variant="outlined" fullWidth/>
                    <TextFieldFormsy className="flex flex-row mt-8 mb-16 w-1/2" required label="Email do contato" id="email" name="paymentDetail_email"
                    value={form.paymentDetail_email} onChange={handleChange} validations="isEmail"
                    validationErrors={{isEmail: 'Please enter a valid email'}}
                    variant="outlined" fullWidth type="email"/>
                    </Formsy>
            );
            case 5:
                return (
                    <div>
                        <Formsy>
                            <Typography className="h2 mt-8 mb-8">Chegou a hora de convidarmos o pessoal que trabalha com você e que vai fazer parte da conta</Typography>                        
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
        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                account && (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-1 flex-col items-center sm:items-start">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/apps/accounts" color="inherit">
                                    <Icon className="ml-8 mr-4 text-20">arrow_back</Icon>
                                    Contas
                                </Typography>
                            </FuseAnimate>

                            <div className="flex flex-col min-w-0 items-center sm:items-start">

                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography className="text-16 sm:text-20 truncate">
                                        {account.name}
                                    </Typography>
                                </FuseAnimate>
                            </div>
                        </div>
                    </div>
                )
            }

            leftSidebarContent={
                <Stepper classes={{root: "bg-transparent"}} activeStep={activeStep - 1} orientation="vertical">
                    <Step key={0}> {/* onClick={() => handleChangeActiveStep(0)} */}
                        <StepLabel classes={{root: classes.stepLabel}}>{'Tipo'}</StepLabel>
                    </Step>
                    <Step key={1}> {/* onClick={() => handleChangeActiveStep(0)} */}
                        <StepLabel classes={{root: classes.stepLabel}}>{'Nome'}</StepLabel>
                    </Step>
                    <Step key={2}> {/* onClick={() => handleChangeActiveStep(0)} */}
                        <StepLabel classes={{root: classes.stepLabel}}>{'Plano'}</StepLabel>
                    </Step>
                    <Step key={3}> {/* onClick={() => handleChangeActiveStep(0)} */}
                        <StepLabel classes={{root: classes.stepLabel}}>{'Conta'}</StepLabel>
                    </Step>
                    <Step key={4}> {/* onClick={() => handleChangeActiveStep(1)} */}
                        <StepLabel classes={{root: classes.stepLabel}}>{'Membros'}</StepLabel>
                    </Step>
                    <Step key={5}> {/* onClick={() => handleChangeActiveStep(2)} */}
                        <StepLabel classes={{root: classes.stepLabel}}>{'Confirmação'}</StepLabel>
                    </Step>
                </Stepper>
            }
            content={

                <div className="p-12">
                    {form && stepContent(activeStep)}
                    {full == false ? 
                    <div className="flex justify-between mt-12 w-1/2">
                        <div>
                            {activeStep !== 1 &&
                            <Button size="medium" starticon={<Icon>chevron_left</Icon>} onClick={handleBack} variant="contained" color="secondary"> back </Button >}
                        </div>
                        <div>
                            {activeStep < 5 &&
                            <Button size="medium" starticon={<Icon>chevron_right</Icon>} onClick={handleNext} disabled={!canBeNext()} variant="contained"
                                color="secondary"> Next </Button >}
                            {activeStep === 5 &&
                            <Button size="medium" starticon={<Icon>check</Icon>} onClick={handleNext} variant="contained"  
                            color="secondary" onClick={() => handleOpenDialog()}> Create </Button >}
                        </div>
                    </div>
                    :
                    <div className="flex justify-between mt-12 w-full">
                        <div>
                            {activeStep !== 1 &&
                            <Button size="medium" starticon={<Icon>chevron_left</Icon>} onClick={handleBack} variant="contained" color="secondary"> back </Button >}
                        </div>
                        <div>
                            {activeStep < 5 &&
                            <Button size="medium" starticon={<Icon>chevron_right</Icon>} onClick={handleNext} disabled={!canBeNext()} variant="contained"
                                color="secondary"> Next </Button >}
                            {activeStep === 5 &&
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
                                Chegamos no final. Vamos criar a conta ?
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
                                
            }
            sidebarInner
            ref={pageLayout}
        />
    )
}

export default withReducer('accountsApp', reducer)(AccountNew);