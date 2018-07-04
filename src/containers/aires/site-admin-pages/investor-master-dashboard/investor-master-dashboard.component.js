import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './investor-master-dashboard.theme.style';

const InvestorDash = (props) => {
  const { classes } = props;

  return (
    <div>

    </div>
  );
};

InvestorDash.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(InvestorDash);
