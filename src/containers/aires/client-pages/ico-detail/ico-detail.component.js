import React from 'react';

import themeStyles from './ico-detail.theme.style';
import scss from './ico-detail.module.scss';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';

import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logoImage from '../../../../assets/images/portal-logo.png';
import Divider from "../../../elements/divider/divider.component";

class Detail extends React.Component {

  render() {
    return (
        <div>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            ICO Detail
          </Typography>
        </Toolbar>
      </AppBar>
      Name: {this.props.match.name}
        </div>
    );
  }
}
/*
Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};
*/

export default withStyles(themeStyles, { withTheme: true })(Detail)
/* this will be th emain display page*/
