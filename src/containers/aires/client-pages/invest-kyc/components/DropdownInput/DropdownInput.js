import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { saveInfo } from '../../../../../../actions/KYC.actions';

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
    value: 'SolarCity',
    label: '$'
  },
  {
    value: 'Bitcoin',
    label: '€'
  },
  {
    value: 'Ethereum',
    label: '฿'
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
          label="Select ICO"
          className={classes.textField}
          value={this.state.icos}
          onChange={ event => this.props.saveInfo({ ico: event.target.value })}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your desired ICO"
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

export default compose(withStyles(styles),connect(null,{ saveInfo }))(TextFields);
