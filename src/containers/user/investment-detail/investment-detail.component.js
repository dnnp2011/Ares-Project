import React from "react";

import themeStyles from "./investment-detail.theme.style";
import { withStyles } from "@material-ui/core/styles";

const Forgot = (props) => {
  const {
    classes
  } = props;

  return (
    <div>
      //TODO: Complete this page or integrate functionality elsewhere
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
