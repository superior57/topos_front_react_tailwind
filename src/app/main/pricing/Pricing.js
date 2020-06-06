import React from 'react'
import {Button, Card, CardContent, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import clsx from 'clsx';
import JWTLoginTab from './tabs/JWTLoginTab';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function Pricing()
{
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, "flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")}>

            <div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">

                <FuseAnimate animation="transition.expandIn">
                    <img className="w-128 mb-32" src="assets/images/logos/topos.svg" alt="logo"/>
                </FuseAnimate>

                <FuseAnimate animation="transition.slideUpIn" delay={300}>
                    <Typography variant="h3" color="inherit" className="font-light">
                        Welcome to the Topos Work!
                    </Typography>
                </FuseAnimate>

                <FuseAnimate delay={400}>
                    <Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
                        Topos makes managing your team’s collaboration easy, simple, and affordable by organizing it all in one app.
                    </Typography>
                </FuseAnimate>
            </div>

            <FuseAnimate animation={{translateX: [0, '100%']}}>

                <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                    <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                        <Typography variant="h6" className="text-center md:w-full mb-48">LOGIN</Typography>

                        <JWTLoginTab/>

                        <div className="flex flex-col items-center justify-center pt-32">
                            <span className="font-medium">Don't have a login?</span>
                            <Button
                                href="/register"
                                variant="contained"
                                color="secundary"
                                className="w-full mx-auto mt-16 normal-case"
                                aria-label="LOG IN"
                                value="legacy"
                            >
                                Create a login
                            </Button>
                        </div>
                        <div className="w-full">
                            
                        </div>

                    </CardContent>
                </Card>
            </FuseAnimate>
        </div>
    )
}

export default Pricing;
