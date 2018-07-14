import React from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import themeStyles from './invest-payment.theme.style';
import scss from './invest-payment.module.scss';
import { withStyles } from '@material-ui/core/styles';

const Payment = (props) => {
  const {
    classes,
    width
  } = props;

  return (
    <Grid
      container
      direction="column"
      spacing={0}
      justify="left"
      alignItems="center"
      className={classes.background}
    >
      <Card className={classes['primary-card']} >
        <div>
          hello ya ho
        </div>
      </Card>
    </Grid>
    );
};


Payment.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Payment);
