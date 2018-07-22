import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Child from './Child';

var displayChild = false;

const Parent = (props) => {
    return(
      <div>
      Parent
      <Child key="1" display="My PRops" />
      </div>
    );
}

export default Parent;
