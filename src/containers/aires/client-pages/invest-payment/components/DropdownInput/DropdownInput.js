import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const icos = [
  {
    value: 'Credit Card',
    label: 'CC - Credit Card'
  },
  {
    value: 'Bitcoin',
    label: '€ - Bitcoin'
  },
  {
    value: 'Bank Account',
    label: '฿ - Bank Account'
  },
];

class TextFields extends React.Component {
  state = {
     name: 'Cat in the Hat',
     age: '',
     multiline: 'Controlled',
     icos: 'Bitcoin',
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
          label="Payment Method"
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
