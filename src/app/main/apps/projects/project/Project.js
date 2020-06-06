import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../store/actions';
import {Icon, Tab, Tabs, Tooltip, Typography, Button, Avatar} from '@material-ui/core';
import Formsy from 'formsy-react';
import {FuseAnimate, FusePageCarded, TextFieldFormsy} from '@fuse';
import {useForm} from '@fuse/hooks';
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
    }
}));

function Project(props)
{
    const {form, handleChange, setForm} = useForm(null);
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);
    const account = useSelector(({auth}) => auth.account);
    const project = useSelector(({projectsApp}) => projectsApp.project.data);
    const file = useSelector(({projectsApp}) => projectsApp.project.file);
    const [isOrganizer, setIsOrganizer] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        // dispatch(Actions.getProject(props.match.params));
    }, [dispatch, props.match.params]);

    useEffect((a) => {if(!_.isEqual(form, project)){setForm(project)}}, [project, props.params]);

    useEffect((a) => {
        if(project && project.organizerMembers != null){
            const organizerMember = project.organizerMembers.filter(u => u.id === user.id)
            if (organizerMember !== null) {setIsOrganizer(true)}
        }
    }, [project, props.params]);

    useEffect(() => {
        if(form && file && form.avatar !== file.link){
        {setForm(_.set({...form}, 'avatar',file.link))}
        {setForm(_.set({...project}, 'avatar',file.link))}
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
        return (!_.isEqual(project, form));
        }
    }

    const handleSubmit = (form) =>
    {
        // dispatch(Actions.saveProject(form));
    }

    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                form && (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-1 flex-col items-center sm:items-start">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link} 
                                role="button" to="/apps/projects" color="inherit">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Times
                                </Typography>
                            </FuseAnimate>

                            <div className="flex flex-row min-w-0 justify-between items-center sm:items-start">
                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography className="text-16 sm:text-20 truncate">
                                        {form.name}
                                    </Typography>
                                </FuseAnimate>
                            </div>

                        </div>
                        {isOrganizer && <FuseAnimate animation="transition.slideRightIn" delay={300}>
                            <Button className="whitespace-no-wrap p-5" variant="contained"
                                disabled={!canBeSubmitted()} onClick={() => handleSubmit(form)}>
                                Salvar
                            </Button>                            
                        </FuseAnimate>}
                    </div>
                )
            }
            
            content={
                form && (
                    <div className="p-16 sm:p-24 w-full">
                        <div className="d-flex">
                            <div className="flex flex-row justify-between">
                                <Formsy>
                                    <TextFieldFormsy className="p-6" required label="Nome" id="fullName" name="name" 
                                    value={form.name} onChange={handleChange} variant="outlined"/>
                                <input accept="image/*" className="hidden" id="button-file" type="file"
                                    onChange={handleUploadChange}
                                    />
                                </Formsy>
                                <div className="flex flex-row p-6">
                                </div>
                            </div>
                            <Typography color="textSecondary" className="text-24 my-24">
                                Membros
                            </Typography>
                            <div className="flex flex-row">
                                {form.basicMembers.map(m => {return(<Avatar className="" alt={m.firstName} src={m.avatar}/>)})}
                                {isOrganizer && 
                                <Link 
                                    to={{pathname:`/user-manager/${project.id}`, 
                                    state:{
                                        basicMembers: project.basicMembers, 
                                        organizerMembers: project.organizerMembers,
                                        accountMembers: account.accountUserRoles,
                                        }}} >
                                    <Avatar><Icon>person_add</Icon></Avatar>
                                </Link>}
                            </div>
                            <Typography color="textSecondary" className="text-24 my-24">
                                Organizadores
                            </Typography>
                            <div className="flex flex-row">
                                {form.organizerMembers.map(m => {return(<Avatar className="" alt={m.firstName} src={m.avatar}/>)})}
                                {isOrganizer && <Avatar><Icon>person_add</Icon></Avatar>}

                            </div>
                        </div>
                    </div>
                )
            }
            innerScroll
        />
    )
}

export default withReducer('projectsApp', reducer)(Project);
