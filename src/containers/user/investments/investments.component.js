import React from "react";

import themeStyles from "./investments.theme.style";
import scss from "./investments.module.scss";
import { withStyles } from "@material-ui/core/styles";

const Forgot = (props) => {
  const {
    classes
  } = props;

  return (
    <div>
      //TODO: Complete page or integrate functionality elsewhere
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
