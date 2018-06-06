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

import themeStyles from './collectKYC.theme.style';
import scss from './collectKYC.module.scss';

import logoImage from '../../../../assets/images/portal-logo.png';
import Divider from "../../../elements/divider/divider.component";

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

  const icos = [
    {
      value: 'SolarCity',
      label: '$'
    },
    {
      value: 'Bitcoin',
      label: '€'
    },
    {
      value: 'Ethereum',
      label: '฿'
    },
  ];

  // handleChange = name => (event) => {
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.background}
    >
      <Grid item sm={10} xs={12} className={scss.panel}>
        <Grid direction={panelDirection} container spacing={0}>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <Card className={classNames(scss.card, classes['primary-card'])}>
              <CardContent className={scss['collectkyc-content']}>
                <img src={logoImage} className={scss['collectkyc-logo']} alt="logo" />
                <br/>
                <Typography gutterBottom>Depending on your country of origin, federal regulations require we collect certain information about investors. This is called KYC (Know Your Client).</Typography>

                <Grid>
                  <TextField
                    label="First Name"
                    type="text"
                    fullwidth
                  />
                  <TextField
                    label="Last Name"
                    type="text"
                    fullwidth
                  />
                </Grid>
                <br/>
                <Grid>
                  <TextField
                    label="Email Address"
                    type="email"
                    email
                    fullWidth
                  />
                </Grid>
                <br/>
                <Grid>
                  <TextField
                    label="Phone Number"
                    type="phone number"
                    phone
                    fullWidth
                  />
                </Grid>
                <br/>
                <Grid>
                  <TextField
                    label="Company Name"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <br/>
                <Grid>
                  <TextField
                    label="Country of Residence"
                    type="dropdown"
                    fullWidth
                  />
                </Grid>
                <br/>
                <Grid>
                  <TextField
                    label="Select ICO"
                    type="dropdown"
                    fullWidth
                  />
                </Grid>
                <Grid>
                  <TextField
                    id="select-ico"
                    select
                    label="Select ICO"
                    className={classes.icos}
                    value={icos}
                    // onChange={this.handleChange('ico')}
                    SelectProps={{
                      native: true,
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    helperText="Select the desired ICO"
                    margin="normal"
                    fullwidth
                  />
                </Grid>
              </CardContent>
              <CardActions>
                <Button fullWidth href="/register" color="secondary" variant="raised">Submit KYC</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CollectKYC.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(CollectKYC);
