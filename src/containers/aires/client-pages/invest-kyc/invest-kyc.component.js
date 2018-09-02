import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';

import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

import themeStyles from './invest-kyc.theme.style';
import scss from './invest-kyc.module.scss';

import logoImage from '../../../../assets/images/portal-logo.png';
import Divider from "../../../elements/divider/divider.component";

import Dropdown from "./components/DropdownList/DropdownList";
import NumberInput from './components/NumberInput/NumberInput';
import DropdownInput from './components/DropdownInput/DropdownInput';

const CollectKYC = (props) => {
  const {
    classes,
    width
  } = props;

  // state = {
  //   ico: 'SolarCity',
  // };

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';
  //
  // const icos = [
  //   {
  //     value: 'SolarCity',
  //     label: '$'
  //   },
  //   {
  //     value: 'Bitcoin',
  //     label: '€'
  //   },
  //   {
  //     value: 'Ethereum',
  //     label: '฿'
  //   },
  // ];

  // handleChange = name => (event) => {
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };

  return (
    <div className={classes.background}>
      <Grid
        container
        spacing={16}
        justify="center"
        alignItems="center"
        className={scss.container}
      >
        <Grid item sm={7} xs={12} className={scss.panel}>
          <Card className={classNames(scss.card, classes['primary-card'])}>

            <CardContent className={scss['collectkyc-content']}>
              <img src={logoImage} className={scss['collectkyc-logo']} alt="logo" />
              <Typography gutterBottom>
                Depending on your country of origin, federal regulations require we collect certain information about investors. This is called KYC (Know Your Client).
              </Typography>

              <TextField
                label="First Name"
                type="text"
                fullWidth
              />
              <TextField
                label="Last Name"
                type="text"
                fullWidth
              />
              <TextField
                label="Email Address"
                type="email"
                email
                fullWidth
              />
              <TextField
                label="Phone Number"
                type="phone number"
                phone
                fullWidth
              />
              <br/>
              <br/>

              <Typography>
                For Identity verification purposes, please upload a supporting document as passport,state ID or a utility bill
              </Typography>
              <br/>
              <Button onClick={() =>this.fileInput.click()} variant="raised" color="secondary" className={classes.button}>
                Upload Supporting Documents
              </Button>
              <input
                style={{display:'none'}}
                ref={fileInput => this.fileInput =fileInput}
                label="Supporting Document"
                type="file"
                fullWidth
              />
              <br/>

              <DropdownInput/><br/>
              <NumberInput /><br/>
              <Dropdown /><br/>
            </CardContent>
            <CardActions>
              <Button fullWidth href="/investorKYC/confirm" color="secondary" variant="raised">Submit KYC</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

CollectKYC.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(CollectKYC);
