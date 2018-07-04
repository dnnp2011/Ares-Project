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
        <Paper className={{textAlign: 'center', justify: 'center', alignItems: 'center', margin: 'auto'}}>
          <img src={logoImage} className={scss['signup-logo']} alt="logo" />
          <Typography variant='headline' gutterBottom>Ares Portal</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(LandingPage);
