import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { auth } from '../../../../firebase';

import themeStyles from './forgot-password.theme.style';
import scss from './forgot-password.module.scss';

import logoImage from '../../../../assets/images/ares-logo.png';//modified

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INIT_STATE = {
  email: '',
  error: null,
};

class Forgot extends React.Component {
  state = {
    ...INIT_STATE,
  }

  handleInput = (event) => {
    this.setState(byPropKey(event.target.name, event.target.value))
  }

  onSubmit = event => {
  const { email } = this.state;
  const { history } = this.props;

  auth.doPasswordReset(email)
  .then(() => {
    this.setState(() => ({ ...INIT_STATE }));
    this.setState(byPropKey('error', 'Password recovery email successfully sent. Redirecting to login...'));
    setTimeout(() => {
      history.push('/login');
    }, 3000);
  })
  .catch(error => {
    this.setState(byPropKey('error', error));
  });

  event.preventDefault();
}

render() {
  const { email, error } = this.state;
  const isInvalid = email === '' || !email.includes('@');

  const {
    classes
  } = this.props;

    return (
      <Grid
        container
        direction="row"
        spacing={0}
        justify="center"
        alignItems="center"
        className={classes.background}
      >
      <Grid item sm={6} xs={12} className={scss.panel}>
        <Grid direction="column" container spacing={0}>
          <Grid
            item
            xs={12}
          >
            <Card className={classNames(scss.card, classes['primary-card'])}>
              <CardContent className={scss['forgot-password-content']}>
                <img src={logoImage} className={scss['forgot-password-logo']} id='ares-logo' alt="logo" />
                <Typography variant="headline" component="h2" gutterBottom>
                  Password Revovery
                </Typography>
                <Typography component="p" gutterBottom>
                  Please enter your username or email address. You will receive a link to create a new password via email.
                </Typography>
              </CardContent>
            </Card>
            <Card className={scss.card}>
              <CardContent>
                <TextField
                  label="Email Address"
                  fullWidth
                  name='email'
                  type='email'
                  value={email}
                  onChange={event => this.handleInput(event)}
                  valid={!isInvalid}
                />
              <br />
              { error && <p style={{textAlign: 'center'}}>{error.message ? error.message : error}</p> }
              </CardContent>
              <CardActions className={scss['lock-actions']}>
                <Button disabled={isInvalid} onClick={event => this.onSubmit(event)} href="/forgot-password" color="primary" variant="raised">Reset Password</Button>
                <Button href="/login">Back to login</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
  };
}

Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Forgot);
