import React from 'react';//basic react package
import PropTypes from 'prop-types';//package
import rtl from 'jss-rtl';//package
import { create } from 'jss';//package
import { JssProvider } from 'react-jss';//package
import { withRouter } from 'react-router-dom';//package
import { connect } from 'react-redux';//package
import compose from 'recompose/compose';//package
import withAuthentication from './containers/authentication/withAuthentication';

import { MuiThemeProvider, createMuiTheme, createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import Routes from './routes';//page which contains the location in the project of components

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (document.body) {
      document.body.dir = nextProps.themeConfig.contentTheme.direction;
    }
  }

  render() {
    const childProps = {};
    const { themeConfig, layoutConfig, KYCConfig } = this.props;

    sessionStorage.setItem(
      'portalData',
      JSON.stringify({
        theme: {
          ...themeConfig
        },
        layout: {
          ...layoutConfig
        },
        kyc: {
          ...KYCConfig
        }
      })
    );

    const materialTheme = createMuiTheme(themeConfig.contentTheme);

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={materialTheme}>
          <Routes childProps={childProps} layout={layoutConfig} />
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeConfig: state.theme,
    layoutConfig: state.layout,
    KYCConfig: state.kyc
  };
}

App.propTypes = {
  themeConfig: PropTypes.shape({
    contentTheme: PropTypes.shape({
      direction: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  layoutConfig: PropTypes.shape({}).isRequired,
  KYCConfig: PropTypes.shape({}).isRequired
};

export default compose(
  withAuthentication,
  withRouter,
  connect(mapStateToProps)
)(App);
