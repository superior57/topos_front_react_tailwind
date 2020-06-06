import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './store/actions';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import {Avatar, Button, Typography} from '@material-ui/core';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import {makeStyles} from '@material-ui/styles';
import {FusePageSimple, FuseAnimate} from '@fuse';
import AboutTab from './tabs/AboutTab';
import _ from '@lodash';

const useStyles = makeStyles(theme => ({
    layoutHeader: {
        height                        : 320,
        minHeight                     : 320,
        [theme.breakpoints.down('md')]: {
            height   : 240,
            minHeight: 240
        }
    }
}));

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 300,
        margin: 100,
    },
    //style for font size
    resize:{
      fontSize:50
    },
    }

function Profile(props)
{
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = useSelector(({auth}) => auth.user);
    const member = useSelector(({profileApp}) => profileApp.profile.data);
    const [form, setForm] = useState(null);
    const file = useSelector(({profileApp}) => profileApp.profile.file);
    const [myProfile, setMyProfile] = useState(false);
    
    useEffect(() =>{if(file && file.link !== null){ 
    setForm(_.set({...form}, `avatar`, file.link))
    }},[ file]);
    
    useEffect(() => {if(form && member && form.avatar !== member.avatar){handleSubmit(form)}},[form])

    useEffect((a) => {if(!_.isEqual(form, member)){ 
        {dispatch(Actions.getProfile(handleMember()))} setForm(member);}; 
    }, [dispatch, props.params]);

    useEffect(() => {if(member !== null) setForm(member)},[member])
    useEffect(() => {if(member && user && member.id === user.id){setMyProfile(true)}else{setMyProfile(false)}},[member, user]);

    const handleMember = () => {
        if(props.match.params.userId === 'myprofile'){
            return {userId: user.id};
        }else{return props.match.params}
    }
    const handleUploadChange = (e) =>  {
        const file = e.target.files[0];
        if ( !file ) return;
        dispatch(Actions.UploadFile(file));
    }

    const handleSubmit = (form) => {
        // condições para enviar o update dos dados do usuário para o backend
        if(_.isEqual(member, form) 
            || form.firstName.length === 0 
            || form.lastName.length === 0
            ){return} else {
        dispatch(Actions.saveProfile(form));
        }
    } 

    const handleChange = (event) => {
        event.persist();
        if(form){setForm(form => ({...form,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
            })
        )};
    };

    const avatar = () => {
        if(myProfile === true){
            if (form.avatar === null){return(
                <div>
                    <input accept="image/*" className="hidden" id="button-file" type="file" onChange={handleUploadChange}/>
                    <label htmlFor="button-file">
                        <Avatar className="w-96 h-96" alt={form.firstName} src="assets/images/avatars/profile.jpg"/>
                    </label>
                </div> 
            )}else{return(
                <div>
                    <input accept="image/*" className="hidden" id="button-file" type="file" onChange={handleUploadChange}/>
                    <label htmlFor="button-file">
                        <Avatar className="w-96 h-96" alt={form.firstName} src={form.avatar}/>
                    </label>
                </div>)}
        }else{
        if (form.avatar === null){return(<Avatar className="w-96 h-96" alt={form.firstName} src="assets/images/avatars/profile.jpg"/>)
        }else{return(<Avatar className="w-96 h-96" alt={form.firstName} src={form.avatar}/>)}}
    }

    return (
        <FusePageSimple
            classes={{
                header : classes.layoutHeader,
                toolbar: "px-16 sm:px-24"
            }}
            header={form && 
                <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                    <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                        {avatar()}
                        {myProfile === true ?
                            <Formsy>
                                <TextFieldFormsy className={"md:ml-24"} 
                                id="firstName" name="firstName" 
                                onBlur={() => handleSubmit(form)} onChange={handleChange}
                                value={form.firstName} 
                                validations={{minLength: 4}}
                                validationErrors={{minLength: 'Min character length is 4'}}
                                inputProps={{style: {fontSize: 30, textAlign:'center'}}} />
                                <TextFieldFormsy className="md:ml-24" 
                                id="lastName" name="lastName" 
                                onBlur={() => handleSubmit(form)} onChange={handleChange}
                                value={form.lastName} 
                                validations={{minLength: 4}}
                                validationErrors={{minLength: 'Min character length is 4'}}
                                inputProps={{style: {fontSize: 30, textAlign:'center'}}}/>
                            </Formsy>:
                            <Typography className="md:ml-24" variant="h4" color="inherit">{form.fullName}</Typography> 
                         }
                    </div>
                </div>
            }
            content={form &&
                <div className="p-16 sm:p-24">
                    <AboutTab teams={form.userTeams}/> 
                </div>
            }
        />
    )
}

export default withReducer('profileApp', reducer)(Profile);
