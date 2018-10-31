import React from "react";

import themeStyles from "./new-fund-source.theme.style";
import scss from "./new-fund-source.module.scss";
import { withStyles } from "@material-ui/core/styles";

const Forgot = (props) => {
  const {
    classes
  } = props;

  return (
    <div>
      hello
      //TODO: Complete this page or integrate the functionality with another page
    </div>
  );
};
/*
Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};
*/

export default withStyles(themeStyles, { withTheme: true })(Forgot);
