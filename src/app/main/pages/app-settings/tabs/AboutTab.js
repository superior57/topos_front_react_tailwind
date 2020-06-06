import React, {useEffect, useState} from 'react';
import {Avatar, AppBar, Button, Card, CardContent, Icon, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import axios from 'axios';

function AboutTab()
{
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/profile/about').then(res => {
            setData(res.data);
        });
    }, []);

    if ( !data )
    {
        return null;
    }

    const {general, work, contact, groups, friends} = data;

    return (
        <div className="md:flex max-w-2xl">

            <div className="flex flex-col flex-1 md:pr-32">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    General Information
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Gender</Typography>
                                <Typography>{general.gender}</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Birthday</Typography>
                                <Typography>{general.birthday}</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Locations</Typography>

                                {general.locations.map((location) => (
                                    <div className="flex items-center" key={location}>
                                        <Typography>{location}</Typography>
                                        <Icon className="text-16 ml-4" color="action">location_on</Icon>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">About Me</Typography>
                                <Typography>{general.about}</Typography>
                            </div>

                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Work
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Occupation</Typography>
                                <Typography>{work.occupation}</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Skills</Typography>
                                <Typography>{work.skills}</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Jobs</Typography>
                                <table className="">
                                    <tbody>
                                        {work.jobs.map((job) => (
                                            <tr key={job.company}>
                                                <td className="pr-16">
                                                    <Typography>{job.company}</Typography>
                                                </td>
                                                <td>
                                                    <Typography color="textSecondary">{job.date}</Typography>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Contact
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Address</Typography>
                                <Typography>{contact.address}</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Tel.</Typography>

                                {contact.tel.map((tel) => (
                                    <div className="flex items-center" key={tel}>
                                        <Typography>{tel}</Typography>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Website</Typography>

                                {contact.websites.map((website) => (
                                    <div className="flex items-center" key={website}>
                                        <Typography>{website}</Typography>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Emails</Typography>

                                {contact.emails.map((email) => (
                                    <div className="flex items-center" key={email}>
                                        <Typography>{email}</Typography>
                                    </div>
                                ))}
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>

            <div className="flex flex-col md:w-320">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Friends
                                </Typography>
                                <Button className="normal-case" color="inherit" size="small">See 454 more</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List className="p-8">
                                {friends.map((friend) => (
                                    <img key={friend.id} className="w-64 m-4" src={friend.avatar} alt={friend.name}/>
                                ))}
                            </List>
                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Joined Groups
                                </Typography>
                                <Button className="normal-case" color="inherit" size="small">See 6 more</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List className="p-0">
                                {groups.map((group) => (
                                    <ListItem key={group.id}>
                                        <Avatar alt={group.name}>{group.name[0]}</Avatar>
                                        <ListItemText
                                            primary={(
                                                <div className="">
                                                    <Typography className="inline font-medium" color="secondary" paragraph={false}>
                                                        {group.name}
                                                    </Typography>

                                                    <Typography className="inline ml-4" paragraph={false}>
                                                        {group.category}
                                                    </Typography>
                                                </div>
                                            )}
                                            secondary={group.members}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton>
                                                <Icon>more_vert</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default AboutTab;
