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

const fundSource = [
  {
    value: 'FirstCard',
    label: 'First Card'
  },
  {
    value: 'SecondCard',
    label: 'Second Card'
  },
  {
    value: 'CheckingAccount',
    label: 'Checking Account'
  },
  {
    value: 'SavingsAccount',
    label: 'Savings Account'
  },
];

class Dropdown extends React.Component {
  state = {
     name: 'Cat in the Hat',
     age: '',
     multiline: 'Controlled',
     fundSource: 'FirstCard',
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
          id="fund-source"
          select
          label="Fund Source"
          className={classes.textField}
          value={this.state.fundSource}
          onChange={this.handleChange('fundSource')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your fund source"
          margin="normal"
        >
          {fundSource.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    );
  }
}

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dropdown);
