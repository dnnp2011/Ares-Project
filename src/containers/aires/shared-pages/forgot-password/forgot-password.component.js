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

import { withStyles } from '@material-ui/core/styles';

import themeStyles from './forgot-password.theme.style';
import scss from './forgot-password.module.scss';

<<<<<<< HEAD
import logoImage from '../../../../assets/images/portal-logo.png';//modified
=======
import logoImage from '../../../../assets/images/portal-logo.png';
>>>>>>> b8294f64e309ff87334b959a26e85ae09925fd5c

const Forgot = (props) => {
  const {
    classes
  } = props;

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
<<<<<<< HEAD
              <CardContent className={scss['forgot-password-content']}>
                <img src={logoImage} className={scss['forgot-password-logo']} alt="logo" />
=======
              <CardContent className={scss['signup-content']}>
                <img src={logoImage} className={scss['signup-logo']} alt="logo" />
>>>>>>> b8294f64e309ff87334b959a26e85ae09925fd5c
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
                />
              </CardContent>
              <CardActions className={scss['lock-actions']}>
                <Button href="/forgot-password" color="primary" variant="raised">Reset Password</Button>
                <Button href="/login">Back to login</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Forgot);
