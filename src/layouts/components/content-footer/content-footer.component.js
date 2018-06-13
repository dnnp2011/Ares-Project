import React from 'react';
import PropTypes from 'prop-types';

// Material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import FontAwesome from 'react-fontawesome';

import themeStyles from './content-footer.theme.style';

const ContentFooter = (props) => {
  const { classes, ...other } = props;

  return (
    <AppBar
      color="default"
      position="static"
      {...other}
    >
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          noWrap
        >
        <a href="http://www.citdex.com" target='_blank' style={{textDecoration:'none', color:'inherit', cursor:'inherit'}}><small>&copy; 2018 Citdex</small></a>
        </Typography>
        <span className="portal-flex" />
        <a href="https://www.facebook.com" target='_blank'><FontAwesome name="facebook" className={classes.coloredIcon} /></a>
        <a href="https://www.twitter.com" target='_blank'><FontAwesome name="twitter" className={classes.coloredIcon} /></a>
        <a href="http://www.citdex.com" target='_blank'><FontAwesome name="globe" className={classes.coloredIcon} /></a>
      </Toolbar>
    </AppBar>
  );
};

ContentFooter.propTypes = {
  classes: PropTypes.shape({}).isRequired
};


export default withStyles(themeStyles)(ContentFooter);
