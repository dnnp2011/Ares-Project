import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

import themeStyles from "./register-complete.theme.style";
import scss from "./register-complete.module.scss";

import logoImage from "../../../assets/images/portal-logo.png";

const RegisterComplete = (props) => {
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
              <CardContent className={scss["register-complete-content"]}>
                <img src={logoImage} className={scss["register-complete-logo"]} alt="logo"/>
                <Typography variant="headline" component="h2" gutterBottom>
                  Registration Complete
                </Typography>
                <Typography component="p" gutterBottom>
                  You have successfully registered your account.
                </Typography>
              </CardContent>
            </Card>
            <Card className={scss.card}>
              <CardActions className={scss["register-complete-actions"]}>
                <Button fullWidth href="/login" color="secondary" variant="raised">Return To Login</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

RegisterComplete.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(RegisterComplete);
