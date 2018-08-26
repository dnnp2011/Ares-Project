import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';

import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

import themeStyles from './invest-kyc.theme.style';
import scss from './invest-kyc.module.scss';

import logoImage from '../../../../assets/images/portal-logo.png';
import Divider from "../../../elements/divider/divider.component";

import Dropdown from "./components/DropdownList/DropdownList";
import NumberInput from './components/NumberInput/NumberInput';
import DropdownInput from './components/DropdownInput/DropdownInput';

import { connect } from 'react-redux';
import { saveInfo } from '../../../../actions/KYC.actions';

class CollectKYC extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      firstName:'Local Initial State',
      lastName:'Local Initial State',
      ico:'',
      numberOfIco: 6
    };
  };

  handleSubmit = (e) => {
    this.props.saveInfo({first : this.state.firstName, last: this.state.lastName});
    e.preventDefault();
  };


  render(){

    const {
      classes,
      width
    } = this.props;




    const panelDirection = width === 'xs' ? 'column' : 'row';
    return (
      <Grid
        container
        direction="column"
        spacing={0}
        justify="center"
        alignItems="center"
        className={classes.background}
      >
        <Grid item sm={8} xs={12} className='panel'>
          <Grid direction={panelDirection} container spacing={0}>
            <Grid item>
              <Card className={classNames(scss.card, classes['primary-card'])}>
                <CardContent className={scss['collectkyc-content']}>
                  <img src={logoImage} className={scss['collectkyc-logo']} alt="logo" />
                  <Typography gutterBottom>Depending on your country of origin, federal regulations require we collect certain information about investors. This is called KYC (Know Your Client).</Typography>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <TextField
                      fullWidth
                      label="First Name"
                      type="text"
                      // value={firstName}
                      inline
                      onChange={ event => this.setState({firstName : event.target.value })}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                      fullWidth
                      label="Last Name"
                      type="text"
                      inline
                      onChange={ event => this.setState({lastName : event.target.value })}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        label="Email Address"
                        type="email"
                        email
                        fullWidth
                        value = {this.state.firstName}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        label="Phone Number"
                        type="phone number"
                        phone
                        fullWidth
                        value = {this.props.reduxState.kyc.last}

                      />
                    </Grid>
                  </Grid>
                  <br/>
                  <Grid>
                    <Typography gutterBottom>For Identity verification purposes, please upload a supporting document as passport,state ID or a utility bill</Typography>
                    <br/>
                    <Button onClick={() =>this.fileInput.click()} variant="raised" color="secondary" className={classes.button}>
                      Upload Supporting Documents
                    </Button>
                    <input
                      style={{display:'none'}}
                      ref={fileInput => this.fileInput =fileInput}
                      label="Supporting Document"
                      type="file"
                      fullWidth
                    />
                  </Grid>
                  <Grid>
                    <DropdownInput onChange={ event => this.props.saveInfo({ico : event.target.value })} />
                  </Grid>
                  <NumberInput numberOfIco={this.state.numberOfIco}/>
                  <Grid>
                    <Dropdown classes={this.props.classes} width={this.props.width}/>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid>
                    <Button href="/browse-icos/invest/payment" onClick={ (e) =>this.handleSubmit(e)} color="secondary" variant="raised" className={classes.button}>Submit KYC</Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
};


CollectKYC.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

function mapStateToProps (state) {
  return {
    reduxState: state
  }
};

export default compose(withWidth(),connect(mapStateToProps, { saveInfo }) , withStyles(themeStyles, { withTheme: true }))(CollectKYC);
