import React from 'react';

import themeStyles from './ico-list-item.theme.style';
import scss from './ico-list-item.module.scss';
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
