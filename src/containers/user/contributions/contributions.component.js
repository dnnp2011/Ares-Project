import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import classNames from "classnames";
import themeStyles from '../../user/contributions/contributions.theme.style';
import scss from './contributions.module.scss';
import { withStyles } from '@material-ui/core/styles';
import logoImage from "../../../assets/images/portal-logo.png";
import ProjectStatesWidget from "./components/project-states-widget/project-states.component";

const Forgot = (props) => {
  const {
    classes,
    width,
  } = props;

  const rows = [
    {key: 1, logo: logoImage, tokenName: 'Bitcoin', phase: '', totalContribution: '$200.00' },
    {key: 2, logo: logoImage, tokenName: 'Ethereum', phase: '', totalContribution: '$20.00'},
    {key: 2, logo: logoImage, tokenName: 'Litecoin', phase: '', totalContribution: '$20.00'}
  ];

  const panelDirection = width === "xs" ? "column" : "row";

  return (
    <div className={classes.background}>
      <Grid container direction="row" spacing={16} justify="center" alignItems="center" className={scss.container}>
          {rows.map(row=>
            <Grid item sm={11} xs={11}>
            <Link to={{ pathname: `/contributions/details` }} 
                  style={{ textDecoration: "none" }}>
              <Paper className={scss.row}>
                <Grid container direction={panelDirection} spacing={8} alignContent="center" justify="center">
                  <Grid item sm={4} xs={11} md={1} lg={1}>
                    <img src={logoImage} alt="logo image"  className={scss.logo}/>
                  </Grid>
                  <Grid item sm={4} xs={11} md={2} lg={2}>
                    <br/>
                    <br/>
                    <Typography gutterBottom  alignCenter variant="title" className={scss.title}>
                      {row.tokenName}
                    </Typography>
                  </Grid>
                  <Grid item sm={4} md={4} className={scss.sm}>
                    <Typography gutterBottom>
                      Total Contribution:
                    </Typography>
                    <br/>
                    <Typography className={scss.total}>
                      {row.totalContribution}
                    </Typography>
                  </Grid>
                  <Grid item sm={12} xs={11} md={7} lg={7} className={scss.line}>
                    <Typography>
                      Progress:
                    </Typography>
                    <ProjectStatesWidget className={scss.project} />
                  </Grid>
                  <Grid item xs={11} md={2} lg={2} className={scss["xs-md-lg"]}>
                    <Typography gutterBottom>
                      Total Contribution:
                    </Typography>
                    <br/>
                    <Typography className={scss.total}>
                      {row.totalContribution}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
              </Link>
            </Grid>
          )}
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
