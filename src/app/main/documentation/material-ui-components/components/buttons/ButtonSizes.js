import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Button size="small" className={classes.margin}>
          Small
        </Button>
        <Button size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
      <div>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
      </div>
      <div>
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
