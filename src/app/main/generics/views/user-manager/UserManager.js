import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Typography, Button, Card, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import _ from '@lodash';
import UserCard from './UserCard'


function UserManager(props)
{
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(null);
    const [accountMembers, setAccountMembers] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);
    const [organizerMembers, setOrganizerMembers] = useState([]);
    const accountMembersNoChanges = useSelector(({userManager}) => userManager.userManager.accountUsers);
    const teamMembersNoChanges = useSelector(({userManager}) => userManager.userManager.basicMembers);
    const organizerMembersNoChanges = useSelector(({userManager}) => userManager.userManager.organizerMembers);

    useEffect(() => {
        dispatch(Actions.getTeamUsers(props.match.params))
    }, [dispatch, props.match.params]);

    useEffect(() => {
        setTeamMembers(teamMembersNoChanges)
        setOrganizerMembers(organizerMembersNoChanges)
        setAccountMembers(accountMembersNoChanges)
    }, [teamMembersNoChanges, organizerMembersNoChanges, accountMembersNoChanges])

    useEffect(() => {
        function getFilteredArray()
        {
            if ( searchText.length === 0)
            {
                return accountMembers;
            }

            return _.filter(accountMembers, member => {
                return member.user.email.toLowerCase().includes(searchText.toLowerCase())
            });
        }

        if ( accountMembers )
        {
            setFilteredData(getFilteredArray());
        }
    }, [accountMembers, searchText]);

    const handleTeamMembers = (member, state, role) => {

        if (state === 'add')
        {
            let newTeamMembers = _.cloneDeep(teamMembers);
            newTeamMembers.push(member);
            setTeamMembers(newTeamMembers);
        }
        if (state === 'remove' && role === 'member'){
            let newTeamMembers = _.cloneDeep(teamMembers);
            newTeamMembers = newTeamMembers.filter( el => { return el.email !== member.email})
            setTeamMembers(newTeamMembers)
        }
        if (state === 'remove' && role === 'organizer'){
            let newOrganizerMembers = _.cloneDeep(organizerMembers);
            newOrganizerMembers = newOrganizerMembers.filter( el => { return el.email !== member.email})
            setOrganizerMembers(newOrganizerMembers)
        }

    }

    const roleHandle = (member, toRole) => {

        let newTeamMembers = _.cloneDeep(teamMembers);
        let newOrganizerMembers = _.cloneDeep(organizerMembers);

        if(toRole === 'organizer'){
            newTeamMembers = newTeamMembers.filter( el => { return el.email !== member.email})
            newOrganizerMembers.push(member)

        }else if(toRole === 'member'){
            newOrganizerMembers = newOrganizerMembers.filter( el => { return el.email !== member.email})
            newTeamMembers.push(member)
        }

        setTeamMembers(newTeamMembers)
        setOrganizerMembers(newOrganizerMembers)
    }
    const handleSearchText = event => setSearchText(event.target.value);

    const clearChanges = () => {
        setTeamMembers(teamMembersNoChanges);
        setOrganizerMembers(organizerMembersNoChanges);
    }

    const canBeSubmitted = () =>
    {
        if(teamMembers.length === teamMembersNoChanges.length &&
            organizerMembers.length === organizerMembersNoChanges.length){
        return false;
        }else{
            return true;
        }
    }

    const handleSubmit = () =>
    {
        let manageViewModel = {
            basicMembers: teamMembers,
            organizerMembers: organizerMembers,
            accountUsers: accountMembers
        }

        dispatch(Actions.saveUserManager(props.match.params, manageViewModel));

    }

    return (
    <Grid item className="p-24 sm:p-32" xs={12} sm={10} md={10} lg={8} xl={8}>
        <Button className="mb-24" size="medium" variant="contained" onClick={() => props.history.goBack()} style={{backgroundColor: "rgba(3,155,229,0.80)", color:"white"}}>{t('back')}</Button >
        <Card >
            <Typography className="w-full text-24 mt-24 px-12">
                {t('Members')}
            </Typography>
            <Typography className="flex flex-row font-medium mb-24 ml-8" variant="caption">
                {t('click on the membership card to change permissions')}
            </Typography>

                <div className="flex items-center xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-12 mb-24 ">
                    <TextField
                        placeholder={t('Search users by name, email  or company name')}
                        className="flex w-full"
                        value={searchText}
                        inputProps={{'aria-label': 'Search'}}
                        onChange={handleSearchText}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />

                </div>
                <div className="p-4 flex flex-wrap">
                    {organizerMembers.map(owner => {return(<UserCard key={owner.id} roleHandle={roleHandle} user={owner} type={'organizer'}></UserCard>)})}
                    {teamMembers.map(teamMember => {return(<UserCard key={teamMember.id}  roleHandle={roleHandle} user={teamMember} type={'member'}></UserCard>)})}
                </div>
            <Typography className="w-full text-24 mt-24 px-12">
                {t('Users')}
            </Typography>
            <Typography className="flex flex-row font-medium mb-24 ml-8" variant="caption">
                {t('click on the user\'s card to include or exclude in the team')}
            </Typography>
            <div className="p-4 flex flex-wrap">
                {filteredData && filteredData.map(accountUser => {
                return(<UserCard key={accountUser.id} user={accountUser} team={teamMembers} organizerMembers={organizerMembers} type={'user'} handle={handleTeamMembers}></UserCard>)})}
            </div>
            <div className="flex justify-end mx-24 my-60">
                <Button className="font-bold mr-8" size="medium"  onClick={() => clearChanges()} variant="contained">{t('Clear Changes')}</Button >
                <Button className="font-bold" size="medium" variant="contained" onClick={() => handleSubmit()} disabled={!canBeSubmitted()} color="secondary">{t('Confirm')}</Button >
            </div>
    </Card>
</Grid>
    )
}

export default withReducer('userManager', reducer)(UserManager);
