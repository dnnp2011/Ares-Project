import React from 'react';

import themeStyles from './ico-list.theme.style';
import scss from './ico-list.module.scss';
import { withStyles } from '@material-ui/core/styles';
import Ico from '../ico-list-item/ico-list-item.component';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Detail from '../ico-detail/ico-detail.component';



export default class IcoList extends React.Component {

  render() {

    const coins = [
      {key: 1, name: 'Bitcoin', start: 'June 2018', end: 'June 2019', price: '$6,345.00', phase: 'Presale'},
      {key: 2, name: 'Ethereum', start: 'Feb 2018', end: 'June 2019', price: '$6,345.00', phase: 'Presale'},
    ];
    return (
      <div className="IcoList">
      <AppBar position="static" className={scss.parent}>
        <Toolbar>
              <Typography className={scss.tool} variant="title">
                Pick your crypto
              </Typography>

        </Toolbar>
      </AppBar>
      <br/>
      {coins.map(coin =>
        <Ico key={coin.key} name={coin.name} start={coin.start} end={coin.end} price={coin.price} phase={coin.phase} />
      )}
      </div>
    );
  }
}
/*
Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};
*/

// <Ico name={"Bitcoin"} start={"June 2018"} end={"June 2019"} price={"$6,345.00"} phase={"Presale"}/>
// <Ico name={"Ethereum"} start={"Feb 2018"} end={"Feb 2019"} price={"$1,943.00"} phase={"Presale"}/>
// <Ico name={"Ripple"} start={"May 2018"} end={"May 2019"} price={"$722.00"} phase={"Presale"}/>
// <Ico name={"Litecoin"} start={"July 2018"} end={"July 2019"} price={"$455.00"} phase={"Presale"}/>
// <Ico name={"Cardano"} start={"Sept 2018"} end={"Jan 2019"} price={"$6.00"} phase={"Presale"}/>

// this will have a list of all the different ico's
