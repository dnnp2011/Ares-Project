import React, { Component } from 'react';

import themeStyles from './wallet.theme.style';
import scss from './wallet.module.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Web3 from 'web3'

class Wallet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      account: '0x0',
      balance: 0
    }

  }

  componentDidMount() {

     //if metamask is installed
    if(typeof web3 !== 'undefined')
    {
      //use it to create a new web3 connection to the blockchain
      this.web3js = new Web3(window.web3.currentProvider);

      console.log(this.web3js)

      this.setState({
        account: this.web3js.eth.accounts[0]
      })

     this.web3js.eth.getBalance(this.web3js.eth.accounts[0],
      (err, wei) => {
        err?
        console.error(err)
        :
        this.setState({
          balance: this.web3js.fromWei(wei.toNumber(), 'ether')
        })
      })

    }
    else
    {
      //for LOCAL development purposes
      this.web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:7545/"));

      alert('YOU DO NOT HAVE METAMASK INSTALLED, YOU WILL NOT HAVE ANY ACCESS TO WALLET FEATURES')
    }
  }

  invest = (amount) => {

      //send transaction with metamask popup
      // web3js.eth.sendTransaction({
      //   from: web3js.eth.accounts[0],
      //   to: toAccount,
      //   value: web3js.toWei(amount, 'ether')
      // }, (txHash) => {console.log})
    }

  render() {
    const { classes } = this.props;



    return (
      <div>
        <h2>Account: {this.state.account}</h2>
        <p> Balance: {this.state.balance} ether</p>
        <input
          type="number"
          name="textInput"
          placeholder="0"
          ref={(input) => {this.textInput = input}} />

        <button onClick={(e) => this.invest(this.textInput.value)}> invest </button>
      </div>
    )
  }
}

Wallet.propTypes = {
  classes: PropTypes.shape({}).isRequired
};


export default withStyles(themeStyles, { withTheme: true })(Wallet);
