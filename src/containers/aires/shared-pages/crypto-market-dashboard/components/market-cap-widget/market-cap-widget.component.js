import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import themeStyles from './market-cap-widget.theme.style';

class MarketCapWidget extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null
        }
    }


  onItemClick = () => {
    this.setState({ data: this.state.data.reverse(), anchorEl: null });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <Card className={classes['portal-market-cap-widget']}>
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
          title="Market Cap"
          subheader="Showing Top 10"
        />
        <CardContent className={classes['portal-market-cap-widget__table']}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes['table-cell']}>Index</TableCell>
                <TableCell className={classes['table-cell']}>Name</TableCell>
                <TableCell className={classes['table-cell']}>Symbol</TableCell>
                <TableCell className={classes['table-cell']} numeric>Market Cap</TableCell>
                <TableCell className={classes['table-cell']} numeric>Price</TableCell>
                <TableCell className={classes['table-cell']} numeric>Supply</TableCell>
                <TableCell className={classes['table-cell']} numeric>Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.marketCapData?
                this.props.marketCapData.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className={classes['table-cell']}>{i+1}</TableCell>
                  <TableCell className={classes['table-cell']}>{item.name}</TableCell>
                  <TableCell className={classes['table-cell']}>{item.symbol}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.market_data.market_cap.usd.toFixed(2)}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>${item.market_data.current_price.usd.toFixed(2)}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.market_data.circulating_supply}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{Number.parseFloat(item.market_data.price_change_percentage_24h).toPrecision(3)}%</TableCell>
                </TableRow>)):<p>incoming</p>
              }
            </TableBody>
          </Table>
        </CardContent>
        <Menu
          id="store-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem key={1} onClick={this.onItemClick}>Month</MenuItem>
          <MenuItem key={2} onClick={this.onItemClick}>Week</MenuItem>
          <MenuItem key={3} onClick={this.onItemClick}>Day</MenuItem>
        </Menu>
      </Card>
    );
  }
}

MarketCapWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(MarketCapWidget);
