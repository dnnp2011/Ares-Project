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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';

import themeStyles from './invite-friend.theme.style';
import scss from './invite-friend.module.scss';

import logoImage from '../../../../assets/images/portal-logo.png';
import Divider from "../../../elements/divider/divider.component";

class InviteFriend extends React.Component {
  state = {
    ico: 'None',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      classes,
      width
    } = this.props;

    // Flip container to column on mobile screens.
    const panelDirection = width === 'xs' ? 'column' : 'row';

    return(
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
          <Grid item sm={6} xs={12}>
            <Card className={classNames(scss.card, classes['primary-card'])}>
              <CardContent className={scss['invite-friend-content']}>
                <img src={logoImage} className={scss['invite-friend-logo']} alt="logo" />
                <Typography variant="headline" component="h2" gutterBottom>
                  Invite a friend
								</Typography>
								{/*TODO: Improve the following message*/}
                <Typography component="p" gutterBottom>
                  Everything's better with friends! Tell a friend about our services here.
                </Typography>
                <br/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className={scss.card}>
              <CardContent>
                  <Grid>
                    <TextField
                      label="Friend Name"
                      type="text"
                      fullWidth
                    />
                  </Grid>
                  <br/>
                  <Grid>
                    <TextField
                      label="Friend Email"
                      type="text"
                      fullWidth
                    />
                  </Grid>
                  <br/>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="ico">ICO</InputLabel>
                  <Select
                    value={this.state.ico}
                    onChange={this.handleChange}
                    ico="ico"
                    renderValue={value => `${value}`}
                    input={<Input id="ico" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    // TODO: Populate with relevant ICOs
                    <MenuItem value="Bitcoin">Bitcoin</MenuItem>
                    <MenuItem value="Litecoin">Litecoin</MenuItem>
                    <MenuItem value="Dogecoin">Dogecoin</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Personal Message"
                  type="text"
                  fullWidth
                  multiline
                  rows="3"
                />
                </CardContent>
                  <CardActions>
                    <Button fullWidth href="/" color="secondary" variant="raised">Invite Friend</Button>
                  </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  }
}

InviteFriend.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(InviteFriend);
