import React from 'react';
import { Link } from 'react-router-dom';
import themeStyles from './ico-list-item.theme.style';
import scss from './ico-list-item.module.scss';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import { Route } from 'react-router-dom';
import Detail from '../ico-detail/ico-detail.component';
import { fs } from '../../../../firebase';

class Ico extends React.Component {
  render() {
    const {
      classes,
      width
    } = this.props;

    const {
      name, price, start, end, phase
    } = this.props[0];
    console.log(`Props: ${name}, ${price}, ${start}, ${end}, ${phase}`);
    return (
      <div>

        <Link to={{ pathname: `/browse-icos/details/`, name, price, start, end, phase }} style={{ textDecoration: 'none' }}>

          <Card className={classNames(scss.card, classes['primary-card'])}>
            <Typography className={scss.coin} variant="display1" gutterBottom>
              {name}
            </Typography>

            <Typography className={scss.center} variant="display1">
           Price: {price}
            </Typography>
            <br />
            <br />
            <CardContent>
              <div className={scss.parent}>

                <Typography className={scss.first}>
        Start: {start}  |  End: {end}
                </Typography>


                <Typography className={scss.second}>
        Phase: {phase}
                </Typography>

              </div>
            </CardContent>
          </Card>
        </Link>
        <br />
      </div>
    );
  }
}


Ico.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};


export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Ico);

/*
this will list off given icos from ico-AsyncListExample
*/
