import React from 'react';

import themeStyles from './ico-detail.theme.style';
import scss from './ico-detail.module.scss';

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
