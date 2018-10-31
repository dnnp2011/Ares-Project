// import React from 'react';

// import themeStyles from './invest.theme.style';
// import scss from './invest.module.scss';
// import { withStyles } from '@material-ui/core/styles';
// import Web3 from 'web3'

// const Invest = (props) => {
//   const {
//     classes
//   } = props;


//   let web3js
//   let val


//   //if metamask is installed
//   if(typeof web3 !== 'undefined')
//   {
//     //use it to create a new web3 connection to the blockchain
//     web3js = new Web3(window.web3.currentProvider);
//     var value = web3js.fromWei('100', 'ether');

//     console.log(value, 'ether');
//     web3js.eth.getBalance(web3js.eth.accounts[0], (err, res) => {console.log(web3js.fromWei(res.c[0],'ether').toNumber())})

//   }
//   else
//   {
//     //for LOCAL development purposes
//     web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

//     alert('YOU DO NOT HAVE METAMASK INSTALLED, YOU WILL NOT HAVE ANY ACCESS TO WALLET FEATURES')
//   }

//   function invest(amount) {
//     console.log(amount)
//     // web3js.eth.sendTransaction({from: web3js.eth.accounts[0], to: '0x0', value: web3js.toWei(amount, 'ether')}, (txHash) => {console.log})
//   }

//   return (
//     <div>
//       <input type="number" name="textInput" placeholder="0" ref={(input) => {this.textInput = input}} />
//       <button onClick={() => invest(this.textInput.value)}>invest</button>
//     </div>
//   )
// }

// // Forgot.propTypes = {
// //   classes: PropTypes.shape({}).isRequired
// // };


// export default withStyles(themeStyles, { withTheme: true })(Invest);
