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

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logoImage from '../../../../assets/images/portal-logo.png';
import Divider from "../../../elements/divider/divider.component";

import ProjectStatesWidget from './components/project-states-widget/project-states.component';
import DailySalesWidget from './components/daily-sales-widget/daily-sales-widget.component';
import TabbedChartWidget from './components/tabbed-chart-widget/tabbed-chart-widget.component';

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
      <div className={classes.background}>
        {/**
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              ICO Detail
            </Typography>
          </Toolbar>
        </AppBar>
        **/}
        <Grid container spacing={16} justify="center" alignContent="center"  className={scss.background}>

          <Grid item sm={12} xs={12} md={12} className={scss.line}>
                <Paper className={scss["project-status"]}>
                  <ProjectStatesWidget />
                </Paper>
          </Grid>

          <Grid item sm={12} xs={12} md={12}>
            <Grid container spacing={16} justify="center">

              <Grid item sm={10} xs={10} md={3} className={scss.line}>
                <Grid container spacing={16} alignContent="center" justify="center" >
                  <Grid item xs={12} sm={12} md={12}>
                    <Paper className={scss["basic-info"]}>
                      <img src={logoImage} alt="logo image" className={scss.logo} />
                      <Typography variant="title" className={scss.name} gutterBottom>
                        Bitcoin
                      </Typography>
                      <Typography variant="body2" className={scss.price} gutterBottom>
                        Price: $1635.00
                      </Typography>
                      <Typography>
                        Start Date: Jan 2018
                      </Typography>
                      <Typography>
                        End Date: Sept 2018
                      </Typography>
                      <br/>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Paper>
                      <Button fullWidth variant="contained" color="primary">Invest</Button>
                    </Paper>
                    <Paper>
                      <Button fullWidth color="secondary">View Whitepaper</Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={9}>
                <Card className={scss["details-card"]}>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.value}
                      onChange={this.handleChange}
                      className={scss.tabs}
                      centered
                      fullWidth
                    >
                      <Tab label="Details" />
                      <Tab label="Daily Sales" />
                      <Tab label="Monthly Sales" />
                    </Tabs>
                  </AppBar>
                  {value === 0 &&
                    <Typography className={scss.details}>
                      Lorem ipsum a imperdiet non tincidunt aenean euismod, aenean commodo molestie facilisis himenaeos ad, morbi ut rhoncus porta sem mollis placerat etiam rhoncus arcu aptent mi blandit diam proin netus integer vestibulum quisque, mollis quis consectetur nunc lectus tempus suscipit turpis libero ullamcorper ligula vel eleifend aliquam auctor lacus dolor ad ornare ad conubia ultrices urna est.
                    </Typography>
                  }
                  {value === 1 &&
                    <Paper className={classes.portalWidgetContent, scss.charts}>
                      <DailySalesWidget />
                    </Paper>
                  }
                  {value === 2 &&
                    <Paper className={classes.portalWidgetContent, scss.charts}>
                      <TabbedChartWidget />
                    </Paper>
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
