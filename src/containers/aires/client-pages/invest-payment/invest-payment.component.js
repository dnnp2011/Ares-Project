import withWidth from '@material-ui/core/withWidth';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from "../../../elements/divider/divider.component";

import React from 'react';

import compose from 'recompose/compose';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import logoImage from '../../../../assets/images/portal-logo.png';
import DropdownInput from './components/DropdownInput/DropdownInput';
import NumberInput from './components/NumberInput/NumberInput';

import Card from '@material-ui/core/Card';
import themeStyles from './invest-payment.theme.style';
import scss from './invest-payment.module.scss';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


const Payment = (props) => {
  const {
    classes,
    width
  } = props;

  const panelDirection = width === 'xs' ? 'column' : 'row';

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
            <Card className={classNames(scss.card, classes['primary-card'])} >
              <CardContent className={scss['collectkyc-content']}>
                <img src={logoImage} className={scss['collectkyc-logo']} alt="logo" />
                <br/>
                <Grid>
                  <NumberInput />
                  <DropdownInput/>
                </Grid>
                <Grid container>
                  <Grid item sm={6} xs={12}>
                    <TextField
                    fullWidth
                    label="Amount in USD"
                    type="number"
                    inline
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                    fullWidth
                    label="Amount in {Payment method funds}"
                    type="number"
                    inline
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="Total charges including fees"
                      type="number"
                      email
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
              <Grid item sm={8} xs={12}></Grid>
                <Grid item sm={4} xs={12}>
                  <Button href="#" color="secondary" variant="raised" className={classes.button}>Next</Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};


Payment.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

function mapStateToProps (state) {
  return {
  }
};


function mapDispatchToProps(dispatch){
  return {

  }
};

export default compose(withStyles(themeStyles, { withTheme: true }), connect(mapStateToProps, mapDispatchToProps))(Payment);
