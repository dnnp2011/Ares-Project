import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import './DropdownList.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{width:"300px"}} >
         <Button variant="raised" color="secondary" className='button' color='secondary' onClick={this.showDropdownMenu}> fund source </Button>

          { this.state.displayMenu ? (
          <ul>
           <li><a className="active" href="#">First Card</a></li>
           <li><a href="#">Second Card</a></li>
           <li><a href="#">Checking Account</a></li>
           <li><a href="#">Savings Account</a></li>
          </ul>
        ):
        (
          null
        )
        }
       </div>
    );
  }
}

Dropdown.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default Dropdown;
