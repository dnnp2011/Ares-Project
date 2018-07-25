import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './transactions-master-dashboard.theme.style';
import scss from './transactions-master-dashboard.module.scss';

class TransactionsDash extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render() {
    return(
      <div>
        This should render
      </div>
    );
  }
}

TransactionsDash.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(TransactionsDash);
