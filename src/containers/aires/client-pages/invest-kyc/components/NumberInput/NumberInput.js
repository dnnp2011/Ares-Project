import React,{Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

class TextFields extends Component {
  state = {
    age : '5',
  };

  handleChange = age => event => {
    this.setState({
      [age]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <TextField
        id="number of ICOs"
        label="Number of ICOs"
        value={this.props.age}
        onChange={this.handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
