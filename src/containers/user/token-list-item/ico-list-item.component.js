import React from "react";
import { Link } from "react-router-dom";
import themeStyles from "./ico-list-item.theme.style";
import scss from "./ico-list-item.module.scss";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import logoImage from "../../../assets/images/portal-logo.png";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import compose from "recompose/compose";

class Ico extends React.Component {

  render() {
    const {
      classes,
      width
    } = this.props;

    const { name, price, start, end, phase } = this.props[0];

    return (
      <Card className={scss.card}>
        <Link to={{ pathname: `/tokens/details`, name, price, start, end, phase }}
              style={{ textDecoration: "none" }}>
          <Typography className={scss.coin} variant="headline" gutterBottom>
            &nbsp;  {name}
            <img src={logoImage} className={scss.logo} alt="logo"/>
          </Typography>
          <CardContent>
            <br/>

            <Typography className={scss.center} variant="title">
              Price: ${price}
            </Typography>
            <br/>
            <br/>

            <div className={scss.parent}>

              <Typography className={scss.dates}>
                Start: {start} | End: {end}
                <br/>
              </Typography>
              <Typography className={scss.phase}>
                Phase: {phase}
              </Typography>

            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }
}

Ico.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};


export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Ico);

/*
this will list off given icos from ico-AsyncListExample
*/
