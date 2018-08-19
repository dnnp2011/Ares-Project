import React from 'react';
import PropTypes from 'prop-types';
import themeStyles from './ico-list.theme.style';
import scss from './ico-list.module.scss';
import { withStyles } from '@material-ui/core/styles';
import Ico from '../ico-list-item/ico-list-item.component';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { fs } from '../../../../firebase';
import Detail from '../ico-detail/ico-detail.component';

import withAuthorization from '../../../authentication/withAuthorization';


class IcoList extends React.Component {
  state={
    icos: [],
  };

  componentWillMount() {
    fs.doGetAllIcos().then(snapshot =>
      this.setState({
        icos: snapshot.docs,
      }, console.log(`Setting State As: ${[snapshot.docs]}`))
    );

    console.log(this.state.icos);
  }

  render() {
    const coins = [
      {
        key: 1, name: 'Bitcoin', start: 'June 2018', end: 'June 2019', price: '$6,345.00', phase: 'Presale'
      },
      {
        key: 2, name: 'Ethereum', start: 'Feb 2018', end: 'June 2019', price: '$6,345.00', phase: 'Presale'
      },
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
        <br />
        {coins.map(coin =>
          <Ico key={coin.key} name={coin.name} start={coin.start} end={coin.end} price={coin.price} phase={coin.phase} />)}
      </div>
    );
  }
}

IcoList.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(IcoList);
