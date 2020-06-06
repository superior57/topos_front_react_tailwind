import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function InteractiveTooltips() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Add" interactive>
        <Button className={classes.button}>Interactive</Button>
      </Tooltip>
      <Tooltip title="Add">
        <Button className={classes.button}>Non Interactive</Button>
      </Tooltip>
    </div>
  );
}
