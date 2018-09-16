import React from 'react';

import themeStyles from './ico-detail.theme.style';
import scss from './ico-detail.module.scss';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, width } = this.props;
    const { value } = this.state;
    const panelDirection = width === 'xs' ? 'column' : 'row';

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
            spacing={16}
            justify="center"
            alignItems="center"
            classNames={classes.background}
          >
          <Grid item sm={10} xs={12} className={scss.panel}>
            <Grid direction={panelDirection} container spacing={0.5}>
              <Grid item sm={4} xs={6}>
                <Paper className={scss.card}>
                  <div className={scss.logo}><img src={logoImage} alt="logo image" /></div>
                  <Typography variant="title" className={scss.name} gutterBottom>
                    {this.props.location.name}
                  </Typography>
                  <Typography variant="body2" className={scss.price} gutterBottom>
                    Price: {this.props.location.price}
                  </Typography>
                  <Typography gutterBottom>
                    Start Date: {this.props.location.start}
                  </Typography>
                  <Typography gutterBottom>
                    End Date: {this.props.location.end}
                  </Typography>
                  <Button variant="contained" color="primary"  className={scss.button}>Invest</Button>
                </Paper>
              </Grid>

              <Grid item sm={8} xs={12}>
                <Card>
                </Card>
                <Card className={scss["details-card"]}>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.value}
                      onChange={this.handleChange}
                      className={scss.tabs}
                      centered
                      fullWidth
                    >
                      <Tab label="Item One" />
                      <Tab label="Item Two" />
                      <Tab label="Item Three" />
                    </Tabs>
                  </AppBar>
                  {value === 0 &&
                    <Typography className={scss.details}>
                      Lorem ipsum a imperdiet non tincidunt aenean euismod, aenean commodo molestie facilisis himenaeos ad, morbi ut rhoncus porta sem mollis placerat etiam rhoncus arcu aptent mi blandit diam proin netus integer vestibulum quisque, mollis quis consectetur nunc lectus tempus suscipit turpis libero ullamcorper ligula vel eleifend aliquam auctor lacus dolor ad ornare ad conubia ultrices urna est.
                    </Typography>
                  }
                  {value === 1 &&
                    <Typography className={scss.details}>
                      Egestas torquent convallis sapien turpis aenean curae justo luctus suspendisse, ligula class etiam accumsan purus scelerisque ad accumsan, arcu pretium conubia mollis pretium integer condimentum gravida velit primis aliquet enim suspendisse donec diam ornare enim nisl nulla pulvinar vitae.
                    </Typography>
                  }
                  {value === 2 &&
                    <Typography className={scss.details}>
                      Cursus fusce venenatis neque scelerisque orci nullam iaculis sem dui eros blandit nulla, libero nulla facilisis ut metus facilisis semper sed semper per mi, elementum congue volutpat eros condimentum ac nulla turpis non mauris taciti eros taciti vulputate class nunc risus aliquam blandit auctor, nam justo diam nisi commodo proin dui, mollis euismod ultrices consectetur mauris ornare varius.
                    </Typography>
                  }
                </Card>
              </Grid>
            </Grid>
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
