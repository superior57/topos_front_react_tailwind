import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MarkdownElement from 'app/main/documentation/material-ui-components/MarkdownElement';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  chipWrapper: {
    height: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
});

class ChipsPlayground extends React.Component {
  state = {
    color: 'default',
    onDelete: 'none',
    avatar: 'none',
    icon: 'none',
    variant: 'default',
    size: 'medium',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleDeleteExample = () => {
    alert('You clicked the delete icon.');
  };

  render() {
    const { classes } = this.props;
    const { color, onDelete, avatar, icon, variant, size } = this.state;

    const colorToCode = color !== 'default' ? `color="${color}" ` : '';
    const sizeToCode = size === 'small' ? `size="small" ` : '';
    const variantToCode = variant !== 'default' ? `variant="${variant}" ` : '';

    let onDeleteToCode;
    switch (onDelete) {
      case 'none':
        onDeleteToCode = '';
        break;
      case 'custom':
        onDeleteToCode = 'deleteIcon={<DoneIcon />} onDelete={handleDelete} ';
        break;
      default:
        onDeleteToCode = 'onDelete={handleDelete} ';
        break;
    }

    let iconToCode;
    let iconToPlayground;
    switch (icon) {
      case 'none':
        iconToCode = '';
        break;
      default:
        iconToCode = 'icon={<FaceIcon />} ';
        iconToPlayground = <FaceIcon />;
        break;
    }

    let avatarToCode;
    let avatarToPlayground;
    switch (avatar) {
      case 'none':
        avatarToCode = '';
        break;
      case 'img':
        avatarToCode = 'avatar={<Avatar src="/static/images/avatar/1.jpg" />} ';
        avatarToPlayground = <Avatar src="/static/images/avatar/1.jpg" />;
        break;
      case 'letter':
        avatarToCode = 'avatar={<Avatar>FH</Avatar>} ';
        avatarToPlayground = <Avatar>FH</Avatar>;
        break;
      default:
        avatarToCode = 'avatar={<Avatar><FaceIcon /></Avatar>} ';
        avatarToPlayground = (
          <Avatar>
            <FaceIcon />
          </Avatar>
        );
        break;
    }

    if (avatar !== 'none') {
      iconToCode = '';
      iconToPlayground = null;
    }

    const code = `
\`\`\`jsx
<Chip ${variantToCode}${colorToCode}${sizeToCode}${onDeleteToCode}${avatarToCode}${iconToCode}/>
\`\`\`
`;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center" spacing={5}>
            <Grid item className={classes.chipWrapper}>
              <Chip
                label="Chip Component"
                color={color}
                deleteIcon={onDelete === 'custom' ? <DoneIcon /> : undefined}
                onDelete={onDelete !== 'none' ? this.handleDeleteExample : undefined}
                avatar={avatarToPlayground}
                icon={iconToPlayground}
                variant={variant}
                size={size}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>variant</FormLabel>
                  <RadioGroup
                    row
                    name="variant"
                    aria-label="variant"
                    value={variant}
                    onChange={this.handleChange('variant')}
                  >
                    <FormControlLabel value="default" control={<Radio />} label="default" />
                    <FormControlLabel value="outlined" control={<Radio />} label="outlined" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>color</FormLabel>
                  <RadioGroup
                    row
                    name="color"
                    aria-label="color"
                    value={color}
                    onChange={this.handleChange('color')}
                  >
                    <FormControlLabel value="default" control={<Radio />} label="default" />
                    <FormControlLabel value="primary" control={<Radio />} label="primary" />
                    <FormControlLabel value="secondary" control={<Radio />} label="secondary" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>size</FormLabel>
                  <RadioGroup
                    row
                    name="sizet"
                    aria-label="size"
                    value={size}
                    onChange={this.handleChange('size')}
                  >
                    <FormControlLabel value="medium" control={<Radio />} label="medium" />
                    <FormControlLabel value="small" control={<Radio />} label="small" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>icon</FormLabel>
                  <RadioGroup
                    row
                    name="icon"
                    aria-label="icon"
                    value={icon}
                    onChange={this.handleChange('icon')}
                  >
                    <FormControlLabel value="none" control={<Radio />} label="none" />
                    <FormControlLabel value="icon" control={<Radio />} label="icon" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>avatar</FormLabel>
                  <RadioGroup
                    row
                    name="avatar"
                    aria-label="avatar"
                    value={avatar}
                    onChange={this.handleChange('avatar')}
                  >
                    <FormControlLabel value="none" control={<Radio />} label="none" />
                    <FormControlLabel value="letter" control={<Radio />} label="letter" />
                    <FormControlLabel value="img" control={<Radio />} label="img" />
                    <FormControlLabel value="icon" control={<Radio />} label="icon" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>onDelete</FormLabel>
                  <RadioGroup
                    row
                    name="onDelete"
                    aria-label="onDelete"
                    value={onDelete}
                    onChange={this.handleChange('onDelete')}
                  >
                    <FormControlLabel value="none" control={<Radio />} label="none" />
                    <FormControlLabel value="default" control={<Radio />} label="default" />
                    <FormControlLabel value="custom" control={<Radio />} label="custom" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <MarkdownElement text={code} />
        </Grid>
      </Grid>
    );
  }
}

ChipsPlayground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsPlayground);
