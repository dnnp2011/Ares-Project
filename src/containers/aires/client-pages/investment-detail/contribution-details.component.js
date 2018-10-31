import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import themeStyles from "./contribution-details.theme.style";
import scss from "./contribution-details.module.scss";
import { withStyles } from "@material-ui/core/styles";
import logoImage from "../investments/components/portal-logo.png";


const Forgot = (props) => {
  const {
    classes,
    coinName
  } = props;

  const rows = [
    {
      id: 0,
      fromAddress: "My Address",
      toAddress: "Hogwarts",
      amount: 2,
      date: "2018/01/18",
      transactionStatus: "Complete"
    },
    {
      id: 1,
      fromAddress: "My Address",
      toAddress: "Hogwarts",
      amount: 1,
      date: "2018/06/20",
      transactionStatus: "Complete"
    },
    {
      id: 2,
      fromAddress: "My Address",
      toAddress: "Hogwarts",
      amount: 7,
      date: "2018/07/01",
      transactionStatus: "In Progress"
    }
  ];

  return (
    <div className={classes.background}>
      <AppBar position="static" color="secondary" className={scss.header}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Contribution Details
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={16} justify="center" alignContent="center" className={scss["content-container"]}>
        <Grid item sm={10} xs={12}>
          <Paper className={scss["photo-container"]}>
            <img src={logoImage} alt="logo" className={scss.photo}/>
            <Typography gutterBottom>{coinName}</Typography>
          </Paper>
        </Grid>

        <Grid item sm={10} xs={12}>
          <Grid container spacing={0} justify="center" alignContent="center">
            {rows.map(row =>
              <Grid item sm={12} className={scss.row}>
                <Paper className={scss.table}>

                  <Grid container spacing={0} justify="center" alignContent="center">
                    <Grid item sm={2} xs={10}>
                      <Typography variant="title" className={scss["table-head"]}>From:</Typography>
                      <Typography gutterBottom>{row.fromAddress}</Typography>
                    </Grid>
                    <Grid item sm={2} xs={10}>
                      <Typography variant="title" className={scss["table-head"]}>To:</Typography>
                      <Typography gutterBottom>{row.toAddress}</Typography>
                    </Grid>
                    <Grid item sm={2} xs={10}>
                      <Typography variant="title" className={scss["table-head"]}>Amount:</Typography>
                      <Typography gutterBottom>{row.amount}</Typography>
                    </Grid>
                    <Grid item sm={3} xs={10}>
                      <Typography variant="title" className={scss["table-head"]}>Transaction Date:</Typography>
                      <Typography gutterBottom>{row.date}</Typography>
                    </Grid>
                    <Grid item sm={2} xs={10}>
                      <Typography variant="title" className={scss["table-head"]}>Transaction Status:</Typography>
                      <Typography gutterBottom>{row.transactionStatus}</Typography>
                    </Grid>
                  </Grid>
                </Paper>

              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
/*
Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};
*/

export default withStyles(themeStyles, { withTheme: true })(Forgot);
