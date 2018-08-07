import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { launchICO } from '../../../../firebase';

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

const INIT_STATE = {
  icoName: 'demo',
  startDate: '',
  endDate: '',
  founderName: '',
  companyName: '',
  countryOfOrigin: '',
};

class LaunchICO extends React.Component {

  state = {
    ...INIT_STATE
  };

  onSubmit = (event) => {
    launchICO.getData();

    event.preventDefault();
  }

render() {

  const {
    classes,
    width
  } = this.props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
<Grid
container
spacing = {0}
>
<Grid
  item
  sm={6}
  xs={12}
>
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
            sm={9}
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
                {/*<Button fullWidth onClick={() => fs.doSetData({name: "LiteCoin", ticker: "LTC"})} color="secondary" variant="raised">Launch ICO</Button>*/}
                <Button fullWidth onClick={event => this.onSubmit(event)} color="secondary" variant="raised">Launch ICO</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
</Grid>



    <Grid
      item
      sm={6}
      xs={12}
    >
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
            sm={9}
            xs={12}
          >
            <Card className={classNames(scss.card, classes['primary-card'])}>
              <CardContent className={scss['launch-content']}>
                <img src={logoImage} className={scss['launch-logo']} alt="logo" />
                <br/>
                <Typography gutterBottom>The ICO information that you have entered will be displayed here</Typography>
                <br/>
                <Grid>
                <TextField
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                fullWidth
                label="ICO Name"
                value={this.state.icoName}
                />
                </Grid>
                <br/>

                <Grid>
                <TextField
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                fullWidth
                label="Start Date"
                value={this.state.startDate}
                />
                </Grid>
                <br/>

                <Grid>
                <TextField
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                fullWidth
                label="End Date"
                value={this.state.endDate}
                />
                </Grid>
                <br/>

                <Grid>
                <TextField
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                fullWidth
                label="Founder Name"
                value={this.state.founderName}
                />
                </Grid>
                <br/>

                <Grid>
                <TextField
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                fullWidth
                label="Company Name"
                value={this.state.companyName}
                />
                </Grid>
                <br/>

                <Grid>
                <TextField
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                fullWidth
                label="Country of Origin"
                value={this.state.countryOfOrigin}
                />
                </Grid>
                <br/>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
</Grid>


    </Grid>
  );
};
};

LaunchICO.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(LaunchICO);
