import React, {useEffect,useState} from 'react';
import {TextField, FormControl,Select,OutlinedInput,MenuItem,Typography, Icon, Card,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useForm} from '@fuse/hooks';
import {FuseUtils} from '@fuse';
import {useDispatch,useSelector} from 'react-redux';
import Formsy from 'formsy-react';
import {FuseAnimate, TextFieldFormsy} from '@fuse';
import * as Actions from '../store/actions';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import _ from '@lodash';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'around'
    },
    formControl: {
        display:'flex',
        margin: theme.spacing(1),
    },
  }));

function AccountDetail(props) 
{
    const dispatch = useDispatch();
    const {form, handleChange, setForm} = useForm(null);
    const plans = useSelector(({accountsApp}) => accountsApp.account.plans);
    const types = useSelector(({accountsApp}) => accountsApp.account.types);
    const account = useSelector(({accountsApp}) => accountsApp.account);
    const file = useSelector(({accountsApp}) => accountsApp.account.file);
    const [selectedPlan, setSelectedPlan] = useState('1dc7ccd7-0b48-466a-98d3-a3dedc1bec5d');
    const [selectedType, setSelectedType] = useState('5af4643a-ebfb-47f2-b8c3-2451014dbfd7');
    const classes = useStyles();

    useEffect(() => {dispatch(Actions.getAccountTypes()); dispatch(Actions.getPlans());}, []);
    useEffect((a) => {if(!_.isEqual(form,account)){ {dispatch(Actions.getAccount(props.params))} setForm(account);}; }, [dispatch, props.params]);
    useEffect(() => {
        if(form && file && form.avatar !== file.link){
        {setForm(_.set({...form}, `avatar`,file.link))}
        {setForm(_.set({...account}, `avatar`,file.link))}
    }},[file]) 
    
    useEffect(() => {
        if (
            (account && !form) ||
            (account && form && account.id !== form.id)
        ) {
        setForm(account);
        setSelectedPlan(account.planId);
        setSelectedType(account.accountTypeId);
    }
    }, [form, account, setForm]);
    

    const handleUploadChange = (e) =>  {
        const file = e.target.files[0];
        if ( !file )
        {
            return;
        }
        dispatch(Actions.UploadFile(file));
    }

    const handleSelectedSelect = (event) =>
    {
        setForm(_.set({...form}, event.target.name, event.target.value));
        if(event.target.name === 'planId'){
            setSelectedPlan(event.target.value);
        }else{
            setSelectedType(event.target.value);
        }
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

    const canBeSubmitted = () =>
    {
        if(form && form.taxCode){
        const formNoFormat =  form;
        formNoFormat.taxCode = formNoFormat.taxCode.replace(/\D/g,"");
        return (!_.isEqual(account, formNoFormat));
        }
    }

    const handleSubmit = (form) =>
    {
        form.taxCode = form.taxCode.replace(/\D/g,"");
        dispatch(Actions.saveAccount(form));
    }
    return (
        
        <div className="flex">
            {form && (
            <div>
                <div className="p-5 text-left">
                    <FuseAnimate animation="transition.slideRightIn" delay={300}>
                        
                        <Button
                            className="whitespace-no-wrap"
                            variant="contained"
                            disabled={!canBeSubmitted()}
                            onClick={() => handleSubmit(form)}
                        >Salvar
                        </Button>
                    </FuseAnimate>
                </div>
                <input
                    accept="image/*"
                    className="hidden"
                    id="button-file"
                    type="file"
                    onChange={handleUploadChange}
                />
                <div className="float-right">
                    <label
                        htmlFor="button-file"
                        className={
                            clsx(classes.productImageUpload,
                                "flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                            )}
                    >
                    {form && form.avatar !== null ? <img className="max-w-none w-auto h-full" src={form.avatar} alt={form.name}/> :
                    <Icon fontSize="large" color="action">cloud_upload</Icon>}
                    </label>
                </div>
                <Formsy>
                <div autoComplete="off">
                        <div autoComplete="off">
                        <Select className="mt-8 mb-16" readOnly value={selectedType} onChange={handleSelectedSelect} fullWidth
                            input={<OutlinedInput labelWidth={("Plan".length * 9)} name="accountTypeId" id="plan-label-placeholder"/>} >
                            {types && types.map(type => (<MenuItem value={type.id} key={type.id}>{type.name}</MenuItem>))}
                        </Select>
                    </div>
                    <div autoComplete="off">
                        <TextFieldFormsy className="mt-8 mb-16" required label="Display Name"   id="name"    name="name" 
                        value={form.name}  onChange={handleChange} variant="outlined" fullWidth validations={{minLength: 4}}
                        validationErrors={{minLength: 'Min character length is 4'}}/>
                        <TextFieldFormsy className="mt-8 mb-16" required label="Tax Id" id="taxCode" onkeypress={cpfCnpj(form.taxCode)} name="taxCode" 
                        value={form.taxCode} onChange={handleChange} variant="outlined" fullWidth validations={{minLength: 4}}
                        validationErrors={{minLength: 'Min character length is 4'}}/>
                    </div>
                    <div className="pb-16 flex items-center">
                        <Icon className="mr-16" color="action">access_time</Icon>
                        <Typography className="h2" color="textSecondary">Plan</Typography>
                    </div>
                    <Select className="mt-8 mb-16" value={selectedPlan} onChange={handleSelectedSelect} fullWidth
                        input={<OutlinedInput labelWidth={("Plan".length * 9)} name="planId" id="plan-label-placeholder"/>} >
                        {plans && plans.map(plan => (<MenuItem value={plan.id} key={plan.id}>{plan.name}</MenuItem>))}
                    </Select>
                    <div autoComplete="off">
                        <div className="pb-16 flex items-center">
                            <Icon className="mr-16" color="action">attach_money</Icon>
                            <Typography className="h2" color="textSecondary">Billing</Typography>
                        </div>
                        <TextFieldFormsy className="mt-8 mb-16" required label="Oficial Name"  id="fullName" name="paymentDetail_fullName" 
                        value={form.paymentDetail_fullName} onChange={handleChange} variant="outlined" fullWidth/>
                        <TextFieldFormsy className="mt-8 mb-16" required label="Email" id="email" name="paymentDetail_email"
                        value={form.paymentDetail_email} onChange={handleChange} validations="isEmail"
                        validationErrors={{isEmail: 'Please enter a valid email'}}
                        variant="outlined" fullWidth type="email"/>
                    </div>
                </div>
                </Formsy>
            </div>
            )}
        </div>
    );
};

export default withReducer('AccountDetail', reducer)(AccountDetail);
