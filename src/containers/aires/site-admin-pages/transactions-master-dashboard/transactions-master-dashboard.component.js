
import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './investor-master-dashboard.theme.style';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
  TableFilterRow,
  VirtualTable
} from '@devexpress/dx-react-grid-material-ui';
import {
  SearchState,
  IntegratedFiltering,
  SortingState,
  IntegratedSorting,
  FilteringState
} from '@devexpress/dx-react-grid';


class TransactionList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'titlefrom', title: 'From' },
        { name: 'titleto', title: 'To' },
        { name: 'amount', title: 'Amount' },
        { name: 'date', title: 'Date' },
      ],
      rows: [
        {
          titlefrom: 'Jane',
          titleto: 'myICO',
          amount: 1,
          date: '2014/12/25 12:00:00'
        },
        {
          titlefrom: 'Second',
          titleto: 'yourICO',
          amount: 2,
          date: '2014/12/25 12:00:00'

        },
        {
          titlefrom: 'Third',
          titleto: 'OurICO',
          amount: 3,
          date: '2014/12/25 12:00:00'

        },
        {
          titlefrom: 'Fourth',
          titleto: 'myICO',
          amount: 4,
          date: '2014/12/25 12:00:00'

        },
        {
          titlefrom: 'Fifth',
          titleto: 'myICO',
          amount: 5,
          date: '2014/12/25 12:00:00'

        },
        {
          titlefrom: 'Sixth',
          titleto: 'myICO',
          amount: 6,
          date:'2014/12/25 12:00:00'

        },
        {
          titlefrom: 'Senventh',
          titleto: 'myICO',
          amount: 7,
          date: '2014/12/25 12:00:00'

        },
        {
          titlefrom: 'Eighth',
          titleto: 'myICO',
          amount: 13,
          date: '2014/12/25 12:00:00'

        },
        {
          titlefrom: 'Nineth',
          titleto: 'myICO',
          amount: 24,
          date: '2014/12/25 12:00:00'

        },
        {
          titlefrom: 'Tenth',
          titleto: 'myICO',
          amount: 10,
          date: '2013/12/25 12:00:00'

        },
        {
          titlefrom: 'Eleventh',
          titleto: 'myICO',
          amount: 11,
          date: '2017/12/25 12:00:00'

        },
        {
          titlefrom: 'Twelfth',
          titleto: 'myICO',
          amount: 12,
          date: '2016/12/25 12:00:00'

        },
        {
          titlefrom: 'Thirteenth',
          titleto: 'myICO',
          amount: 9,
          date: '2015/12/25 12:00:00'

        },
      ],

    };
  }
  render() {
    const { rows, columns } = this.state;


    return (
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <SearchState defaultValue="" />
          <SortingState
            defaultSorting={[{ columnName: 'from', direction: 'asc' }]}
          />
          <IntegratedSorting />
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />
          <Table/>
          {/* <VirtualTable /> */}
          <TableHeaderRow showSortingControls/>
          <TableFilterRow />
          <Toolbar />
          <SearchPanel />
        </Grid>
      </Paper>
    );
  }
}

TransactionList.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(TransactionList);
