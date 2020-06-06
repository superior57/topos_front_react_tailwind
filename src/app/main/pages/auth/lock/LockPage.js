import React from 'react';
import {Avatar, Button, Card, CardContent, Icon, TextField, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import {useForm} from '@fuse/hooks';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
}));

function LockPage()
{
    const classes = useStyles();
    const {form, handleChange, resetForm} = useForm({
        password: ''
    });

    function isFormValid()
    {
        return form.password.length > 0;
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        resetForm();
    }

    return (
        <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")}>

            <div className="flex flex-col items-center justify-center w-full">

                <FuseAnimate animation="transition.expandIn">

                    <Card className="w-full max-w-sm">

                        <CardContent className="flex flex-col items-center justify-center p-32">

                            <div className="w-full flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:items-center">

                                <div className="relative mr-16">
                                    <Avatar className="w-72 h-72" src="assets/images/avatars/katherine.jpg"/>
                                    <Icon className="text-32 absolute right-0 bottom-0" color="error">lock</Icon>
                                </div>

                                <div>
                                    <Typography variant="h6" className="mb-8">YOUR SESSION IS LOCKED</Typography>
                                    <Typography color="textSecondary">
                                        Due to inactivity, your session is locked. Enter your password to continue.
                                    </Typography>
                                </div>
                            </div>

                            <form
                                name="lockForm"
                                noValidate
                                className="flex flex-col justify-center w-full mt-32"
                                onSubmit={handleSubmit}
                            >

                                <TextField
                                    className="mb-16"
                                    label="Username"
                                    name="name"
                                    value="Katherine"
                                    variant="outlined"
                                    fullWidth
                                    disabled
                                />

                                <TextField
                                    className="mb-16"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-224 mx-auto mt-16"
                                    aria-label="Reset"
                                    disabled={!isFormValid()}
                                    type="submit"
                                >
                                    UNLOCK
                                </Button>

                            </form>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <Link className="font-medium" to="/pages/auth/login">Are you not Katherine?</Link>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        </div>
    );
}

export default LockPage;
