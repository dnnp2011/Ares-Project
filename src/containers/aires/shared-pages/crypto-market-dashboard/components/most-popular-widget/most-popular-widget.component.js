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
import axios from 'axios'
import themeStyles from './most-popular-widget.theme.style';

class MostPopularWidget extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null,
            page: 1,
            result: null
        }
    }

    componentDidMount() {

        this.getData()


    }

    async getData() {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins?per_page=10&page=${this.state.page}`)

            console.log(res)
            this.setState({result: res.data})
    }

    // async getApi = () => {

    //         //general sort for cointicker
    //         const res = await axios.get(`https://api.coingecko.com/api/v3/coins?per_page=10&page=xx${this.state.page}`)

    //         console.log(res)
    //         this.setState({result: res.data})
    // }

    nextPage = (e) => {
        this.setState({ page: this.state.page + 1}, this.getData)
    }

    prevPage = (e) => {
        this.setState({ page: this.state.page - 1}, this.getData)
    }

    firstPage = (e) => {
        this.setState({page: 1}, this.getData)
    }

    handleClick = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <Card className={classes['portal-most-popular-widget']}>
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
          title="Most Popular"
          subheader="2nd Semester 2018"
        />
        <CardContent className={classes['portal-most-popular-widget__table']}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes['table-cell']}>Name</TableCell>
                <TableCell className={classes['table-cell']}>Symbol</TableCell>
                <TableCell className={classes['table-cell']} numeric>Price</TableCell>
                <TableCell className={classes['table-cell']} numeric>Supply</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.result?
                this.state.result.map((x,i) => (
                <TableRow key={i}>
                  <TableCell className={classes['table-cell']}>{x.name}</TableCell>
                  <TableCell className={classes['table-cell']}>{x.symbol}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>${x.market_data.current_price.usd.toFixed(2)}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{x.market_data.circulating_supply}</TableCell>
                </TableRow>))
                :
                <p>incoming!!!</p>
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
          <MenuItem key={1} onClick={(e) => this.nextPage()}>Next</MenuItem>
          <MenuItem key={2} onClick={(e) => this.prevPage()}>Prev</MenuItem>
          <MenuItem key={3} onClick={(e) => this.firstPage()}>First Page</MenuItem>
        </Menu>
      </Card>
    );
  }
}

MostPopularWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(MostPopularWidget);
