import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import styles from './investor-master-dashboard.theme.style';



const INVDash = (props) => {
  const { classes } = props;

  return (
    <div className={classes.portalDashboardPageWrapper}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>

          <Grid key={1} item xs={12} sm={12} md={9} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Investor Dashboard
            </Typography>
            <Paper className={classes.portalWidgetContent}>xs=12
              <br />
              Activity 1
              <br />
              Activity 2
              <br />
              Activity 3
              <br />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Header 2
            </Typography>
            <Paper className={classes.portalWidgetContent}>xs=6
            <br />
            Activity 1
            <br />
            Activity 2
            <br />
            Activity 3
            <br />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Header 3
            </Typography>
            <Paper className={classes.portalWidgetContent}>xs=6
            <br />
            Activity 1
            <br />
            Activity 2
            <br />
            Activity 3
            <br />
            </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

INVDash.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(INVDash);
