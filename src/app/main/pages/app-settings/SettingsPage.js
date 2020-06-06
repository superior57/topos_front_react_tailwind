import React from 'react';
import {FusePageSimple, FuseScrollbars} from '@fuse';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Settings from './Settings';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));

function SettingsPage()
{
    const classes = useStyles();
    
    return (
        <FusePageSimple
            content={
                <React.Fragment>
                    <FuseScrollbars className="p-24 sm:p-32">
                        <Grid container className={classes.root} spacing={2}>
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
                                <Settings/>
                            </Grid>
                        </Grid>
                    </FuseScrollbars>
                </React.Fragment>
            }
                        
        />
    )
}

export default SettingsPage;
