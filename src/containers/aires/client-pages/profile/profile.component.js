import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import themeStyles from './profile.theme.style';
import scss from './profile.module.scss';

import ProfileTabs from './components/profile-tabs.component';

// Auth and DB imports
import withAuthorization from '../../../authentication/withAuthorization';
import AuthUserContext from '../../../authentication/AuthUserContext';
import { fs, auth } from '../../../../firebase';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    /**
      Tried manually binding checkIfEnabled to attempt to fix inability to pass props
    **/
    this.checkIfEnabled.bind(this);

    this.state = {
      userInfo: null,
      isEnabled: true,
      snackbarOpen: false,
      snackbarMessage: ''
    }
  }

  onSnackbarOpen = () => {
    this.setState({ snackbarOpen: true });
  }

  onSnackbarClose = () => {
    this.setState({ snackbarOpen: false });
  }

  // We need all required fields to NOT be empty for the button to be enabled.
  checkIfEnabled = (name, lastname, email) => {
    if (name && lastname && email)
    {
      this.setState({isEnabled: true});
    }
    else
    {
      this.setState({isEnabled: false})
    }
  }

  componentWillMount() {
    fs.doGetUser(auth.getUser().uid).then(doc =>
      this.setState({userInfo: doc.data()})
    )
  }

  render() {
    const { classes } = this.props;
    const { isEnabled } = this.state;

    const snackbar = (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={3000}
          onClose={this.onSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Settings Updated</span>}
        />
      );

      return (
        /**
          Using React's Context API to pull authUser info from Firebase
        **/
        <AuthUserContext.Consumer>
          {authUser =>

            <Grid
              container
              direction="row"
              spacing={0}
              justify="center"
              alignItems="center"
              className={classNames(
                scss['portal-profile'],
                classes.background
              )}
            >
              <Grid item sm={10} xs={12} className={scss.panel}>
                <Grid direction='column' container spacing={16}>
                  <Grid
                    item
                    xs={12}
                  >
                    <Grid
                      container
                      direction='row'
                      spacing={0}
                      justify="center"
                      alignItems="center"
                    >
                      <Grid
                        item
                        xs={12}
                      >
                        <div className={scss['portal-profile__header']}>
                          <img alt="avatar" src="assets/images/avatars/male/16.jpg" className={scss['portal-profile__header-avatar']} />
                          <div>
                              <Typography variant="headline" gutterBottom>
                                Profile / {authUser.email}
                              </Typography>
                            <Typography variant="subheading" gutterBottom>
                              Edit your perfonal information, change your password and set your privacy settings here.
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
                    <div className={scss['portal-profile__content']}>
                      <Card className={scss.card}>
                        <CardContent className={scss['card-content']}>
                          <Grid container>
                            /**
                              This is where I am attempting to pass props to the child component
                            **/
                            {this.state.userInfo ?
                              <ProfileTabs isEnabled={this.checkIfEnabled} userInfo={this.state.userInfo} />
                              :
                              null}
                          </Grid>
                        </CardContent>
                        <CardActions className={scss['card-actions']}>
                          <Button disabled={!isEnabled} variant="raised" color="secondary" onClick={() => this.onSnackbarOpen()}>
                            Update Settings
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {snackbar}
            </Grid>
          }
        </AuthUserContext.Consumer>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

/**
  Setting a custom condition to determine if this page should be accessible to the current user
**/
const authCondition = (authUser) => !!authUser;

export default compose(withAuthorization(authCondition), withWidth(), withStyles(themeStyles, { withTheme: true }))(Profile);
