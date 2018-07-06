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
      rerender: false,
      lineChartData:
      {
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

    //After the props come through and set as new state, return the new data
    update = () => {
        return {
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
                  data: this.state.lineChartData.datasets[0].data
            }, {
                type: 'line',
                label: 'BTC',
                backgroundColor: this.props.theme.palette.primary.main,
                borderColor: this.props.theme.palette.primary.main,
                borderWidth: '2',
                lineTension: 0.5,
                pointRadius: 0,
                fill: true,
                data: this.state.lineChartData.datasets[1].data
            }, {
                type: 'line',
                label: 'EOS',
                backgroundColor: this.props.theme.palette.primary.dark,
                borderColor: this.props.theme.palette.primary.dark,
                borderWidth: '2',
                lineTension: 0.5,
                pointRadius: 0,
                fill: true,
                data: this.state.lineChartData.datasets[2].data
              }]
        }
    }

    componentWillReceiveProps(props) {

      if(props.dailyFilter == []){return}
      if(props.dailyFilter.length !== 30){return}

      console.log('dailyfilter', props.dailyFilter)

        //when new props are received, set the new state with the props
        const newChartData = {
            ...this.state.lineChartData,
            datasets: [{data: props.dailyFilter.splice(9,19)},
                       {data: props.dailyFilter.splice(0,9)},
                       {data: props.dailyFilter.splice(19,29)}]
        }

        this.setState({ lineChartData: newChartData });
    }

    // componentWillUnmount() {
    //     clearInterval(this.state.intervalId);
    // }


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
        e.preventDefault();

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
            data={this.update}
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
