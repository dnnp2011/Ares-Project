import React from 'react';

import themeStyles from './invest-confirm.theme.style';
import scss from './invest-confirm.module.scss';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const InvestConfirm = (props) => {
  const {
    classes,
    width,
  } = props;

  return (
    <Grid
      container
      direction="column"
      spacing={0}
      justify="center"
      alignItems="center"
      className={classes.background}
    >
      <Grid item sm={5} xs={12} className='panel'>
        <Card className={classNames(scss.card, classes['primary-card'])} >
          <CardContent className={scss['collectkyc-content']}>
            <Typography variant="headline" align="center" className={scss.title} gutterBottom>
              Investment Summary
            </Typography>
            <br/>
            <br/>
            <Grid container spacing={16}>
              <Grid item sm={12} xs={12}>
                <Typography className={scss.left} gutterBottom>
                  ICO:
                </Typography>
                <Typography className={scss.right} gutterBottom>
                  {props.name} Bitcoin
                </Typography>
              </Grid>

              <Grid item sm={12} xs={12}>
                <Typography className={scss.left} gutterBottom>
                  Token Amount:
                </Typography>
                <Typography className={scss.right} gutterBottom>
                  {props.tokens} 27
                </Typography>
              </Grid>

              <Grid item sm={12} xs={12}>
                <Typography className={scss.left} gutterBottom>
                  Fund Source:
                </Typography>
                <Typography className={scss.right} gutterBottom>
                  {props.fundSource} USD
                </Typography>
              </Grid>

              <Grid item sm={12} xs={12}>
                <Typography className={scss.left} gutterBottom>
                  Subtotal:
                </Typography>
                <Typography className={scss.right} gutterBottom>
                  {props.subtotal} $87.00
                </Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <br/>
                <hr className={classes['line-break']}/>
                <br/>
                <Typography className={scss.left} gutterBottom>
                  Total:
                </Typography>
                <Typography className={scss.right} gutterBottom>
                  {props.subtotal + props.fees}
                </Typography>
              </Grid>
            </Grid>

            <br/>
            {
              // props.state.kyc.first
            }
          </CardContent>
          <CardActions>
            <Button href="/browse-icos/invest/confirm" color="secondary" variant="raised" size="large" className={classes.button} fullWidth>Next</Button>
          </CardActions>
        </Card>

      </Grid>
    </Grid>

  );
};
/*
Forgot.propTypes = {
  classes: PropTypes.shape({}).isRequired
};
*/

export default withStyles(themeStyles, { withTheme: true })(InvestConfirm);
