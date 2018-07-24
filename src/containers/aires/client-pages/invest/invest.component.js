import React from 'react';

import themeStyles from './invest.theme.style';
import scss from './invest.module.scss';
import { withStyles } from '@material-ui/core/styles';

const Forgot = (props) => {
  const {
    classes
  } = props;

return (
<div>
hello
</div>
);
};
/*
Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};
*/

export default withStyles(themeStyles, { withTheme: true })(Forgot);
