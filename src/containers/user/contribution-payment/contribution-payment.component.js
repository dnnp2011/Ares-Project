import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import themeStyles from "./contribution-payment.theme.style";
import scss from "./contribution-payment.module.scss";
import { withStyles } from "@material-ui/core/styles";

const icos = [
  {
    value: "USD",
    label: "$ - USD"
  },
  {
    value: "Bitcoin",
    label: "฿ - Bitcoin"
  },
  {
    value: "Ethereum",
    label: "€ - Ethereum"
  }
];

class Payment extends React.Component {
  state = {
    tokens: 0,
    fundSource: "USD",
    totalCost: ""
  };

  getTotal = function(tokens, fundSource) {
    var source = "";
    var total = 0;
    switch (fundSource) {
      case "Bitcoin":
        source = "฿ ";
        total = tokens * 5;
        break;
      case "Ethereum":
        source = "€ ";
        total = tokens * 2;
        break;
      default:
        source = "$ ";
        total = tokens * 11.99;
        break;
    }
    ;
    console.log(source + total);
    return source + total;
  };

  handleChange = name => event => {
    console.log(event.target.value);
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const {
      classes,
      width,
      icoName
    } = this.props;

    const {
      tokens,
      fundSource
    } = this.state;

    const panelDirection = width === "xs" ? "column" : "row";

    return (
      <Grid
        container
        direction="column"
        spacing={0}
        justify="center"
        alignItems="center"
        className={classes.background}
      >
        <Grid item sm={8} xs={12} className='panel'>
          <Grid direction={panelDirection} container spacing={0}>
            <Grid item>
              <Card className={classNames(scss.card, classes["primary-card"])}>
                <CardContent className={scss["collectkyc-content"]}>
                  <Typography variant="headline" className={scss["ico-name"]} gutterBottom>Buying {icoName}</Typography>
                  {
                    // <img src={logoImage} className={scss['collectkyc-logo']} alt="logo" />
                  }
                  <br/>

                  <TextField
                    fullWidth
                    id="number-of-tokens"
                    label="Tokens to buy"
                    type="number"
                    defaultValue="0"
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={this.handleChange("tokens")}
                    margin="normal"
                  />

                  <TextField
                    id="fund-source"
                    select
                    label="Fund Source"
                    className={classes.textField}
                    value={this.state.fundSource}
                    onChange={this.handleChange("fundSource")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    helperText="Please select your payment method"
                    margin="normal"
                    fullWidth
                  >
                    {icos.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <br/>
                  <br/>

                  <Typography className={scss.total} gutterBottom>
                    Total Cost in Fund Source:
                  </Typography>
                  <Typography className={scss.total} gutterBottom>
                    {this.getTotal(tokens, fundSource)}
                  </Typography>
                  <br/>
                  {
                    // props.state.kyc.first
                  }
                </CardContent>
                <CardActions>
                  <Button href="/browse-icos/invest/confirm" color="secondary" variant="raised" size="large"
                          className={classes.button} fullWidth>Next</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};


Payment.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

// function mapStateToProps (reduxState) {
//   return {
//     state : reduxState
//   }
// };
//
//
// function mapDispatchToProps(dispatch){
//   return {
//
//   }
// };

// export default compose(withStyles(themeStyles, { withTheme: true }), connect(mapStateToProps, mapDispatchToProps))(Payment);

export default withStyles(themeStyles, { withTheme: true })(Payment);
