import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import FormHelperText from '@material-ui/core/FormHelperText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonPin from '@material-ui/icons/PersonPin';
import LocationOn from '@material-ui/icons/LocationOn';
import Group from '@material-ui/icons/Group';
import Share from '@material-ui/icons/Share';
import Notifications from '@material-ui/icons/Notifications';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import Security from '@material-ui/icons/Security';
import Backup from '@material-ui/icons/Backup';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { db, auth } from '../../../../../firebase';
import AuthUserContext from '../../../../authentication/AuthUserContext';
import withAuthorization from '../../../../authentication/withAuthorization';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  tabLabel: {
    maxWidth: '100%',
    textTransform: 'capitalize'
  },
  toggleContainer: {
    flexDirection: 'row',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center'
  }
});

class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Add additional userInfo to Firestore and profile state including URL for custom profile pic creation

    const { email, firstName, lastName, description, country, website} = props;
    this.state = {
      value: 0,
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      website: website,
      description: description,
      profilePicUrl: '',
      password: '',
      newpassword: '',
      confirmpassword: '',
      updateValid: false,
    };
  }

  validate(firstName, lastName, email) {
    // true means invalid, so our conditions got reversed
    return {
      firstName: firstName.length === 0,
      lastName: lastName.length === 0,
      email: email.length === 0
    };
  }
  validatePassword(password, newPassword, confirmPassword) {
    // true means invalid, so our conditions got reversed
    return {
      password: password.length === 0,
      newPassword: newPassword.length === 0,
      confirmPassword: confirmPassword.length === 0
    };
  }
  handleChange = inputName => (event) => {
    if (!this.state.updateValid) {
      this.setState({
        updateValid: this.props.updateValid(true)
      });
    }

    this.setState({
      [inputName]: event.target.value,
    }, () => {
      // Using the callback to make sure that the child state has been updated before updating the parent state
      this.props.isEnabled(this.state.firstName, this.state.lastName, this.state.email);
    });

    const { firstName, lastName, email, country, description } = this.state;
    this.props.updateInfo(firstName != null ? firstName : '', lastName != null ? lastName : '', email != null ? email : '', country != null ? country : '', description != null ? description : '');
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const {
      firstName, lastName, email, country, website, description, password, newpassword, confirmpassword
    } = this.state;
    const errors = this.validate(firstName, lastName, email);
    const pwdErrors = this.validatePassword(password, newpassword, confirmpassword);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="secondary"
            fullWidth
          >
            <Tab className={classes.tabLabel} label="Profile" icon={<AccountCircle />} />
            <Tab className={classes.tabLabel} label="Change Password" icon={<Security />} />
            <Tab className={classes.tabLabel} label="Notifications" icon={<Notifications />} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <form className={classes.container} autoComplete="off">
              <Grid container>
                <Grid item sm={6} xs={12}>
                  <TextField
                    id="firstName"
                    label="Enter your first firstName"
                    className={classes.textField}
                    error={errors.firstName}
                    value={firstName}
                    onChange={this.handleChange('firstName', this.props.isEnabled)}
                    fullWidth
                    required
                    margin="normal"
                  />
                  { errors.firstName &&
                    <FormHelperText error>This is a required field</FormHelperText>
                  }
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    id="lastName"
                    label="Enter your last firstName"
                    className={classes.textField}
                    error={errors.lastName}
                    value={lastName}
                    onChange={this.handleChange('lastName')}
                    fullWidth
                    required
                    margin="normal"
                  />
                  { errors.lastName &&
                    <FormHelperText error>We also need your last firstName</FormHelperText>
                  }
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Enter your email address"
                    className={classes.textField}
                    error={errors.email}
                    value={email}
                    onChange={this.handleChange('email')}
                    fullWidth
                    required
                    margin="normal"
                  />
                  { errors.email &&
                    <FormHelperText error>Please enter your email</FormHelperText>
                  }
                </Grid>
                <Grid item xs={12}>
                  {/* TODO: Add country dropdown / autocompete */}
                  <TextField
                    id="country"
                    label="Enter your country"
                    className={classes.textField}
                    value={country}
                    onChange={this.handleChange('country')}
                    defaultValue=""
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="website"
                    label="Website"
                    className={classes.textField}
                    value={website}
                    onChange={this.handleChange('website')}
                    defaultValue=""
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    label="Describe yourself in 255 characters"
                    className={classes.textField}
                    value={description}
                    onChange={this.handleChange('description')}
                    defaultValue=""
                    fullWidth
                    multiline
                    rowsMax="4"
                    rows="4"
                    margin="normal"
                  />
                </Grid>
              </Grid>
            </form>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <form className={classes.container} autoComplete="off">
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    label="Current password"
                    className={classes.textField}
                    error={pwdErrors.password}
                    value={password}
                    type="password"
                    onChange={this.handleChange('password')}
                    fullWidth
                    required
                    margin="normal"
                  />
                  { pwdErrors.password &&
                    <FormHelperText error>This is a required field</FormHelperText>
                  }
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="newpassword"
                    label="New password"
                    className={classes.textField}
                    error={pwdErrors.newPassword}
                    value={newpassword}
                    type="password"
                    onChange={this.handleChange('newpassword')}
                    fullWidth
                    required
                    margin="normal"
                  />
                  { pwdErrors.newPassword &&
                    <FormHelperText error>This is a required field</FormHelperText>
                  }
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="confirmpassword"
                    label="Confirm password"
                    className={classes.textField}
                    error={pwdErrors.confirmPassword}
                    value={confirmpassword}
                    type="password"
                    onChange={this.handleChange('confirmpassword')}
                    fullWidth
                    required
                    margin="normal"
                  />
                  { pwdErrors.confirmPassword &&
                    <FormHelperText error>This is a required field</FormHelperText>
                  }
                </Grid>
              </Grid>
            </form>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid
              container
              direction="row"
            >
              <Grid item sm={6} xs={12}>
                <div className={classes.toggleContainer}>
                  <LocationOn color="secondary" />
                  <Switch />
                  <Typography component="p">Show my location</Typography>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={classes.toggleContainer}>
                  <PersonPin color="secondary" />
                  <Switch checked="true" />
                  <Typography component="p">Show my avatar</Typography>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={classes.toggleContainer}>
                  <Group color="secondary" />
                  <Switch checked="true" />
                  <Typography component="p">Show my connections</Typography>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={classes.toggleContainer}>
                  <Share color="secondary" />
                  <Switch checked="true" />
                  <Typography component="p">Show social links</Typography>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={classes.toggleContainer}>
                  <NotificationsActive color="secondary" />
                  <Switch />
                  <Typography component="p">Send Notifications</Typography>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={classes.toggleContainer}>
                  <Backup color="secondary" />
                  <Switch />
                  <Typography component="p">Allow cloud backups</Typography>
                </div>
              </Grid>
            </Grid>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition), withStyles(styles, { withTheme: true }))(ProfileTabs);
