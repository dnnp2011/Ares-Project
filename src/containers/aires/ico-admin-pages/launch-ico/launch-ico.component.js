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

import themeStyles from './launch-ico.theme.style';
import scss from './launch-ico.module.scss';

import logoImage from '../../../../assets/images/portal-logo.png';
import Divider from "../../../elements/divider/divider.component";

import { fs } from '../../../../firebase';

const LaunchICO = (props) => {
  const {
    classes,
    width
  } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <Grid
      container
      direction="row"
      spacing={0}
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
              <CardContent className={scss['launch-content']}>
                <img src={logoImage} className={scss['launch-logo']} alt="logo" />
                <br/>
                <Typography gutterBottom>Enter your ICO information here to make your ICO available to investors</Typography>

                  <Grid>
                    <TextField
                      label="ICO Name"
                      type="text"
                      fullWidth
                    />
                  </Grid>
                  <br/>
                  <Grid>
                    <TextField
                      label="Password"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <br/>
                  <Grid>
                    <TextField
                      label="Repeat Password"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <br/>
                  <Grid>
                    <Typography gutterBottom>Start Date</Typography>
                    <TextField
                      type="date"
                      fullwidth
                    />

                    <Typography gutterBottom>End Date</Typography>
                    <TextField
                      type="date"
                      fullwidth
                    />
                  </Grid>
                  <br/>
                  <Grid>
                    <TextField
                      label="Founder Name"
                      type="text"
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
                      label="Country of Origin"
                      type="dropdown"
                      fullWidth
                    />
                  </Grid>

              </CardContent>
              <CardActions>
                <Button fullWidth onClick={() => fs.doSetData({name: "LiteCoin", ticker: "LTC"})} color="secondary" variant="raised">Launch ICO</Button>
                
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

LaunchICO.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(LaunchICO);
