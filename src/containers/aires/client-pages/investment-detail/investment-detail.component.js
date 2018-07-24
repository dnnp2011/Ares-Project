import React from 'react';

import themeStyles from './investment-detail.theme.style';
import scss from './investment-detail.module.scss';
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
