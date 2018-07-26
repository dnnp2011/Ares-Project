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

import logoImage from '../../../../assets/images/ares-logo.png';

import NumberInput from './components/NumberInput/NumberInput';

const LaunchICO = (props) => {
  const {
    classes,
    width
  } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <Grid
      // container
      // justify="center"
      // alignItems="center"
      // className={classes.background}
      // style={{display: "block"}}
      container
      direction="row"
      spacing={0}
      justify="center"
      alignItems="center"
      className={classes.background}
    >
      <Grid item sm={10} xs={12} className='panel'>
        <Grid direction={panelDirection} container spacing={100}>
          <Grid
            item
            sm={6}
            xs={10}
          >
            <Card className={scss.card}>
              <CardContent className={scss['launch-content']}>
                <img src={logoImage} className={scss['launch-logo']} alt="logo" />
                <br/>
                <br/>
                <Typography variant="headline" component="h1" gutterBottom>
                  Launch ICO
                </Typography>
                <br/>
                <Typography component="p" gutterBottom>Want money? Launch your ICO now!</Typography>
                <br/>
                <Typography component="p" gutterBottom>
                  Already have an account? Just fill out the form to the right with the correct info, upload a whitepaper, and add a description of your ICO.
                </Typography>
                <br/>
                <Typography component="p" gutterBottom>
                  Not a part of the Ares community? <a href="/register">Sign Up</a> here.
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid
            item
            sm={6}
            xs={10}
          >
            <Card className={classNames(scss.card, classes['primary-card'])}>
              <CardContent className={scss['launch-content']}>
                <br/>
                <Typography gutterBottom>Enter your ICO information here to make your ICO available to investors</Typography>

                  <Grid>
                    <TextField
                      label="User Name"
                      type="text"
                      fullWidth
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      label="Password"
                      type="password"
                      fullWidth
                    />
                  </Grid>
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
                  <Grid>
                    <TextField
                      label="Company Name"
                      type="text"
                      fullWidth
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      label="Country of Origin"
                      type="dropdown"
                      fullWidth
                    />
                  </Grid>
                  <br/>
                  <Grid>
                    <TextField
                      label="ICO Description"
                      multiline
                      rows="4"
                      className={classes.textField}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                  <Grid>
                <Typography gutterBottom>Please upload your whitepaper in here</Typography>
                <br/>
                  <Button onClick={() =>this.fileInput.click()} variant="raised" color="secondary" className={classes.button}>
                    Upload Whitepaper
                  </Button>
                  <input
                    style={{display:'none'}}
                    ref={fileInput => this.fileInput =fileInput}
                    label="Supporting Document"
                    type="file"
                    fullWidth
                  />
                </Grid>
                {/* <Grid>
                  <DropdownInput/>
                </Grid> */}
                <NumberInput />
              </CardContent>
              <CardActions>
                <Button fullWidth href="/register" color="secondary" variant="raised">Launch ICO</Button>
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
