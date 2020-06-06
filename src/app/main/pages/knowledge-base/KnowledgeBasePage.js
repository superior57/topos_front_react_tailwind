import React, {useEffect, useMemo, useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Slide
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate, FuseAnimateGroup} from '@fuse';
import clsx from 'clsx';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    header: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function KnowledgeBasePage()
{
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [dialog, setDialog] = useState({
        open   : false,
        title  : null,
        content: null
    });

    useEffect(() => {
        axios.get('/api/knowledge-base').then(res => {
            setData(res.data);
        });
    }, []);

    function handleOpenDialog(dialogData)
    {
        setDialog({
            open: true,
            ...dialogData
        });
    }

    return (
        <div className="w-full">

            <div className={clsx(classes.header, "flex flex-col items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")}>

                <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                    <Typography color="inherit" className="text-36 sm:text-56 font-light">
                        How can we help?
                    </Typography>
                </FuseAnimate>

                <FuseAnimate duration={400} delay={600}>
                    <Typography variant="subtitle1" color="inherit" className="opacity-75 mt-16 mx-auto max-w-512">
                        Welcome to our knowledge base
                    </Typography>
                </FuseAnimate>
            </div>

            <div>

                {useMemo(() => (
                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                        className="flex flex-wrap justify-center max-w-xl w-full mx-auto px-16 sm:px-24 py-32"
                    >
                        {data.map((category) => (
                            <div className="w-full max-w-512 pb-24 md:w-1/2 md:p-16" key={category.id}>
                                <Card elevation={1}>
                                    <CardContent>
                                        <Typography className="font-medium px-16 pt-8" color="textSecondary">{category.title}</Typography>
                                        <List component="nav">
                                            {category.featuredArticles.map(article => (
                                                <ListItem key={article.id} button onClick={() => handleOpenDialog(article)}>
                                                    <ListItemIcon className="mr-0 min-w-40">
                                                        <Icon>note</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText primary={article.title}/>
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Button className="normal-case w-full justify-start" color="secondary">See all articles ({category.articlesCount})</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </FuseAnimateGroup>
                ), [data])}
            </div>

            {useMemo(() => {
                function handleCloseDialog()
                {
                    setDialog({
                        ...dialog,
                        open: false,
                    });
                }

                return (
                    <Dialog
                        open={dialog.open}
                        onClose={handleCloseDialog}
                        aria-labelledby="knowledge-base-document"
                        TransitionComponent={Transition}
                    >
                        <DialogTitle>
                            {dialog.title}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText dangerouslySetInnerHTML={{__html: dialog.content}}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog} color="primary">
                                CLOSE
                            </Button>
                        </DialogActions>
                    </Dialog>
                )
            }, [dialog])}
        </div>
    );
}

export default KnowledgeBasePage;
