import React,{Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { saveInfo } from '../../../../../../actions/KYC.actions';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

class TextFields extends Component {
  constructor(props) {
    super(props);
    this.state={
     age : '5',
     ico: ''
   };
  }


  handleChange = ico => event => {
    this.setState({
      [ico]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    var b = this.state.ico;

    return (
      <TextField
        id="number of ICOs"
        label="Number of ICOs"
        // value={this.props.numberOfIco}
        onChange={this.handleChange('ico')}
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



function mapDispatchToProps(dispatch, state){

  return {
      onChange: () => {
        dispatch(saveInfo(9,'Ark'))
      }

  }
};

export default compose(withStyles(styles), connect(null, mapDispatchToProps))(TextFields);
