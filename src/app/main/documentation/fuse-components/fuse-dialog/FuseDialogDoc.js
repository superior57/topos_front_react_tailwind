import React from 'react';
import {Button, Typography, DialogTitle, DialogContent, DialogContentText, DialogActions, Icon} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {useDispatch} from 'react-redux';
import * as Actions from 'app/store/actions';

function FuseDialogDoc(props)
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
                        <Typography variant="h6">FuseDialog</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseDialog</code> is a simple dialog trigger for easily showing dialog messages via redux action. It should be located in the theme layouts.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Usage</Typography>

                    <Typography className="mb-16" component="p">
                        You can show dialog anywhere with dispatching the action openDialog, its using Material-UI's dialog so you can pass the props in the object:
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
                        <Button
                            onClick={()=> dispatch(Actions.openDialog({
                                children: (
                                    <React.Fragment>
                                        <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={()=> dispatch(Actions.closeDialog())} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={()=> dispatch(Actions.closeDialog())} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </React.Fragment>
                                     )
                                 }))}
                            variant="contained"
                            color="secondary"
                        >
                            Open Dialog
                        </Button>
                        `}
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Example</Typography>

                    <Button
                        onClick={() => dispatch(Actions.openDialog({
                            children: (
                                <React.Fragment>
                                    <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Let Google help apps determine location. This means sending anonymous location data to
                                            Google, even when no apps are running.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => dispatch(Actions.closeDialog())} color="primary">
                                            Disagree
                                        </Button>
                                        <Button onClick={() => dispatch(Actions.closeDialog())} color="primary" autoFocus>
                                            Agree
                                        </Button>
                                    </DialogActions>
                                </React.Fragment>
                            )
                        }))}
                        variant="contained"
                        color="secondary"
                    >
                        Open Dialog
                    </Button>
                </div>
            }
        />
    );
}

export default FuseDialogDoc;
