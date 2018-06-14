import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import themeStyles from './gdax-ticker-widget.theme.style';

class GdaxTickerWidget extends React.Component {
  constructor(props) {
    super(props);
    this.marquee = null;
    this.strip = null;
    this.startOffsetX = 0;
    this.offsetX = 0;
    this.speed = 0.60;
    this.animationCallback = null;

    this.coinApiKey = 'BCDF3444-F13E-467C-A043-33E55BF4F69D';

    this.state = {
      products: []
    };

    this.setMarqueeRef = (element) => {
      this.marquee = element;
    };

    this.setStripRef = (element) => {
      this.strip = element;
    };
  }

  async componentDidMount() {
    // const request = require('request');

    // const options = {
    //   url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,BCH,ETH,DASH&tsyms=BTC,USD,EUR`,

    //   json: true
    // };
    // request.post(options, (error, response, body) => {
    //   console.log(body)
    //   this.setState({ products: body });

    // });
    // https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR,BTC
    const res = await fetch('https://api.coingecko.com/api/v3/coins?per_page=10');
    // const res = await fetch('https://api.gdax.com/products');
    const data = await res.json();


    if(data)
    {
      console.log("hello",data)
      // let myData = Object.keys(data).map(key => {
      //     return data[key];
      // })

      this.setState({ products:  data})
    }
    console.log(this.state.products)

    setTimeout(() => {
      const startPosition = this.strip.getBoundingClientRect();
      this.startOffsetX = startPosition.x;
      this.animationCallback = window.requestAnimationFrame(this.animate.bind(this));
    }, 1000);

  //   const subscribe = {
  //     type: 'subscribe',
  //     channels: [
  //       {
  //         name: 'ticker',
  //         product_ids: data.map(product => product.id)
  //       }
  //     ]
  //   };

  //   const hello =  {
  //     "type": "hello",
  //     "apikey": this.coinApiKey,
  //     "heartbeat": false,
  //     "subscribe_data_type": ["trade"],
  //     "subscribe_filter_asset_id": ["BTC", "BCH", "ETH", "LTC"]
  //   };

  //   this.ws = new WebSocket('wss://ws-feed.gdax.com');
  //   // this.ws = new WebSocket('wss://ws.coinapi.io/v1/');

  //   this.ws.onopen = () => {
  //     this.ws.send(JSON.stringify(subscribe));
  //     // this.ws.send(JSON.stringify(hello));
  //   };

  //   this.ws.onmessage = (e) => {
  //     const value = JSON.parse(e.data);
  //     // console.log(value);
  //     if (value.type !== 'ticker') {
  //       return;
  //     }

  //     const index = this.state.products.findIndex(product => product.id === value.product_id);
  //     if (index !== -1) {
  //       const { products } = this.state;
  //       products[index].socket = value;
  //       this.setState({ products });
  //     }
  //   };
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationCallback);
    // this.ws.close();
  }

  animate = () => {
    this.offsetX -= 1 * this.speed;
    this.marquee.style.transform = `translate(${this.offsetX}px, 0) translateZ(0)`;
    const stripPos = this.strip.getBoundingClientRect();
    if (stripPos.x < (-stripPos.width + this.startOffsetX)) {
      this.offsetX = 0;
    }
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
                        <Typography component="h5">BTC ${parseFloat(x.market_data.current_price.btc).toFixed(2)}</Typography>

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
          </div>

          <div className={classes['ticker-strip']} key="copy">
              {tickerItem}


              {/*{this.state.products &&
                this.state.products.map((x, i) => {
                return (
                  <div>

                  <h6>{ x.symbol}</h6>
                  <p>{ x.market_data.current_price.usd}</p>
                  <p>{ x.market_data.current_price.eur}</p>
                  <p>{ x.market_data.current_price.gdp}</p>

                  <p>{ x.BTC}</p>

                  </div>
                  )
              })
            }*/}
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
