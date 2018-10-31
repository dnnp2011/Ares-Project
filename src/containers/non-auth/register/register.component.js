import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import classNames from "classnames";

import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { auth, fs } from "../../../firebase/index";

import themeStyles from "./register.theme.style";
import scss from "./register.module.scss";

import logoImage from "../../../assets/images/portal-logo.png";

const INIT_STATE = {
  username: "",
  email: "",
  passOne: "",
  passTwo: "",
  firstName: "",
  lastName: "",
  error: null
};

const byPropKey = (propName, value) => () => ({
  [propName]: value
});

class Register extends React.Component {
  state = { ...INIT_STATE };

  onSubmit = (event) => {
    const {
      history
    } = this.props;
    const {
      email,
      firstName,
      lastName,
      passOne
    } = this.state;
    auth.doCreateUserWithEmailAndPassword(email, passOne)
      .then(authUser => {
        fs.doCreateUser(authUser.user.uid, email, firstName, lastName)
          .then(() => {
            this.setState(() => ({ ...INIT_STATE }));
            // Push to login page if registration successful
            history.push("/profile:user");
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
          });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  handleInput = (event) => {
    this.setState(byPropKey(event.target.name, event.target.value));
  };

  render() {
    const {
      classes,
      width,
      testProp
    } = this.props;

    const { email, passOne, passTwo, error, firstName, lastName } = this.state;
    const emailValid = email !== "" && email.includes("@");
    const passwordValid = passOne !== "" && passOne === passTwo;
    const firstNameValid = firstName !== "";
    const lastNameValid = lastName !== "";
    const isInvalid = !emailValid || !passwordValid || !firstNameValid || !lastNameValid;

    // Flip container to column on mobile screens.
    const panelDirection = width === "xs" ? "column" : "row";

    return (
      <Grid
        container
        direction="row"
        spacing={0}
        justify="center"
        alignItems="center"
        className={classes.background}
      >
        <Grid item sm={10} xs={12} className={scss.panel}>
          <Grid direction={panelDirection} container spacing={0}>
            <Grid
              item
              sm={6}
              xs={12}
            >
              <Card className={classNames(scss.card, classes["primary-card"])}>
                <CardContent className={scss["register-content"]}>
                  <img src={logoImage} className={scss["register-logo"]} alt="logo"/>
                  <Typography variant="headline" component="h2" gutterBottom>
                    Register
                  </Typography>
                  <Typography component="p" gutterBottom>
                    Creating an account with Ares Dashboard is easy! Simply fill out the form and click the register
                    button below.
                    {testProp ? testProp.toString() : "No Test Prop Found"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth href="/login" color="secondary" variant="raised">Im already registered</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
            >
              <Card className={scss.card}>
                <CardContent>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        label="Firstname"
                        fullWidth
                        value={firstName}
                        onChange={event => this.handleInput(event)}
                        valid={firstNameValid}
                        type='firstName'
                        name='firstName'
                        id='firstName'
                        placeholder='First Name'
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        label="Lastname"
                        fullWidth
                        value={lastName}
                        onChange={event => this.handleInput(event)}
                        valid={lastNameValid}
                        type='lastName'
                        name='lastName'
                        id='lastName'
                        placeholder='Last Name'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email Address"
                        fullWidth
                        value={email}
                        onChange={event => this.handleInput(event)}
                        valid={emailValid}
                        type='email'
                        name='email'
                        id='userEmail'
                        placeholder='Email'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Password"
                        fullWidth
                        value={passOne}
                        onChange={event => this.handleInput(event)}
                        valid={passwordValid}
                        type='password'
                        name='passOne'
                        id='passwordOne'
                        placeholder='Password'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Repeat Password"
                        fullWidth
                        value={passTwo}
                        onChange={event => this.handleInput(event)}
                        valid={passwordValid}
                        type='password'
                        name='passTwo'
                        id='passwordTwo'
                        placeholder='Repeat Password'
                      />
                      <br/>
                      {error && <p style={{ textAlign: "center" }}>{error.message}</p>}
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button disabled={isInvalid} fullWidth href="/register" color="primary" variant="raised"
                          onClick={event => this.onSubmit(event)}>Register</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

Register.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

const RegisterWithRouter = withRouter(Register);
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(RegisterWithRouter);
