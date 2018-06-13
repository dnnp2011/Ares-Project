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

import logoImage from '../../../../assets/images/portal-logo.png';//modified

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
              <CardContent className={scss['signup-content']}>
                <img src={logoImage} className={scss['signup-logo']} alt="logo" />
                <Typography variant="headline" component="h2" gutterBottom>
                  Registration Complete
                </Typography>
                <Typography component="p" gutterBottom>
                  You have successfully registered your account.
                </Typography>
              </CardContent>
            </Card>
            <Card className={scss.card}>
              <CardActions className={scss['lock-actions']}>
                <Button fullWidth href="/dashboard/crypto-market" color="secondary" variant="raised">Visit the Dashboard</Button>
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
