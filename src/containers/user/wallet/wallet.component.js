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

    this.initWeb3()
  }

  initWeb3 = () => {

    //if metamask is installed, use it to create a
    //new web3 connection to the blockchain
    if(typeof web3 !== 'undefined')
    {
      this.web3js = new Web3(window.web3.currentProvider)

      this.getAccount()
    }
    else
    {
      //the next line is for LOCAL development only, remove when production ready
      this.web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

      alert('YOU DO NOT HAVE METAMASK INSTALLED, YOU WILL NOT HAVE ANY ACCESS TO WALLET FEATURES')
    }
  }

  //check for metamask account and balance
  getAccount = () => {
    this.web3js.eth.getAccounts((error, accounts) => {

        // save metamask account to state then get new balance
        this.setState({account: accounts[0]}, () => this.getBalance())
      })
  }

  //check for balance
  getBalance = () => {

    //get and save balance to state
    this.web3js.eth.getBalance(this.state.account, (err, wei) => {
        err?
          console.error(err)
          :
          this.setState({
            balance: this.web3js.fromWei(wei.toNumber(), 'ether')
          })
      }
    )
  }

  //choose ether amount to invest
  invest = (amount) => {

    //send transaction with metamask popup
    this.web3js.eth.sendTransaction({
      from: this.state.account,
      to: '0x5252e875e394e7c76bC7EBBBa47C232e8a6E5919', //address from firebase
      value: this.web3js.toWei(amount, 'ether')
    }, (err, txHash) => {

        //if no error, set state with new balance
        !err? setTimeout(() => this.getBalance(), 5000) : alert(err)
       })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <h2> Account: {this.state.account} </h2>
        <p> Balance: {this.state.balance} ether </p>
        <input
          type="number"
          name="investment"
          placeholder="0"
          ref={input => {this.investment = input}} />

        <button onClick={(e) => this.invest(this.investment.value)}> invest </button>
      </div>
    )
  }
}

Wallet.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Wallet);
