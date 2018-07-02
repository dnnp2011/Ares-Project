import React from 'react';
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
import axios from "axios";

import styles from './crypto-market-dashboard.style';


class Crypto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tickerData: null,
            dailyPerformanceData: null,
            // dailyFilter: null,
            annualPerformanceData: null,
            mostPopularData: null,
            marketCapData: null,
            endpoint: "http://127.0.0.1:4001"
        }
    }

    async componentDidMount() {
        this.socketListener()
        this.filterStats(1)

    }

    filterStats = async num => {

        const bitcoin = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${num}`)
        const ether = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${num}`)
        const eos = await axios.get(`https://api.coingecko.com/api/v3/coins/eos/market_chart?vs_currency=usd&days=${num}`)

        let arr = []

        bitcoin.data.prices.map(x => {
            if(arr.length === 10) {return}
             arr.push(Math.round(x[1]))
        })

        ether.data.prices.map(x => {
            if(arr.length === 20) {return}
             arr.push(Math.round(x[1]))
        })

        eos.data.prices.map(x => {
            if(arr.length === 30) {return}
             arr.push(Math.round(x[1]))
        })

        this.setState({
            dailyPerformanceData: arr
        })

                console.log('daily', this.state.dailyPerformanceData)

    }

    //watches for data from server in order to set state
    socketListener = () => {
        const socket = socketIOClient(this.state.endpoint)
        // socket.emit('filterReq', '1')

        socket.on("FromAPI", (data, data2, data3) => {
            if(data && data2 && data3)
            {
                // console.log(data2)
                // let myData = Object.keys(data).map(key => {
                //   return data[key];
                // })

                let arr1 = []

                data3.map(x => {
                    arr1.push(x.market_data.total_volume.usd)
                })

                console.log('incoming!', arr1)


                this.setState({
                    tickerData:  data,
                    marketCapData: data2,
                    annualPerformanceData: arr1

                    // dailyPerformanceData: arr
                })

            }
        })
    }


    // filterData = number => {
    //     // this.randomizeCharts();
    //     const socket = socketIOClient(this.state.endpoint)

    //     let num = number
    //     // this.setState({dailyFilter: num})
    //     socket.emit('filterReq', num)
    //     console.log(num)
    // }


    render() {
        const { classes } = this.props;

        let DailyPerformance = this.state.dailyPerformanceData?
                                        <DailyPerformanceWidget
                                            dailyFilter={this.state.dailyPerformanceData}
                                            endpoint={this.state.endpoint}
                                            filterData={this.filterData}
                                            filterStats={this.filterStats} />
                                        :
                                        <p>loading..</p>

        let AnnualPerformance = this.state.annualPerformanceData?
                                    <AnnualPerformanceWidget marketShareData={this.state.annualPerformanceData} />
                                    :
                                    <p>loading..</p>

        return (
            [
              /* -- Control grid layout, spacing, and breakpoints here -- */

              <Grid key={1} item>
              <Paper key={1} className={classes.portalWidgetContent}>
                <GdaxTickerWidget products={this.state.tickerData} />
              </Paper></Grid>,
              <div key={2} className={classes.portalDashboardPageWrapper}>

                <Grid item xs={12}>
                  <Grid container justify="center" spacing={16}>

                    <Grid key={1} item xs={12} sm={12} md={8} className={classes.portalWidget}>
                      <Paper className={classes.portalWidgetContent}>
                        {DailyPerformance}
                      </Paper>
                    </Grid>

                    <Grid key={2} item xs={12} sm={12} md={4} className={classes.portalWidget}>
                     {AnnualPerformance}
                    </Grid>

                    <Grid key={3} item xs={12} sm={12} md={4} className={classes.portalWidget}>
                      <MostPopularWidget popularData={this.state.tickerData} filterStats={this.filterStats} />
                    </Grid>

                    <Grid key={4} item xs={12} sm={12} md={8} className={classes.portalWidget}>
                      <MarketCapWidget marketCapData={this.state.marketCapData} />
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
