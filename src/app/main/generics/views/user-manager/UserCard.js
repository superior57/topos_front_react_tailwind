import React from 'react';
import {useTranslation} from 'react-i18next';
import {makeStyles} from '@material-ui/styles';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import {Typography, Avatar, Card,CardContent} from '@material-ui/core';
import CheckBox from '@material-ui/icons/CheckBox';
import {useForm} from '@fuse/hooks';
import _ from '@lodash';


const useStyles = makeStyles(theme => ({

    card: {
        display: 'flex',
        flexDirection: 'column'
    },
    button:{
        padding: 5,
        textAlign: '-webkit-center',
        textTransform: 'uppercase',
        fontWeight: 600,
        backgroundColor: '#f3f3f3'
    },
    icon:{
        color:  'rgba(20, 89, 216, 0.8)',
    },
    root                    : {},
    suggestionsContainerOpen: {
        position : 'absolute',
        zIndex   : 1,
        marginTop: theme.spacing(),
        left     : 0,
        right    : 0
    },
    suggestion              : {
        display: 'block'
    },
    suggestionsList         : {
        margin       : 0,
        padding      : 0,
        listStyleType: 'none'
    },
    input                   : {
        transition: theme.transitions.create(['background-color'], {
            easing  : theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short
        }),
        '&:focus' : {
            backgroundColor: theme.palette.background.paper
        }
    }
}));

function UserCard(props)
{
    const { t } = useTranslation();
    const {form, handleChange, setForm} = useForm(null);
    const classes = useStyles();
    const user = props.user;
    
    const selectStyleHandle = (selected, role) => 
    {
        if(selected){
            props.handle(user, 'remove', role);
        }else{
            props.handle(user, 'add');
        }
    }

    const roleHandle = (user, toRole) =>
    {
        props.roleHandle(user, toRole)
    }

    const userAccount = () => {
        
        const team = props.team;
        const organizerMembers = props.organizerMembers;
        const isMemberOrOrganizer = team.find(u => u.email == user.email) || organizerMembers.find(u => u.email == user.email) ? true : false;

        if(isMemberOrOrganizer) 
        {    
            const role = team.find(u => u.email == user.email) ? 'member' : 'organizer';
        return(
            <div className="pl-8 pb-10 pr-2 w-120 h-120" style={{display: 'block', width: 140, height: 140}}>
                <div id={`user${user.id}`} className="p-1" onClick={() => selectStyleHandle(true, role)}>
                    <Card className={classes.card} style={{boxShadow: 'rgba(20, 89, 216, 0.5) 0px 0px 0px 4px inset'}}>
                        <div style={{ position: 'relative'}}>
                            <CheckBox id={`icon${user.id}`} style={{visibility: ''}} className={classes.icon}></CheckBox>
                        </div>
                        <CardContent style={{textAlign: '-webkit-center'}}>
                        <Avatar alt={user.firstName} src={user.avatar}>{user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}</Avatar>
                        <div  className="pt-3" style={{whiteSpace: 'nowrap', fontWeight:"bold"}}>{`${user.firstName} ${user.lastName}`}</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )}else{
            return(
                <div className="pl-8 pb-10 pr-2 w-120 h-120" style={{display: 'block', width: 140, height: 140}}>
                    <div id={`user${user.id}`} className="p-1" onClick={() => selectStyleHandle(false)}>
                        <Card className={classes.card}>
                            <div style={{position: 'relative'}}>
                                <CheckBox id={`icon${user.id}`} style={{visibility: 'hidden'}} className={classes.icon}></CheckBox>
                            </div>
                            <CardContent style={{textAlign: '-webkit-center'}}>
                            <Avatar alt={user.firstName} src={user.avatar}>{user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}</Avatar>
                            <div  className="pt-3" style={{whiteSpace: 'nowrap', fontWeight:"bold"}}>{`${user.firstName} ${user.lastName}`}</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
        )}

    }
    
    const userOrganizer = () => {
        return(
        <div className="pl-8 pb-10 pr-2 w-120 h-120" style={{display: 'block', width: 140, height: 140}}>
            <div className="p-1" style={{boxShadow: 'rgba(14, 101, 232, 0.81) 0px 0px 0px 2px inset'}} onClick={() => roleHandle(user, 'member')}>
                <Card className={classes.card}>
                    <CardContent style={{textAlign: '-webkit-center'}}>
                    <Avatar alt={user.firstName} src={user.avatar}>{user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}</Avatar>
                    <div  className="pt-3" style={{whiteSpace: 'nowrap', fontWeight:"bold"}}>{`${user.firstName} ${user.lastName}`}</div>
                    </CardContent>
                    <Typography className={classes.button}>
                        {t('Organizer')}
                    </Typography>
                </Card>
            </div>
        </div>
    )}
    
    const userMember = () => {
        return(
        <div className="pl-8 pb-10 pr-2 w-120 h-120" style={{display: 'block', width: 140, height: 140}}>
            <div className="p-1" onClick={() => roleHandle(user , 'organizer')}>
                <Card className={classes.card}>
                    <CardContent style={{textAlign: '-webkit-center'}}>
                    <Avatar alt={user.firstName} src={user.avatar}>{user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}</Avatar>
                    <div  className="pt-3" style={{whiteSpace: 'nowrap', fontWeight:"bold"}}>{`${user.firstName} ${user.lastName}`}</div>
                    </CardContent>
                    <Typography className={classes.button}>
                    {t('Member')}
                    </Typography>
                </Card>
            </div>
        </div>
        )}
    
    switch (props.type) {
        
        case 'user': return (userAccount())
        
        case 'member': return (userMember())

        case 'organizer': return (userOrganizer())
    
        default: return (null)
    }
}

export default withReducer('userCard', reducer)(UserCard);
