import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import socketIOClient from "socket.io-client";
import axios from "axios";

import themeStyles from './gdax-ticker-widget.theme.style';

class GdaxTickerWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // products: null,
            endpoint: "http://127.0.0.1:4001",
            data: null
        }

        this.setMarqueeRef = (element) => {
            this.marquee = element;
        }

        this.setStripRef = (element) => {
            this.strip = element;
        }

        this.marquee = null;
        this.strip = null;
        this.startOffsetX = 0;
        this.offsetX = 0;
        this.speed = 1;
        this.animationCallback = null;

        this.coinApiKey = 'BCDF3444-F13E-467C-A043-33E55BF4F69D';
    }

    async componentWillMount() {

        const results = await axios.get(`https://api.coingecko.com/api/v3/coins?per_page=10&page=1`)

        this.setState({data: results.data})


        setTimeout(() => {
            const startPosition = this.strip.getBoundingClientRect();
            this.startOffsetX = startPosition.x;
            this.animationCallback = window.requestAnimationFrame(() => this.animate());
        }, 1000);
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationCallback);
        // this.ws.close();
    }

    animate = () => {
        this.offsetX -= 1 * this.speed;
        this.marquee.style.transform = `translate(${this.offsetX}px, 0) translateZ(0)`;

        const stripPos = this.strip.getBoundingClientRect();
        if(stripPos.x < (-stripPos.width + this.startOffsetX)) {this.offsetX = 0}

        this.animationCallback = window.requestAnimationFrame(() => this.animate());
    }

  render() {
    const { classes } = this.props;

    let tickerItem = this.props.products?
                this.props.products.map((x,i) => {
                   return <div className={classes['ticker-item']} key={i}>
                      <div className={classes['ticker-item__name']}>
                        <img src={x.image.thumb} alt="coin" />
                        <Typography component="h1">{x.symbol}</Typography>
                        <Typography component="h5">USD ${parseFloat(x.market_data.current_price.usd).toFixed(2)}</Typography>
                        <Typography component="h5">EUR ${parseFloat(x.market_data.current_price.eur).toFixed(2)}</Typography>
                        <Typography component="h5">BTC {parseFloat(x.market_data.current_price.btc).toFixed(2)}</Typography>
                      </div>
                    </div>
                })
                :
                this.state.data?
                this.state.data.map((x,i) => {
                   return <div className={classes['ticker-item']} key={i}>
                      <div className={classes['ticker-item__name']}>
                        <img src={x.image.thumb} alt="coin" />
                        <Typography component="h1">{x.symbol}</Typography>
                        <Typography component="h5">USD ${parseFloat(x.market_data.current_price.usd).toFixed(2)}</Typography>
                        <Typography component="h5">EUR ${parseFloat(x.market_data.current_price.eur).toFixed(2)}</Typography>
                        <Typography component="h5">BTC {parseFloat(x.market_data.current_price.btc).toFixed(2)}</Typography>
                      </div>
                    </div>
                })
                :
                <h1> incoming...</h1>


    return (
      <div className={classes['portal-gdx-ticket-widget']}>
        <div className={classes['ticker-container']}>
          <div ref={this.setMarqueeRef} className={classes['ticker-content']}>
            <div ref={this.setStripRef} className={classes['ticker-strip']} key="original">
              {tickerItem}
            </div>
            <div className={classes['ticker-strip']} key="copy">
              {tickerItem}
            </div>
          </div>
        </div>
      </div>
    )

  }
}

GdaxTickerWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(GdaxTickerWidget);
