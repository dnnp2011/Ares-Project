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
    const { classes } = this.props;

    return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                ICO Detail
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid
            container
            direction="row"
            spacing={0}
            justify="center"
            alignItems="center"
            classNames={classes.background}
          >
            <Grid item sm={10} xs={12}>
              <Card className={scss.card}>
                <div className={scss.center}><img src={logoImage} alt="logo image" /></div>
                <Typography variant="headline" className={scss.center} gutterBottom>
                  Name: {this.props.match.name}
                </Typography>
                <br/>

                <Typography className={scss.details} gutterBottom>
                  Lorem ipsum a imperdiet non tincidunt aenean euismod, aenean commodo molestie facilisis himenaeos ad, morbi ut rhoncus porta sem mollis placerat etiam rhoncus arcu aptent mi blandit diam proin netus integer vestibulum quisque, mollis quis consectetur nunc lectus tempus suscipit turpis libero ullamcorper ligula vel eleifend aliquam auctor lacus dolor ad ornare ad conubia ultrices urna est.
                </Typography>
                <br/>

                <Typography className={scss.details} gutterBottom>
                  Cursus fusce venenatis neque scelerisque orci nullam iaculis sem dui eros blandit nulla, libero nulla facilisis ut metus facilisis semper sed semper per mi, elementum congue volutpat eros condimentum ac nulla turpis non mauris taciti eros taciti vulputate class nunc risus aliquam blandit auctor, nam justo diam nisi commodo proin dui, mollis euismod ultrices consectetur mauris ornare varius.
                </Typography>
                <br/>

                <Typography className={scss.details} gutterBottom>
                  Purus curabitur habitasse aenean integer id eget, eu sodales sed bibendum phasellus porttitor, adipiscing inceptos etiam commodo duis placerat turpis mi per blandit nisl condimentum, sagittis id imperdiet platea dictumst curae donec, lacinia neque nulla donec quisque.
                </Typography>
                <br/>

                <Typography className={scss.details} gutterBottom>
                  Egestas torquent convallis sapien turpis aenean curae justo luctus suspendisse, ligula class etiam accumsan purus scelerisque ad accumsan, arcu pretium conubia mollis pretium integer condimentum gravida velit primis aliquet enim suspendisse donec diam ornare enim nisl nulla pulvinar vitae.
                </Typography>
                <br/>

                <Typography className={scss.details} gutterBottom>
                  Urna feugiat bibendum mattis iaculis proin vitae egestas placerat, curabitur mattis justo massa etiam erat cursus donec, cras sem libero lectus luctus egestas nam lacinia ultrices gravida senectus fusce congue magna commodo euismod, imperdiet diam turpis laoreet ultricies quisque proin cubilia, aptent integer nam imperdiet donec fusce arcu.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </div>
    );
  }
}
/*
Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};
*/
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Detail);
/* this will be th emain display page*/
