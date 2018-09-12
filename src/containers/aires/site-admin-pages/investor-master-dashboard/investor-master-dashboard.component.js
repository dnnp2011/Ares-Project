import * as React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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


import styles from './investor-master-dashboard.theme.style';

class InvestorDash extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'userId', title: 'User ID' },
        { name: 'firstName', title: 'First Name' },
        { name: 'lastName', title: 'Last Name' },
        { name: 'currentInvestments', title: 'Current Investments' },
        { name: 'recentTransaction', title: 'Most Recent Transaction' },
      ],

      rows: [
        {
          firstName: "John",
          lastName: "Doe",
          userId: 1,
          currentInvestments: 3,
          recentTransaction: '2017/12/25 12:00:00'
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          userId: 2,
          currentInvestments: 6,
          recentTransaction: '2018/08/25 12:00:00'
        },
        {
          firstName: "Harry",
          lastName: "Potter",
          userId: 3,
          currentInvestments: 11,
          recentTransaction: '2017/10/25 12:00:00'
        },
        {
          firstName: "Hermione",
          lastName: "Granger",
          userId: 4,
          currentInvestments: 0,
          recentTransaction: '2017/02/25 12:00:00'
        },
        {
          firstName: "Ron",
          lastName: "Weasley",
          userId: 5,
          currentInvestments: 5,
          recentTransaction: '2018/02/25 12:00:00'
        },
        {
          firstName: "Luna",
          lastName: "Lovegood",
          userId: 6,
          currentInvestments: 8,
          recentTransaction: '2018/06/25 12:00:00'
        },
      ],
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Paper>
        {/* <Grid>Hello</Grid> */}
        <Grid
          rows={rows}
          columns={columns}
        >
          <SearchState defaultValue="" />
          <SortingState
            defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
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

<<<<<<< HEAD
    </div>
  );
}
=======
  }
};
>>>>>>> 90db56293cc06c43037929268486fa5b0c5dfe21

INVDash.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(INVDash);
