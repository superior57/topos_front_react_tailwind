import React, {useEffect, useState} from 'react';
import {Avatar, AppBar, Button, Card, CardContent, Icon, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import {Link} from 'react-router-dom';
import axios from 'axios';

function AboutTab(props)
{
    const [teams, setTeams] = useState(null);
    const [projects, setProjects] = useState(null);

    useEffect(() => {  
        if (props.teams != undefined) {
            setTeams(props.teams.filter(userTeam => userTeam.team.from === 'team'));
            setProjects(props.teams.filter(userTeam => userTeam.team.from === 'project'));
        }     
    }, [props.teams]);


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
                                    Times
                                </Typography>
                                <Button className="normal-case" color="inherit" size="small">ver mais</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List className="p-0">
                                {teams && teams.map((t) => (
                                    <Link to={`/apps/team/${t.team.id}`} component={Link}>
                                        <ListItem key={t.team.id}>
                                            <Avatar alt={t.team.avatar}></Avatar>
                                            <ListItemText
                                                primary={(
                                                    <div className="p-5">
                                                        <Typography className="inline font-medium" color="secondary" paragraph={false}>
                                                            {t.team.name}
                                                        </Typography>
                                                    </div>
                                                )}
                                            />     
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Projetos
                                </Typography>
                                <Button className="normal-case" color="inherit" size="small">ver mais</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List className="p-0">
                                {projects && projects.map((project) => (
                                    <Link to={`/apps/team/${project.id}`} component={Link}>
                                        <ListItem key={project.id}>
                                            <Avatar alt={project.name}>{project.name}</Avatar>
                                            <ListItemText
                                                primary={(
                                                    <div className="">
                                                        <Typography className="inline font-medium" color="secondary" paragraph={false}>
                                                            {project.name}
                                                        </Typography>
                                                    </div>
                                                )}
                                            />
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
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
                <Button className="w-full mb-16 normal-case" variant="contained" color="primary" aria-label="Send Message">Enviar Mensagem</Button>
                <Button className="w-full mb-16 normal-case" variant="contained" color="primary" aria-label="Send Message">Criar Tarefa</Button>
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default AboutTab;
