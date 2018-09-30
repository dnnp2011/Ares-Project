import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LineChartWidget from './chart-widget.component';
import Button from '@material-ui/core/Button';
import {Pie} from 'react-chartjs-2';
import Web3 from 'web3';

import axios from 'axios'
import styles from './clientDashboard.style';

    // var web3 = Web3();

// import FontAwesome from 'react-fontawesome';



class clientDashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isConnected: false
        };

    }

    componentDidMount() {
        // if (typeof web3 !== 'undefined') {
        //   this.web3 = new Web3(window.web3.currentProvider);
        //             console.log('connected!!!')

        // } else {
        //   console.log('ifnekrvhbkwebvjehbvwhbw')
        // }
    }


    render() {
          const { classes } = this.props;

          const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#36A2EB',
                '#FFCE56',
                '#FFCE56'
                ]
            }]
        };

        const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    }


  return (
    <div className={classes.portalDashboardPageWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>
          <Grid key={1} item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.portalWidget}>
            <Button variant='raised' className={[classes.portalWidgetContent, classes.button1]} component={Link} to="/dashboard/crypto-market">
              Recent Investments
            </Button>
          </Grid>

          <Grid key={2} item xs={12} sm={6} md={3} className={classes.portalWidget}>

            <Button variant='raised' className={[classes.portalWidgetContent, classes.button2]} component={Link} to="/dashboard/crypto-market">
              Portfolio
            </Button>
          </Grid>

          <Grid key={3} item xs={12} sm={6} md={3} className={classes.portalWidget}>

            <Button variant='raised' className={classes.portalWidgetContent} component={Link} to="/dashboard/crypto-market">
              Top Crypto analytics
            </Button>
          </Grid>

          <Grid key={4} item xs={12} sm={6} md={3} className={classes.portalWidget}>

            <Button  variant='raised'className={classes.portalWidgetContent} component={Link} to="/dashboard/crypto-market">
             Messages
            </Button>

          </Grid>

           <Grid key={5} item xs={12} sm={6} md={6} className={classes.portalWidget}>

            <Button  variant='raised'className={classes.portalWidgetContent} component={Link} to="/dashboard/crypto-market">
             Messages
            </Button>

          </Grid>

          <Grid key={6} item xs={12} sm={6} md={6} className={classes.portalWidget}>

            <Button  variant='raised'className={classes.portalWidgetContent} component={Link} to="/dashboard/crypto-market">
             Messages
            </Button>

          </Grid>
{/*
          <Grid key={3} item xs={12} sm={12} md={4} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent}>
              // <ActiveUsersWidget />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={8}>
            <Grid container justify="center" spacing={16}>
              <Grid key={4} item xs={12} className={classes.portalWidget}>
                <Paper className={classes.portalWidgetContent}>
                  // <DailySalesWidget />
                </Paper>
              </Grid>

              <Grid key={5} item xs={12} className={classes.portalWidget}>
                <Paper className={classes.portalWidgetContent}>
                  // <TableWidget />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid key={6} item xs={12} sm={12} md={4} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent}>
              // <RegionSalesWidget />
            </Paper>
          </Grid>*/}

          <Grid key={7} item xs={12} sm={6} md={6} className={classes.portalWidget}>
            <Card className={classes.card}>
                <CardContent>
                    <Pie data={data} legend={options} />
                </CardContent>
            {/*<CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>*/}
            </Card>

          </Grid>

          <Grid key={8} item xs={12} sm={6} md={6} className={classes.portalWidget}>
            <Card className={classes.card}>
                <CardContent>
                    <Pie data={data} legend={options} />
                </CardContent>
            {/*<CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>*/}
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
  }
}



clientDashboard.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(clientDashboard);
