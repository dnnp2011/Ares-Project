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

import { fs } from '../../../../firebase';

const INIT_STATE = {
  icoName: '',
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

  onSubmit() {
    console.log(`Form Submitted, State: ${this.state.icoName}`);
    fs.doSetIcoData(this.state.icoName, this.state.startDate, this.state.endDate, this.state.founderName, this.state.companyName, this.state.countryOfOrigin);
  }

  onChange(field, value) {
    this.setState({
      [field]: value
    });
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
                  <Typography variant="headline" component="h2" gutterBottom>
                  Launch ICO
                  </Typography>
                  <Typography component="p" gutterBottom>
                  Enter your ICO information here to make your ICO available to investors
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
            >
              <Card className={scss.card}>
                <CardContent>
                  <Grid>
                    <TextField
                      label="ICO Name"
                      value={this.state.icoName}
                      onChange={e => this.onChange("icoName", e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <br />
                  <Grid>
                    <TextField
                      type="date"
                      label="Start Date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={this.state.startDate}
                      onChange={e => this.onChange("startDate", e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <br />
                  <Grid>
                    <TextField
                      type="date"
                      label="End Date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={this.state.endDate}
                      onChange={e => this.onChange("endDate", e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <br />
                  <Grid>
                    <TextField
                      label="Founder Name"
                      value={this.state.founderName}
                      onChange={e => this.onChange("founderName", e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <br />
                  <Grid>
                    <TextField
                      label="Company Name"
                      value={this.state.companyName}
                      onChange={e => this.onChange("companyName", e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <br />
                  <Grid>
                    <TextField
                      label="Country of Origin"
                      value={this.state.countryOfOrigin}
                      onChange={e => this.onChange("countryOfOrigin", e.target.value)}
                      fullWidth
                    />
                  </Grid>

                </CardContent>
                <CardActions>
                  <Button fullWidth onClick={() => this.onSubmit()} color="secondary" variant="raised">Launch ICO</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    );
  }
}

LaunchICO.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(LaunchICO);
