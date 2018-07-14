import React from 'react';
import { auth } from '../../firebase';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';

const handleSignOut = (props) => {
  auth.doSignOut();
  const { history } = props;
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

export default withRouter(handleSignOut);
