const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const router = express.Router();
const server = http.createServer(app);
const io = socketIo(server);

router.get("/", (req, res) => {
  res.send({ response: "UP" }).status(200);
});

let interval;
// let filterRequest2;

//open connection
io.on("connection", socket => {
  console.log("New client connected");


  // filterRequest2 = 'bitcoin'

  //clear running interval so we don't have too many connections open
  if (interval) {
    clearInterval(interval);
  }

  //upon receiving request data from client, store the request
  // socket.on('filterReq', req => {
  //     filterRequest2 = req


  //     console.log('req', filterRequest2)
  // })

  // console.log('state', filterRequest2)

  //poll
  interval = setInterval(() => getApiAndEmit(socket), 5000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});


//fetch api
const getApiAndEmit = async socket => {
  try {

    //general sort for cointicker
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins?per_page=10&page=1`);

    //for market cap sort
    const res2 = await axios.get("https://api.coingecko.com/api/v3/coins?order=market_cap_desc&per_page=10");

    //for market share sort
    const res3 = await axios.get("https://api.coingecko.com/api/v3/coins?order=volume_desc&per_page=10&page=1");

    //send data to client
    socket.emit("FromAPI", res.data, res2.data, res3.data);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

// socket.emit("FromAPI", res.data, bitcoinData.data, etherData.data, eosData.data)

//listening(open)
server.listen(port, () => console.log(`Listening on port ${port}`));
