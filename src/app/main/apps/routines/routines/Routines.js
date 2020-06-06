import React, {useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Card, CardContent, OutlinedInput, Icon, TextField, Typography, CardActions, Divider,
    Select, InputLabel, FormControl, MenuItem, LinearProgress, Avatar} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/styles';
import {FuseAnimate, FuseAnimateGroup} from '@fuse';
import * as ScrumActions from  '../../scrumboard/store/actions'; 
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';
import {Link} from 'react-router-dom';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';


function Routines(props)
{
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const routines = useSelector(({routinesApp}) => routinesApp.routines.data);
    const theme = useTheme();
    const [filteredData, setFilteredData] = useState(null);
    const [searchText, setSearchText] = useState('');
    
    useEffect(() => {
        console.log(routines)
    },[routines])

    useEffect(() => {
        dispatch(Actions.getRoutines({type: 'routine'}));
    }, [dispatch]);

    useEffect(() => {
        console.log(routines)
    }, [routines]);

    useEffect(() => {
        function getFilteredArray()
        {
            if ( searchText.length === 0)
            {
                return routines;
            }

            return _.filter(routines, item => {
                return item.title.toLowerCase().includes(searchText.toLowerCase())
            });
        }

        if ( routines )
        {
            setFilteredData(getFilteredArray());
        }
    }, [routines, searchText]);

    function handleSearchText(event)
    {
        setSearchText(event.target.value);
    }

    return (
        <div className="flex flex-col flex-1 w-full" style={{backgroundColor:"#ececee"}}>
            <div className="flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24">
                <div className="flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24">
                    <Button component={Link} role="button" to="/apps/routines/new" style={{background: "rgb(18, 152, 200, 0.80)", color:"white"}}
                        className={"flex w-full sm:w-320 mb-16 sm:mb-0 mx-16 whitespace-no-wrap"} variant="contained">
                        <span className={"hidden sm:flex"}>{t('Create New')}</span>
                        <span className="flex sm:hidden">{t('New')}</span>
                    </Button>
                    <TextField
                        label={t('Routines')}
                        placeholder={t('Enter the keyword ...')}
                        className="flex w-full sm:w-320 mb-16 sm:mb-0 mx-16"
                        value={searchText}
                        inputProps={{
                            'aria-label': 'Search'
                        }}
                        onChange={handleSearchText}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                {useMemo(() => (
                    filteredData && (
                        filteredData.length > 0 ? (
                                <FuseAnimateGroup
                                    enter={{
                                        animation: "transition.slideUpBigIn"
                                    }}
                                    className="flex flex-wrap py-24"
                                >
                                {filteredData.map((routine) => {
                                    return (
                                        <div className="p-16 w-screen sm:w-screen md:w-1/2 lg:w-1/3" key={routine.id}>
                                            <Link to={`/apps/routine/${routine.id}`} >
                                                <Card elevation={1} className="flex flex-col h-144"> 
                                                    <div className="flex flex-shrink-0 items-center justify-between px-24 h-64"
                                                    style={{background: routine.color, color:"white"}}
                                                    >
                                                    <Typography className="text-16 truncate" color="inherit">{routine.title}</Typography>
                                                    </div>
                                                    <Divider/>
                                                    <CardContent className="flex flex-row flex-auto">
                                                        {routine.team.userTeam.map((m, index) => {return(<Avatar key={index} className="" alt={m.member.firstName} src={m.member.avatar}/>)})}
                                                    </CardContent>
                                                    <CardContent className="flex flex-row flex-auto">
                                                        {routine.team.userTeam.length} {t('Members')}
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </div>
                                    )
                                })}
                                </FuseAnimateGroup>
                            ) :
                            (
                                <div className="flex flex-col flex-1 items-center justify-center">
                                    <Typography className="flex text-24 my-24">
                                        {t("No routines found")} 😔
                                    </Typography>
                                </div>
                            )
                    )), [filteredData, theme.palette])}
            </div>
        </div>
    );
}

export default withReducer('routinesApp', reducer)(Routines);

