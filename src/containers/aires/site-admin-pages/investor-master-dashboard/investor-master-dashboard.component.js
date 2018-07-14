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
    <div>

    </div>
  );
}

INVDash.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(INVDash);
