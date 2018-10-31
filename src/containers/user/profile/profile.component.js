import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import classNames from "classnames";
import withWidth from "@material-ui/core/withWidth";
import Snackbar from "@material-ui/core/Snackbar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import themeStyles from "./profile.theme.style";
import scss from "./profile.module.scss";

import ProfileTabs from "./components/profile-tabs.component";
// Auth and DB imports
import withAuthorization from "../../authentication/withAuthorization";
import AuthUserContext from "../../authentication/AuthUserContext";
import { auth, fs } from "../../../firebase/index";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.checkIfEnabled.bind(this);

    this.state = {
      userInfo: [],
      isEnabled: true,
      snackbarOpen: false,
      snackbarMessage: "",
      updateValid: false
    };
  }

  componentWillMount() {
    console.log(`User: ${auth.getUser().uid}`);
    fs.doGetUser(auth.getUser().uid).then((doc) => {
      doc.exists ? console.log("Document Found!") : console.log("Unable to find document!");
      this.setState({
        userInfo: [doc.data().email, doc.data().firstName, doc.data().lastName, doc.data().description, doc.data().country, doc.data().website, doc.data().uid],
        newUserInfo: []
      });
    }).catch((err) => {
      console.log(`Error getting document: ${err}`);
    });
  }

  onUpdateSettings = () => {
    //  Send data to Firestore
    //  Get updated props to here to pass in function
    fs.doCreateCustomData([...Object.keys(this.state.newUserInfo)], [...Object.values(this.state.newUserInfo)], auth.getUser().uid);
    this.onSnackbarOpen();
  };

  onSnackbarOpen = () => {
    this.setState({ snackbarOpen: true });
  };

  onSnackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };

  onUpdateInfo = (firstName, lastName, email, country, description) => {
    this.setState({
      newUserInfo: {
        firstName,
        lastName,
        email,
        country,
        description
      }
    });
  };

  onUpdateValid = (value) => {
    this.setState({
      updateValid: value
    });
    return this.state.updateValid;
  };

  // We need all required fields to NOT be empty for the button to be enabled.
  checkIfEnabled = (name, lastname, email) => {
    if (name && lastname && email) {
      this.setState({ isEnabled: true });
    } else {
      this.setState({ isEnabled: false });
    }
  };

  render() {
    const { classes } = this.props;
    const { isEnabled, updateValid } = this.state;

    const snackbar = (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={this.state.snackbarOpen}
        autoHideDuration={3000}
        onClose={this.onSnackbarClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Settings Updated</span>}
      />
    );

    return (
      <AuthUserContext.Consumer>
        {authUser =>
          (<Grid
            container
            direction="row"
            spacing={0}
            justify="center"
            alignItems="center"
            className={classNames(
              scss["portal-profile"],
              classes.background
            )}
          >
            <Grid item sm={10} xs={12} className={scss.panel}>
              <Grid direction="column" container spacing={16}>
                <Grid
                  item
                  xs={12}
                >
                  <Grid
                    container
                    direction="row"
                    spacing={0}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <div className={scss["portal-profile__header"]}>
                        <img alt="avatar" src="../../.."
                             className={scss["portal-profile__header-avatar"]}/>
                        <div>
                          <Typography variant="headline" gutterBottom>
                            Profile / {this.state.userInfo[1]} {this.state.userInfo[2]}
                          </Typography>
                          <Typography variant="subheading" gutterBottom>
                            Edit your personal information, change your password and set your privacy settings here.
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <div className={scss["portal-profile__content"]}>
                    <Card className={scss.card}>
                      <CardContent className={scss["card-content"]}>
                        <Grid container>
                          {this.state.userInfo[0] ?
                            <ProfileTabs
                              isEnabled={this.checkIfEnabled}
                              email={this.state.userInfo[0]}
                              firstName={this.state.userInfo[1]}
                              lastName={this.state.userInfo[2]}
                              description={this.state.userInfo[3]}
                              country={this.state.userInfo[4]}
                              website={this.state.userInfo[5]}
                              uid={this.state.userInfo[6]}
                              updateValid={value => this.onUpdateValid(value)}
                              updateInfo={(firstName, lastName, email, country, description) => this.onUpdateInfo(firstName, lastName, email, country, description)}
                            />
                            :
                            null}
                          {/*{console.log(this.state.userInfo[0] ? "Found" : "Not Found")}*/}
                        </Grid>
                      </CardContent>
                      <CardActions className={scss["card-actions"]}>
                        <Button disabled={!updateValid || !isEnabled} variant="raised" color="secondary"
                                onClick={() => this.onUpdateSettings()}>
                          Update Settings
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            {snackbar}
          </Grid>)
        }
      </AuthUserContext.Consumer>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition), withWidth(), withStyles(themeStyles, { withTheme: true }))(Profile);
