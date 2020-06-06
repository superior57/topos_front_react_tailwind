import React from 'react';
import {Typography, Button, Icon} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {useDispatch} from 'react-redux';
import * as Actions from 'app/store/actions';

function FuseMessageDoc(props)
{
    const dispatch = useDispatch();

    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Fuse Components</Typography>
                        </div>
                        <Typography variant="h6">FuseMessage</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseMessage</code> is a simple snackbar trigger for easily showing messages via redux action. It should be located in the theme layouts.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Usage</Typography>

                    <Typography className="mb-16" component="p">
                        You can show messages anywhere with dispatching the action showMessage, its using Material-UI's snackbar so you can pass the props in the object:
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
                                    <Button 
                                        onClick={()=> dispatch(
                                            Actions.showMessage({
                                                message     : 'Hi, how are you?',//text or html
                                                autoHideDuration: 6000,//ms
                                                anchorOrigin: {
                                                    vertical  : 'top',//top bottom
                                                    horizontal: 'right'//left center right
                                                },
                                                variant: 'success'//success error info warning null
                                            }))}
                                    >
                                        Top - Right
                                    </Button>
                            `}
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Example</Typography>

                    <Typography className="mt-32 mb-8" variant="h6">Position</Typography>

                    <div>

                        <Button onClick={() => dispatch(Actions.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'top',
                                horizontal: 'right'
                            }
                        }))}>
                            Top - Right
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'top',
                                horizontal: 'center'
                            }
                        }))}>
                            Top-Center
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'top',
                                horizontal: 'left'
                            }
                        }))}>
                            Top-Left
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'bottom',
                                horizontal: 'right'
                            }
                        }))}>
                            Bottom-Right
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'bottom',
                                horizontal: 'center'
                            }
                        }))}>
                            Bottom-Center
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'bottom',
                                horizontal: 'left'
                            }
                        }))}>
                            Bottom-Left
                        </Button>
                    </div>

                    <Typography className="mt-32 mb-8" variant="h6">Variants</Typography>

                    <div>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message: 'Hi, how are you?'
                        }))}>
                            Default
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message: 'Hi, how are you?',
                            variant: 'success'
                        }))}>
                            Success
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message: 'Hi, how are you?',
                            variant: 'warning'
                        }))}>
                            Warning
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message: 'Hi, how are you?',
                            variant: 'error'
                        }))}>
                            Error
                        </Button>
                        <Button onClick={() => dispatch(Actions.showMessage({
                            message: 'Hi, how are you?',
                            variant: 'info'
                        }))}>
                            Info
                        </Button>
                    </div>
                </div>
            }
        />
    );
}

export default FuseMessageDoc;
