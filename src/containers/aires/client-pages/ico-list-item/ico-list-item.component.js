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

const Ico = (props) => {
 const {
    classes,
    width
 } = props;

    return(
      <div>
      <Link to={"/browse-icos/details"} style={{ textDecoration: 'none' }}>
      <Card className={classNames(scss.card, classes['primary-card'])}>
      <Typography className={scss.coin} variant="display1" gutterBottom>
      &nbsp;  {props.name} 
      </Typography>

      <Typography className={scss.center} variant="display1">
       Price: {props.price}
      </Typography>
<br/>
<br/>
       <CardContent>
  <div className={scss.parent}>

  <Typography className={scss.first}>
   Start: {props.start}  |  End: {props.end}
  </Typography>



  <Typography className={scss.second}>
   Phase: {props.phase}
  </Typography>

</div>
   </CardContent>
     </Card>
     </Link>
     <br/>
     </div>
    )
  }

  Ico.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    width: PropTypes.string.isRequired
  };


export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Ico);

/*
this will list off given icos from ico-AsyncListExample
*/
