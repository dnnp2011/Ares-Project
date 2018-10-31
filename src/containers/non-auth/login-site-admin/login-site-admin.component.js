import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";

import themeStyles from "./login-site-admin.theme.style";
import scss from "./login-site-admin.module.scss";

import logoImage from "../../../assets/images/portal-logo.png";

const Login = (props) => {
  const {
    classes
  } = props;

  return (
    <Grid
      container
      direction="row"
      spacing={0}
      justify="center"
      alignItems="center"
      className={classes.background}
    >
      <Grid item sm={6} xs={12} className={scss.panel}>
        <Grid direction="column" container spacing={0}>
          <Grid
            item
            xs={12}
          >
            <Card className={classNames(scss.card, classes["primary-card"])}>
              <CardContent className={scss["login-content"]}>
                <img src={logoImage} className={scss["login-logo"]} alt="logo"/>
                <Typography variant="headline" component="h2" gutterBottom>
                  Ares Dashboard
                </Typography>
                <Typography component="p" gutterBottom>
                  Welcome to Ares Dashboard. Please use the form below to login as a site administrator.
                </Typography>
              </CardContent>
            </Card>
            <Card className={scss.card}>
              <CardContent>
                <TextField
                  label="Email Address"
                  fullWidth
                />
                <TextField
                  label="Password"
                  fullWidth
                  margin="normal"
                  type="password"
                />
              </CardContent>
              <CardActions className={scss["login-actions"]}>
                <Button href="/login-site-admin" color="primary" variant="raised">LOGIN</Button>
                <Button href="/forgot-password">FORGOT PASSWORD</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Login);
