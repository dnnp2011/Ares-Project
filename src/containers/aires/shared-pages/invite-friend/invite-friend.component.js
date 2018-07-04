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

import themeStyles from './invite-friend.theme.style';
import scss from './invite-friend.module.scss';

import logoImage from '../../../../assets/images/portal-logo.png';
import Divider from "../../../elements/divider/divider.component";

const InviteFriend = (props) => {
  const {
    classes
  } = props;

  return (
    <Grid
    container
    direction="row"
    spacing={0}
    justify="center"
    alignItems="center"
    className={classes.background}
    >
    <Grid item sm={6} xs={12} className={scss.panel}>
      <Grid direction="column" container spacing={0}>
        <Grid
          item
          xs={12}
        >
            <Card className={classNames(scss.card, classes['primary-card'])}>
              <CardContent className={scss['invite-friend-content']}>
                <img src={logoImage} className={scss['invite-friend-logo']} alt="logo" />
                <br/>
                <Typography gutterBottom>Enter your friend's name and email to invite your friend to register and invest in ICO's</Typography>

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
};

InviteFriend.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(InviteFriend);
