import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import socketIOClient from "socket.io-client";

import themeStyles from './gdax-ticker-widget.theme.style';

class GdaxTickerWidget extends React.Component {
    constructor(props) {
        super(props);

        this.marquee = null;
        this.strip = null;
        this.startOffsetX = 0;
        this.offsetX = 0;
        this.speed = 1;
        this.animationCallback = null;

        this.coinApiKey = 'BCDF3444-F13E-467C-A043-33E55BF4F69D';

        this.state = {
            products: [],
            endpoint: "http://127.0.0.1:4001"
        }

        this.setMarqueeRef = (element) => {
            this.marquee = element;
        }

        this.setStripRef = (element) => {
            this.strip = element;
        }
    }

    async componentDidMount() {

        // const socket = socketIOClient(this.state.endpoint);
        // socket.on("FromAPI", data => {
        //     if(data)
        //     {
        //       let myData = Object.keys(data).map(key => {
        //           return data[key];
        //       })

        //       this.setState({ products:  myData})
        //     }
        // })

        setTimeout(() => {
            const startPosition = this.strip.getBoundingClientRect();
            this.startOffsetX = startPosition.x;
            this.animationCallback = window.requestAnimationFrame(this.animate.bind(this));
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

        this.animationCallback = window.requestAnimationFrame(this.animate.bind(this));
    }

  render() {
    const { classes } = this.props;

    let tickerItem = this.state.products && this.state.products.map((x,i) => {
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
