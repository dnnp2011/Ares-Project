import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import themeStyles from './daily-performance-widget.theme.style';
// import socketIOClient from "socket.io-client";

const legendOptions = {
  display: true,
  position: 'top',
  labels: {
    boxWidth: 10
  }
};

class DailySalesWidget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      intervalId: null,
      lineChartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November'],
        datasets: [{
          type: 'line',
          label: 'ETH',
          backgroundColor: this.props.theme.palette.primary.light,
          borderColor: this.props.theme.palette.primary.light,
          borderWidth: '2',
          lineTension: 0.5,
          pointRadius: 0,
          fill: true,
          data: this.props.dailyFilter.splice(9,19)
    }, {
        type: 'line',
        label: 'BTC',
        backgroundColor: this.props.theme.palette.primary.main,
        borderColor: this.props.theme.palette.primary.main,
        borderWidth: '2',
        lineTension: 0.5,
        pointRadius: 0,
        fill: true,
        data: this.props.dailyFilter.splice(0,9)
    }, {
        type: 'line',
        label: 'EOS',
        backgroundColor: this.props.theme.palette.primary.dark,
        borderColor: this.props.theme.palette.primary.dark,
        borderWidth: '2',
        lineTension: 0.5,
        pointRadius: 0,
        fill: true,
        data: this.props.dailyFilter.splice(19,29)
      }]
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          display: false
        }]
      }
    },

  }
}


    componentDidMount() {
     // console.log(this.props.dailyFilter)
              // this.props.filterStats(1)

        // const res = await axios.get(`https://api.coingecko.com/api/v3/coins?per_page=10`)
        // const bitcoinData = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${request}`)
        // const etherData = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${request}`)
        // const eosData = await axios.get(`https://api.coingecko.com/api/v3/coins/eos/market_chart?vs_currency=usd&days=${request}`)

      // fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${request}`)


        // const randomInterval = (3 + Math.floor(Math.random() * 4)) * 1000;

        // const intervalId = setInterval(() => {
        //     this.randomizeCharts();
        // }, randomInterval);

        // this.setState({ intervalId })
    }

    componentWillReceiveProps(props) {
      // console.log('props',props.dailyFilter)


        this.setState({
              intervalId: null,
              lineChartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November'],
                datasets: [{
                  type: 'line',
                  label: 'ETH',
                  backgroundColor: this.props.theme.palette.primary.light,
                  borderColor: this.props.theme.palette.primary.light,
                  borderWidth: '2',
                  lineTension: 0.5,
                  pointRadius: 0,
                  fill: true,
                  data: this.props.dailyFilter.splice(9,19)
            }, {
                type: 'line',
                label: 'BTC',
                backgroundColor: this.props.theme.palette.primary.main,
                borderColor: this.props.theme.palette.primary.main,
                borderWidth: '2',
                lineTension: 0.5,
                pointRadius: 0,
                fill: true,
                data: this.props.dailyFilter.splice(0,9)
            }, {
                type: 'line',
                label: 'EOS',
                backgroundColor: this.props.theme.palette.primary.dark,
                borderColor: this.props.theme.palette.primary.dark,
                borderWidth: '2',
                lineTension: 0.5,
                pointRadius: 0,
                fill: true,
                data: this.props.dailyFilter.splice(19,29)
              }]
            },
            lineChartOptions: {
              responsive: true,
              maintainAspectRatio: false,
              tooltips: {
                enabled: false
              },
              scales: {
                xAxes: [{
                  display: false
                }]
              }
            },

         })
        // this.setState({
        //     lineChartData: {
        //         datasets: [
        //             {

        //                 data: this.props.dailyFilter.splice(9,19)
        //             },
        //             {

        //                 data: this.props.dailyFilter.splice(0,9)
        //             },
        //             {

        //                 data: this.props.dailyFilter.splice(19,29)
        //             }
        //         ]
        //     }
        // })



        // const oldEthDataSet = this.state.lineChartData.datasets[0];
        // const newEthDataSet = { ...oldEthDataSet };
        // newEthDataSet.borderColor = props.theme.palette.primary.light;
        // newEthDataSet.backgroundColor = props.theme.palette.primary.light;

        // const oldBtcDataSet = this.state.lineChartData.datasets[1];
        // const newBtcDataSet = { ...oldBtcDataSet };
        // newBtcDataSet.borderColor = props.theme.palette.primary.main;
        // newBtcDataSet.backgroundColor = props.theme.palette.primary.main;

        // const oldMscDataSet = this.state.lineChartData.datasets[2];
        // const newMscDataSet = { ...oldMscDataSet };
        // newMscDataSet.borderColor = props.theme.palette.primary.dark;
        // newMscDataSet.backgroundColor = props.theme.palette.primary.dark;

        // const newChartData = {
        // ...this.state.lineChartData,
        // datasets:  [props.dailyFilter.splice(9,19), props.dailyFilter.splice(0,9), props.dailyFilter.splice(19,29)]
        // };

        // this.setState({ lineChartData: newChartData });
    }

    // componentWillUnmount() {
    //     clearInterval(this.state.intervalId);
    // }


    // filterData = number => {
    //     // this.randomizeCharts();
    //     // const socket = socketIOClient(this.props.endpoint);

    //     // let num = number
    //     // // this.setState({dailyFilter: num})
    //     // socket.emit('filterReq', num)
    //     // console.log(num)
    // }


  // socket.on('filterRequest',() => {socket.emit('filterRequest', this.state.dailyFilter)})


  // randomizeCharts = () => {
  //   const ethDataSet = this.state.lineChartData.datasets[0];
  //   const newEthData = [...ethDataSet.data];
  //   newEthData.push(Math.floor(Math.random() * 30));
  //   newEthData.splice(0, 1);
  //   const newEthDataSet = { ...ethDataSet };
  //   newEthDataSet.data = newEthData;

  //   const oldBtcDataSet = this.state.lineChartData.datasets[1];
  //   const newBtcData = [...oldBtcDataSet.data];

  //   const newBtcDataSet = { ...oldBtcDataSet };
  //   newBtcDataSet.data = newBtcData;

  //   const oldMscDataSet = this.state.lineChartData.datasets[2];
  //   const newMscData = [...oldMscDataSet.data];
  //   newMscData.push(70 + Math.floor(Math.random() * 30));
  //   newMscData.splice(0, 1);
  //   const newMscDataSet = { ...oldMscDataSet };
  //   newMscDataSet.data = newMscData;

  //   const newChartData = {
  //     ...this.state.lineChartData,
  //     datasets: [newEthDataSet, newBtcDataSet, newMscDataSet]
  //   };

  //   this.setState({ lineChartData: newChartData });
  // }

  handleClick = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <Card className={classes['portal-daily-performance-widget']}>
        <CardHeader
          action={
            <IconButton
              aria-owns={anchorEl ? 'store-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title="Daily Performance"
          subheader="21 June 2018 - 28 June 2018"
        />
        <CardContent className={classes['portal-daily-performance-widget__chart']}>
          <Line
            data={this.state.lineChartData}
            options={this.state.lineChartOptions}
            legend={legendOptions}
          />
        </CardContent>
        <Menu
          id="store-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem key={1} onClick={e => this.props.filterStats(1)}>Day</MenuItem>
          <MenuItem key={2} onClick={e => this.props.filterStats(7)}>Week</MenuItem>
          <MenuItem key={3} onClick={e => this.props.filterStats(30)}>Month</MenuItem>
          <MenuItem key={4} onClick={e => this.props.filterStats(365)}>Annual</MenuItem>
        </Menu>
      </Card>
    )
  }
}

DailySalesWidget.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        dark: PropTypes.string,
        main: PropTypes.string,
        light: PropTypes.string,
        contrastText: PropTypes.string
      }),
      secondary: PropTypes.shape({
        main: PropTypes.string,
        light: PropTypes.string,
        dark: PropTypes.string
      }),
      common: PropTypes.shape({
        white: PropTypes.string
      })
    })
  }).isRequired,
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(DailySalesWidget);
