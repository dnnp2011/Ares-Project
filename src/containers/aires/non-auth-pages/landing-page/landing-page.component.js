import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

import themeStyles from './landing-page.theme.style';
import scss from './landing-page.module.scss';

import logoImage from '../../../../assets/images/portal-logo.png';

const LandingPage = (props) => {
  const {
    classes,
    width
  } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <Grid
      container
      direction="row"
      spacing={0}
      justify="center"
      alignItems="center"
      className={classes.background}>
      <Grid item sm={10} xs={12} className={scss.panel}>
        <Grid direction={panelDirection} container spacing={0}>
          <Grid item sm={6} xs={12}>

        <Paper className={classNames(scss.paper, classes['primary-paper'])}>
          <CardContent className={scss['landing-page-content']}>
            <img src={logoImage} className={scss['landing-page-logo']} alt="logo" />
            <Typography variant='headline' gutterBottom>Welcome!</Typography>
            <Typography>Aires Dashboard is a tool to connect sovg investors with oppotunities to invest in the next big crypto revolution!</Typography>
          </CardContent>
        </Paper>
      </Grid>

      <Grid item sm={6} xs={12}>
            <Paper className={scss.paper}>
            
              <CardContent>
                <Typography component="p" gutterBottom>Looking to join us?</Typography>
                <a href="/register">Sign Up</a>
                <Typography component="p" >today</Typography>
              </CardContent>

              <CardContent>
                <Typography component="p" gutterBottom>Already a member?</Typography>
                <a href="/login">Login here</a>
              </CardContent>

              
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withStyles(themeStyles, { withTheme: true })(LandingPage);
