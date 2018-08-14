import React from 'react';
import PropTypes from 'prop-types';
import themeStyles from './ico-list.theme.style';
import scss from './ico-list.module.scss';

import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';

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
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    const coins = [
      {key: 1, name: 'Bitcoin', start: 'June 2018', end: 'June 2020', price: '6,345.00', phase: 'Presale'},
      {key: 2, name: 'Ethereum', start: 'Feb 2018', end: 'July 2019', price: '6,845.00', phase: 'Presale'},
      {key: 3, name: 'Bthereum', start: 'Feb 2017', end: 'Jan 2019', price: '7,345.00', phase: 'Presale'},
      {key: 4, name: 'Zethereum', start: 'Jan 2017', end: 'Jan 2020', price: '5,345.00', phase: 'Presale'},
      {key: 5, name: 'Methereum', start: 'June 2018', end: 'Dec 2019', price: '6,355.00', phase: 'Presale'},
      {key: 6, name: 'Elthereum', start: 'Aug 2018', end: 'Nov 2019', price: '6,805.00', phase: 'Presale'},
      {key: 7, name: 'Ethereum', start: 'May 2018', end: 'Feb 2019', price: '2,345.00', phase: 'Presale'},
      {key: 8, name: 'Ethereum', start: 'July 2018', end: 'June 2019', price: '9,345.00', phase: 'Presale'},
      {key: 9, name: 'Ethereum', start: 'May 2017', end: 'June 2019', price: '6,545.00', phase: 'Presale'},
    ];

    return (
      <div className="IcoList">
        <AppBar position="static" className={scss.parent}>
          <Toolbar>
            <div className={scss.tool}>
              <Typography className={scss.text} variant="title">
                Pick your crypto
              </Typography>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
                className={scss.menu}
              >
                Sort By  <FontAwesome name="caret-down" className={scss.icon}></FontAwesome>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Name: A-Z</MenuItem>
                <MenuItem onClick={this.handleClose}>Name: Z-A</MenuItem>
                <MenuItem onClick={this.handleClose}>Price: Highest to Lowest</MenuItem>
                <MenuItem onClick={this.handleClose}>Price: Lowest to Highest</MenuItem>
                <MenuItem onClick={this.handleClose}>Start Date</MenuItem>
                <MenuItem onClick={this.handleClose}>End Date</MenuItem>
              </Menu>
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
          className={classes.background}
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
