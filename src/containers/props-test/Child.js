import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Parent from './Parent';

var displayParent = false;

const Child = (props) => {
    return(
      <Typography>
      Props from parent: {props.display}
      <br />
      </Typography>
    );
}

export default Child;
