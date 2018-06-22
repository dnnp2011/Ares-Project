import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import GdaxTickerWidget from './components/gdax-ticker-widget/gdax-ticker-widget.component';
import DailyPerformanceWidget from './components/daily-performance-widget/daily-performance-widget.component';
import AnnualPerformanceWidget from './components/annual-performance-widget/annual-performance-widget.component';
import MostPopularWidget from './components/most-popular-widget/most-popular-widget.component';
import MarketCapWidget from './components/market-cap-widget/market-cap-widget.component';
import socketIOClient from 'socket.io-client';

import styles from './crypto-market-dashboard.style';


class Crypto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tickerData: null,
            dailyPerformanceData: null,
            annualPerformanceData: null,
            dailyPerformanceData: null,
            mostPopularData: null,
            marketCapData: null,
            endpoint: "http://127.0.0.1:4001"
        }
    }

    async componentDidMount() {

        const socket = socketIOClient(this.state.endpoint);
        socket.on("FromAPI", (data, data2) => {
            if(data || data2)
            {
                // console.log(data2)
                // let myData = Object.keys(data).map(key => {
                //   return data[key];
                // })

                // let myData2 = Object.keys(data2).map(key => {
                //   return data2[key];
                // })

                this.setState({
                    tickerData:  data,
                    dailyPerformanceData: data2
                })
            }
        })

                console.log(this.state.tickerData)

    }

    render() {
        const { classes } = this.props;

        return (
            [

              /* -- Control grid layout, spacing, and breakpoints here -- */

              <Grid key={1} item><Paper key={1} className={classes.portalWidgetContent}><GdaxTickerWidget products={this.state.tickerData} /></Paper></Grid>,
              <div key={2} className={classes.portalDashboardPageWrapper}>

                <Grid item xs={12}>
                  <Grid container justify="center" spacing={16}>

                    <Grid key={1} item xs={12} sm={12} md={8} className={classes.portalWidget}>
                      <Paper className={classes.portalWidgetContent}>
                        <DailyPerformanceWidget />
                      </Paper>
                    </Grid>

                    <Grid key={2} item xs={12} sm={12} md={4} className={classes.portalWidget}>
                      <AnnualPerformanceWidget />
                    </Grid>

                    <Grid key={3} item xs={12} sm={12} md={4} className={classes.portalWidget}>
                      <MostPopularWidget />
                    </Grid>

                    <Grid key={4} item xs={12} sm={12} md={8} className={classes.portalWidget}>
                      <MarketCapWidget />
                    </Grid>

                  </Grid>
                </Grid>
              </div>
            ]
        )
    }
}

Crypto.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Crypto);
