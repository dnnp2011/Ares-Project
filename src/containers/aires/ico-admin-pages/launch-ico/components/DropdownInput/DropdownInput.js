import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { saveIcoInfo } from '../../../../../../actions/KYC.actions';

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
  constructor(props){
    super(props);
    this.state= {
      icos: 'SolarCity'
    };
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    this.props.saveIcoInfo({ico: this.state.icos})
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          id="select-ICO"
          select
          label="Select ICO"
          className={classes.textField}
          value={this.state.icos}
          onChange={this.handleChange('icos')}
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
      </div>

    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles),connect(null,{ saveIcoInfo }))(TextFields);
