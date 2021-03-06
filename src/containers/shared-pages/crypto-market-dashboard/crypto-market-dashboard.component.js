import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import GdaxTickerWidget from "./components/gdax-ticker-widget/gdax-ticker-widget.component";
import DailyPerformanceWidget from "./components/daily-performance-widget/daily-performance-widget.component";
import AnnualPerformanceWidget from "./components/annual-performance-widget/annual-performance-widget.component";
import MostPopularWidget from "./components/most-popular-widget/most-popular-widget.component";
import MarketCapWidget from "./components/market-cap-widget/market-cap-widget.component";
import socketIOClient from "socket.io-client";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./crypto-market-dashboard.style";


class Crypto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickerData: null,
      dailyPerformanceData: [],
      annualPerformanceData: null,
      mostPopularData: null,
      marketCapData: null
    };
  }

  componentDidMount() {
    //open up socket for data from server
    this.socketListener();

    //emit default values for client data
    this.filterStats(1);
    this.filter2(1);
  }

  //daily performance widget filter function
  filterStats = async num => {

    const bitcoin = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${num}`);
    const ether = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${num}`);
    const eos = await axios.get(`https://api.coingecko.com/api/v3/coins/eos/market_chart?vs_currency=usd&days=${num}`);

    let arr = [];

    bitcoin.data.prices.map(x => {
      if (arr.length === 10) {
        return;
      }
      else {
        arr.push(Math.round(x[1]));
      }

    });

    ether.data.prices.map(x => {
      if (arr.length === 20) {
        return;
      }
      else {
        arr.push(Math.round(x[1]));
      }
    });

    eos.data.prices.map(x => {
      if (arr.length === 30) {
        return;
      }
      else {
        arr.push(Math.round(x[1]));
      }
    });

    this.setState({
      dailyPerformanceData: arr
    });
    console.log("daily", this.state.dailyPerformanceData);
  };


  filter2 = async num => {

    let date = new Date();
    date.setDate(date.getDate() - num);

    let time = date.toLocaleDateString().replace(/\//g, "-");

    // const coins = ['bitcoin','ethereum','eos','ripple','litecoin','monero','neo','cardano','dash','tron']


    // let mainData = []
    // let targetData = []

    // let promises = coins.forEach(async x => {
    //      fetch(`https://api.coingecko.com/api/v3/coins/${x}/history?date=${time}&localization=false`)
    // })

    // let response = await Promise.all(promises)
    // console.log(response)


    //   if(response)
    //     {
    //         //gather all data
    //         mainData.push(response)
    //     }
    // console.log(mainData)

    // mainData.forEach(x => {
    //     x.data.market_data?
    //         targetData.push(x.data.market_data.total_volume.usd) : targetData.push(0)
    // })

    // this.setState({
    //         annualPerformanceData: targetData
    // })
    const bitcoin = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${time}&localization=false`);
    const ether = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/history?date=${time}&localization=false`);
    const eos = await axios.get(`https://api.coingecko.com/api/v3/coins/eos/history?date=${time}&localization=false`);
    const ripple = await axios.get(`https://api.coingecko.com/api/v3/coins/ripple/history?date=${time}&localization=false`);
    const litecoin = await axios.get(`https://api.coingecko.com/api/v3/coins/litecoin/history?date=${time}&localization=false`);
    const monero = await axios.get(`https://api.coingecko.com/api/v3/coins/monero/history?date=${time}&localization=false`);
    const neo = await axios.get(`https://api.coingecko.com/api/v3/coins/neo/history?date=${time}&localization=false`);
    const cardano = await axios.get(`https://api.coingecko.com/api/v3/coins/cardano/history?date=${time}&localization=false`);
    const dash = await axios.get(`https://api.coingecko.com/api/v3/coins/dash/history?date=${time}&localization=false`);
    const tron = await axios.get(`https://api.coingecko.com/api/v3/coins/tron/history?date=${time}&localization=false`);


    if (bitcoin && ether && eos && ripple && litecoin &&
      monero && neo && cardano && dash && tron) {
      let mainData = [];
      let targetData = [];

      //gather all data
      mainData.push(bitcoin.data, ether.data, eos.data,
        ripple.data, litecoin.data, monero.data,
        neo.data, cardano.data, dash.data, tron.data);
      console.log("main", mainData);

      //grab target -> total volume for each coin
      mainData.forEach(x => {
        x.market_data ?
          targetData.push(x.market_data.total_volume.usd) : targetData.push(0);
      });

      this.setState({
        annualPerformanceData: targetData
      });
      console.log("before pass", this.state.annualPerformanceData);
    }
  };

  //watches for data from server in order to set state with sent data
  socketListener = () => {
    const socket = socketIOClient(this.state.endpoint);

    socket.on("FromAPI", (data, data2, data3) => {

      //if all data is found push into array and set the state
      if (data || data2 || data3) {
        let arr1 = [];

        data3.forEach(x => {
          arr1.push(x.market_data.total_volume.usd);
        });

        this.setState({
          tickerData: data,
          marketCapData: data2
        });

        setTimeout(() => {
          this.setState({ annualPerformanceData: arr1 });
        }, 20000);
      }
    });
  };

  render() {
    const { classes } = this.props;

    let DailyPerformance = this.state.dailyPerformanceData &&
      <DailyPerformanceWidget
        dailyFilter={this.state.dailyPerformanceData}
        endpoint={this.state.endpoint}
        filterStats={this.filterStats}/>;

    let AnnualPerformance = this.state.annualPerformanceData &&
      <AnnualPerformanceWidget
        marketShareData={this.state.annualPerformanceData}
        filter2={this.filter2}/>;

    let main = (this.state.dailyPerformanceData && this.state.annualPerformanceData) ?

      (<div>
        <Grid key={1} item>
          <Paper key={1} className={classes.portalWidgetContent}>
            <GdaxTickerWidget products={this.state.tickerData}/>
          </Paper>
        </Grid>

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
                <MostPopularWidget popularData={this.state.tickerData} filterStats={this.filterStats}/>
              </Grid>

              <Grid key={4} item xs={12} sm={12} md={8} className={classes.portalWidget}>
                <MarketCapWidget marketCapData={this.state.marketCapData}/>
              </Grid>

            </Grid>
          </Grid>
        </div>
      </div>)
      :
      <CircularProgress className={classes.loading} size={80}/>;
    return (
      [main]
    );
  }
}

Crypto.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Crypto);
