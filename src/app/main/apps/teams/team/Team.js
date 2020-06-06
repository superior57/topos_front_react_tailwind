import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../store/actions';
import {Icon, Tab, Tabs, Tooltip,Card, Typography, Button, Avatar} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Formsy from 'formsy-react';
import {TextFieldFormsy} from '@fuse';
import {useForm} from '@fuse/hooks';
import _ from '@lodash';



const useStyles = makeStyles(theme => ({
    manageIcon: {
        backgroundColor: '#039be5',
        color:  'white' 
    }
}));

function Team(props)
{
    const { t } = useTranslation();
    const {form, handleChange, setForm} = useForm(null);
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);
    const account = useSelector(({auth}) => auth.account);
    const team = useSelector(({teamsApp}) => teamsApp.team.data);
    const file = useSelector(({teamsApp}) => teamsApp.team.file);
    const [isOrganizer, setIsOrganizer] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        dispatch(Actions.getTeam(props.match.params));
    }, [dispatch, props.match.params]);

    useEffect((a) => {if(!_.isEqual(form, team)){setForm(team)}}, [team, props.params]);

    useEffect((a) => {
        if(team && team.organizerMembers != null){
            const organizerMember = team.organizerMembers.filter(u => u.id === user.id)
            if (organizerMember !== null) {setIsOrganizer(true)}
        }
    }, [team, props.params]);

    useEffect(() => {
        if(form && file && form.avatar !== file.link){
        {setForm(_.set({...form}, 'avatar',file.link))}
        {setForm(_.set({...team}, 'avatar',file.link))}
    }},[file]) 

    const handleUploadChange = (e) =>  {
        const file = e.target.files[0];
        if ( !file )
        {
            return;
        }
        dispatch(Actions.UploadFile(file));
    }

    const canBeSubmitted = () =>
    {
        if(form){
        return (!_.isEqual(team, form));
        }
    }

    const handleSubmit = (form) =>
    {
        dispatch(Actions.saveTeam(form));
    }

    const back = () =>
    {
        props.history.goBack();
    }

    return (
        <Grid item className="p-24 sm:p-32" xs={12} sm={10} md={10} lg={8} xl={8}>
            <Button className="mb-24" size="medium" variant="contained" onClick={() => back()} style={{backgroundColor: "rgba(3,155,229,0.80)", color:"white"}}>{t('back')}</Button >
            <Card >
            {form && (
                    <div className="p-16 sm:p-24 w-full">
                        <div className="d-flex">
                            <div className="flex flex-row justify-between">
                                <Formsy>
                                    <TextFieldFormsy className="p-6" required label={t('Name')} id="fullName" name="name" 
                                    value={form.name} onChange={handleChange} variant="outlined"/>
                                <input accept="image/*" className="hidden" id="button-file" type="file"
                                    onChange={handleUploadChange}
                                    />
                                </Formsy>
                                <div className="flex flex-row p-6">
                                    {/* <label
                                        htmlFor="button-file"
                                        className={
                                            clsx(classes.productImageUpload,
                                                "flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                                )}
                                                >
                                    {form && (form.avatar === '' || form.avatar === null)  ? 
                                    <Icon fontSize="large" color="action">cloud_upload</Icon> :
                                    <img className="max-w-none w-auto h-full" src={form.avatar} alt={form.name}/>}
                                    </label> */}
                                </div>
                            </div>
                            <Typography color="textSecondary" className="text-24 my-24">
                                {t('Members')}
                            </Typography>
                            <div className="flex flex-row">
                                {form.organizerMembers.map(m => {return(<Avatar key={m.id} alt={m.firstName} src={m.avatar}/>)})}
                                {form.basicMembers.map(m => {return(<Avatar key={m.id} alt={m.firstName} src={m.avatar}/>)})}
                                {isOrganizer && 
                                <Link 
                                    to={{pathname:`/user-manager/${team.id}`, 
                                    state:{
                                        basicMembers: team.basicMembers, 
                                        organizerMembers: team.organizerMembers,
                                        accountMembers: account.accountUserRoles,
                                        }}} >
                                    <Avatar className={classes.manageIcon}><Icon>person_add</Icon></Avatar>
                                </Link>}
                            </div>
                        </div>
                        {isOrganizer &&
                            <div className="flex justify-end mx-24">
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    disabled={!canBeSubmitted()} onClick={() => handleSubmit(form)}
                                >
                                    {t('Save')}
                                </Button>
                            </div>}
                    </div>
                )}
            </Card>
        </Grid>
    )
}

export default withReducer('teamsApp', reducer)(Team);
