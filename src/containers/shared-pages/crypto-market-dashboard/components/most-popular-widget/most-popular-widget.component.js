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
            page: 1,
            result: null
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins?per_page=10&page=${this.state.page}`)

        this.setState({result: res.data})
    }

    nextPage = (e) => {
        this.setState({ page: this.state.page + 1}, this.getData)
    }

    prevPage = (e) => {
        this.setState({ page: this.state.page - 1}, this.getData)
    }

    firstPage = (e) => {
        this.setState({page: 1}, this.getData)
    }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <Card className={classes['portal-most-popular-widget']}>
        <CardHeader
          action={
            <div>
                <IconButton onClick={e => this.firstPage()}>
                  <i className="fas fa-fast-backward"></i>
                </IconButton>
                <IconButton onClick={e => this.prevPage()}>
                  <i className="fas fa-caret-left"></i>
                </IconButton>
                <IconButton onClick={e => this.nextPage()}>
                  <i className="fas fa-caret-right"></i>
                </IconButton>
            </div>
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
      </Card>
    );
  }
}

MostPopularWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(MostPopularWidget);
