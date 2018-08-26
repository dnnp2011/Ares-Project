import React from 'react';
import PropTypes from 'prop-types';
import themeStyles from './ico-list.theme.style';
import scss from './ico-list.module.scss';

import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Ico from '../ico-list-item/ico-list-item.component';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FontAwesome from 'react-fontawesome';
import Button from '@material-ui/core/Button';
import { fs } from '../../../../firebase'
import Detail from '../ico-detail/ico-detail.component';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withAuthorization from '../../../authentication/withAuthorization';

class IcoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      originalCoins: [
          {key: 1, name: 'Bitcoin', start: 'June 2018', end: 'June 2020', price: '6,345.00', phase: 'Presale'},
          {key: 2, name: 'Ethereum', start: 'Feb 2018', end: 'July 2019', price: '6,845.00', phase: 'Presale'},
          {key: 3, name: 'Bthereum', start: 'Feb 2017', end: 'Jan 2019', price: '7,345.00', phase: 'Presale'},
          {key: 4, name: 'Zethereum', start: 'Jan 2017', end: 'Jan 2020', price: '5,345.00', phase: 'Presale'},
          {key: 5, name: 'Methereum', start: 'June 2018', end: 'Dec 2019', price: '6,355.00', phase: 'Presale'},
          {key: 6, name: 'Elthereum', start: 'Aug 2018', end: 'Nov 2019', price: '6,805.00', phase: 'Presale'},
          {key: 7, name: 'Ethereum', start: 'May 2018', end: 'Feb 2019', price: '2,345.00', phase: 'Presale'},
          {key: 8, name: 'Ethereum', start: 'July 2018', end: 'June 2019', price: '9,345.00', phase: 'Presale'},
          {key: 9, name: 'Ethereum', start: 'May 2017', end: 'June 2019', price: '6,545.00', phase: 'Presale'},
      ],
      coins: [
          {key: 1, name: 'Bitcoin', start: 'June 2018', end: 'June 2020', price: '6,345.00', phase: 'Presale'},
          {key: 2, name: 'Ethereum', start: 'Feb 2018', end: 'July 2019', price: '6,845.00', phase: 'Presale'},
          {key: 3, name: 'Bthereum', start: 'Feb 2017', end: 'Jan 2019', price: '7,345.00', phase: 'Presale'},
          {key: 4, name: 'Zethereum', start: 'Jan 2017', end: 'Jan 2020', price: '5,345.00', phase: 'Presale'},
          {key: 5, name: 'Methereum', start: 'June 2018', end: 'Dec 2019', price: '6,355.00', phase: 'Presale'},
          {key: 6, name: 'Elthereum', start: 'Aug 2018', end: 'Nov 2019', price: '6,805.00', phase: 'Presale'},
          {key: 7, name: 'Ethereum', start: 'May 2018', end: 'Feb 2019', price: '2,345.00', phase: 'Presale'},
          {key: 8, name: 'Ethereum', start: 'July 2018', end: 'June 2019', price: '9,345.00', phase: 'Presale'},
          {key: 9, name: 'Ethereum', start: 'May 2017', end: 'June 2019', price: '6,545.00', phase: 'Presale'},
      ],
      orderBy: 'key'
    };

    this.handleSort = this.handleSort.bind(this);
    this.handleSortByName = this.handleSortByName.bind(this);
    this.handleSortByNameReverse = this.handleSortByNameReverse.bind(this);
    this.handleSortByPriceDecreasing = this.handleSortByPriceDecreasing.bind(this);
    this.handleSortByPriceIncreasing = this.handleSortByPriceIncreasing.bind(this);
    this.handleSortByStartDate = this.handleSortByStartDate.bind(this);
    this.handleSortByEndDate = this.handleSortByEndDate.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  sortData(sortBy, coinsArray) {
    const coins = coinsArray;
    const sort_by = function(field, reverse, primer){
      const key = primer ?
          function(x) {return primer(x[field])} :
          function(x) {return x[field]};

      reverse = !reverse ? 1 : -1;

      return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      }
    };

    switch(sortBy) {
      case 'name':
        return coins.sort(sort_by('name', false, function(a){return a.toUpperCase()}));
      case 'reverse':
        return coins.sort(sort_by('name', true, function(a){return a.toUpperCase()}));
      case 'price increasing':
        return coins.sort(sort_by('price'), true, function(a){
          var b = a.split(",");
          return parseFloat(b.join());
        });
      case 'price decreasing':
        return coins.sort(sort_by('price'), true, function(a){
          var b = a.split(",");
          return parseFloat(b.join());
        }).reverse();
      case 'start':
        return coins.sort(function(a, b) {
          return new Date(a.start) - new Date(b.start);
        });
      case 'end':
        return coins.sort(function(a, b) {
          return new Date(a.end) - new Date(b.end);
        });
      default:
        return coins;
    }
  };

  handleSort= function(orderBy) {
    var coins = this.state.coins;
    this.setState({
      coins: this.sortData(orderBy, coins),
      orderBy: orderBy,
      anchorEl: null
    });
  };

  handleSortByName = function() {
    this.handleSort('name');
  };
  handleSortByNameReverse = function() {
    this.handleSort('reverse');
  };
  handleSortByPriceIncreasing = function() {
    this.handleSort('price increasing');
  };
  handleSortByPriceDecreasing = function() {
    this.handleSort('price decreasing');
  };
  handleSortByStartDate = function() {
    this.handleSort('start');
  };
  handleSortByEndDate = function() {
    this.handleSort('end');
  };

  filterList= function(event){
    var updatedList = this.state.originalCoins;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({coins: updatedList});
  }

  render() {
    const { anchorEl, coins } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <AppBar position="static" color="secondary" className={scss.parent}>
          <Toolbar>
            <div className={scss.tool}>
              <Typography className={scss.text} variant="title">
                Pick your crypto
              </Typography>
              <div className={scss.menu}>
                <Input
                  placeholder="Filter..."
                  className={scss.filter}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                  onChange={this.filterList}
                />
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  Sort By  <FontAwesome name="caret-down" className={scss.icon}></FontAwesome>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleSortByName}>Name: A-Z</MenuItem>
                  <MenuItem onClick={this.handleSortByNameReverse}>Name: Z-A</MenuItem>
                  <MenuItem onClick={this.handleSortByPriceDecreasing}>Price: Highest to Lowest</MenuItem>
                  <MenuItem onClick={this.handleSortByPriceIncreasing}>Price: Lowest to Highest</MenuItem>
                  <MenuItem onClick={this.handleSortByStartDate}>Start Date</MenuItem>
                  <MenuItem onClick={this.handleSortByEndDate}>End Date</MenuItem>
                </Menu>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <br/>
        <div className={scss.container}>
        <Grid
          container
          direction="row"
          spacing={0}
          justify="center"
          alignItems="center"
        >
          {coins.map(coin =>
            <Ico key={coin.key} name={coin.name} start={coin.start} end={coin.end} price={coin.price} phase={coin.phase} />
          )}
          </Grid>
        </div>
      </div>
    );
  }
}

IcoList.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(IcoList);
// export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(IcoList);
