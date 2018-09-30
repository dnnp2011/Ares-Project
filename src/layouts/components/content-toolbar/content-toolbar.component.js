import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAuthentication from '../../../containers/authentication/withAuthentication';
import AuthUserContext from '../../../containers/authentication/AuthUserContext';
import { withStyles } from '@material-ui/core/styles';
import { auth } from '../../../firebase';

// Material components
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import withTheme from '@material-ui/core/styles/withTheme';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';

import FontAwesome from 'react-fontawesome';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

//blockchain wallet connection
import Web3 from 'web3'

// Actions
import { updateLayout, toggleSidenav, toggleNotifications } from '../../../actions/layout.actions';
import { changeTheme, changeThemeDirection } from '../../../actions/theme.actions';

// Menu Items
import { menuItems } from '../../../config';

// Themes
import themes from '../../../themes';

function setTitle(items, currentPath) {
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].href && items[i].href === currentPath) {
      return items[i].title;
    }

    if (items[i].children) {
      const result = setTitle(items[i].children, currentPath);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

class ContentToolbar extends React.Component {
  state = {
    layoutMenuEl: null,
    layoutMenuOpen: false,
    themeMenuEl: null,
    themeMenuOpen: false,
    connected: false,
    authUser: null,
  };

   componentDidMount() {
        // if(typeof web3 !== 'undefined')
        // {
        //   this.web3 = new Web3(window.web3.currentProvider);

        //   this.setState({connected: true}, console.log('connected!!!'))
        // }
        // else
        // {
        //   // this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

        //   alert('YOU DO NOT HAVE METAMASK INSTALLED, YOU WILL NOT HAVE ANY ACCESS TO WALLET FEATURES')
        // }
    }

  handleOpenLayoutClick = (event) => {
    this.setState({ layoutMenuEl: event.currentTarget, layoutMenuOpen: true });
  };

  handleSelectLayoutClick = (event, layout) => {
    this.props.updateLayout(layout);
    this.setState({ layoutMenuEl: null, layoutMenuOpen: false });
  }

  handleCloseLayoutClick = () => {
    this.setState({ layoutMenuEl: null, layoutMenuOpen: false });
  };

  handleOpenThemeClick = (event) => {
    this.setState({ themeMenuEl: event.currentTarget, themeMenuOpen: true });
  };

  handleSelectThemeClick = (event, selectedTheme) => {
    this.props.changeTheme(selectedTheme.theme);
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  }

  handleCloseThemeClick = () => {
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  };

  handleDirectionChange = (event, checked) => {
    this.props.changeThemeDirection({
      direction: checked === true ? 'rtl' : 'ltr'
    });
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  }

  handleOpenProfile = () => {
    const { history } = this.props;
    history.push('/profile:user'); // TODO: Fetch user name from profile and append to url
  };

  handleSignOut = () => {
    auth.doSignOut();
    const { history } = this.props;
    <AuthUserContext.Consumer>
      {
        authUser =>
        !authUser ?
          // Logout successful, route to non-auth login
          history.push('/login')
        :
          // Lout NOT successful, do nothing, or give error message
          alert("Logout could not be correctly processed")
      }
    </AuthUserContext.Consumer>
  }


  render() {
    const { history } = this.props;
    const {
      width,
      layout,
      location,
      theme
    } = this.props;

    const showBurgerMenu = isWidthDown('sm', width) || !layout.sidenavOpen;

    return (
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open sidenav"
          style={{ display: showBurgerMenu ? 'block' : 'none' }}
          onClick={this.props.toggleSidenav}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap>
          {setTitle(menuItems, location.pathname) || 'Route Not Found'}
        </Typography>
        <span className="portal-flex" />
        <IconButton
          color="inherit"
          aria-label="change theme"
          onClick={this.handleOpenThemeClick}
        >
          <InvertColorsIcon />
        </IconButton>
        <Menu
          id="theme-menu"
          anchorEl={this.state.themeMenuEl}
          open={this.state.themeMenuOpen}
          onClose={this.handleCloseThemeClick}
        >
          {themes.map(themeOption => (
            <MenuItem key={themeOption.id} onClick={event => this.handleSelectThemeClick(event, themeOption)}>
              {themeOption.name}
            </MenuItem>
          ))}
        </Menu>


        <IconButton
          color="inherit"
          aria-label="change layout"
          onClick={this.handleOpenLayoutClick}
        >
          <AppsIcon />
        </IconButton>
        <Menu
          id="layout-menu"
          anchorEl={this.state.layoutMenuEl}
          open={this.state.layoutMenuOpen}
          onClose={this.handleCloseLayoutClick}
        >
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'classic')}>Classic</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'toolbar')}>Toolbar</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'compact')}>Compact</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'boxed')}>Boxed</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'funky')}>Funky</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'tabbed')}>Tabbed</MenuItem>
          <MenuItem onClick={() => this.handleDirectionChange}>
            <FormGroup>
              <FormControlLabel
                control={<Switch
                  checked={theme.direction === 'rtl'}
                  onChange={this.handleDirectionChange}
                  aria-label="Theme Direction"
                />}
                label="RTL Direction"
              />
            </FormGroup>
          </MenuItem>
        </Menu>
        <IconButton
          color="inherit"
          aria-label="open notifications"
          onClick={this.props.toggleNotifications}
        >
          <NotificationsIcon />
        </IconButton>

        <AuthUserContext.Consumer>
          { authUser =>
             (authUser
            ? (
              <div>
                <IconButton
                  color="inherit"
                  aria-label="User Profile"
                  onClick={this.handleOpenProfile}
                  >
                  <PersonIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="Logout"
                  onClick={this.handleSignOut}
								>
									{/*Explicitly size font awesome fonts to be 24px or they'll shrink on the landing page*/}
									<FontAwesome name="sign-out" style={{fontSize: '24px'}}/>
							</IconButton>
              </div>
            )
            :
            null
          )}
        </AuthUserContext.Consumer>

        {this.state.connected?
           <h3 title="MetaMask detected and live" style={{fontFamily: 'Barlow', color:'yellow', fontWeight:'bold'}}>METAMASK</h3>
            :
           <h3 title="MetaMask not detected -- do you have it installed?" style={{fontFamily: 'Barlow', color:'black', fontWeight:'bold'}}>METAMASK</h3>
        }

      </Toolbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout: {
      sidenavOpen: state.layout.sidenavOpen
    }
  };
}

ContentToolbar.propTypes = {
  width: PropTypes.string.isRequired,
  layout: PropTypes.shape({
    sidenavOpen: PropTypes.bool
  }).isRequired,
  theme: PropTypes.shape({}).isRequired,
  toggleSidenav: PropTypes.func.isRequired,
  toggleNotifications: PropTypes.func.isRequired,
  updateLayout: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeThemeDirection: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired
};

export default compose(
  withRouter,
  withWidth(),
  withTheme(),
  connect(mapStateToProps, {
    toggleSidenav,
    toggleNotifications,
    updateLayout,
    changeTheme,
    changeThemeDirection
  })
)(ContentToolbar);
