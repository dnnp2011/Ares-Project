import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  menu: {
    width: 200,
  },
});

const icos = [
  {
    value: 'USD',
    label: '$ - USD'
  },
  {
    value: 'Bitcoin',
    label: '€ - Bitcoin'
  },
  {
    value: 'Ethereum',
    label: '฿ - Ethereum'
  },
];

class TextFields extends React.Component {
  state = {
     name: 'Cat in the Hat',
     age: '',
     multiline: 'Controlled',
     icos: 'USD',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <TextField
          id="select-ICO"
          select
          label="Fund Source"
          className={classes.textField}
          value={this.state.icos}
          onChange={this.handleChange('icos')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your payment method"
          margin="normal"
          fullWidth
        >
          {icos.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
