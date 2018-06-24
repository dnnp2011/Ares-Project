const express = require("express");
const app = express()
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const router = express.Router();
const server = http.createServer(app)
const io = socketIo(server)

router.get("/", (req, res) => {
  res.send({ response: "UP" }).status(200)
});

let interval;
    let filterRequest2;

//open connection
io.on("connection", socket => {
    console.log("New client connected")


    // filterRequest2 = 'bitcoin'

    //clear running interval so we don't have too many connections open
    if(interval) {clearInterval(interval)}

    //upon receiving request data from client, store the request
    socket.on('filterReq', req => {
        filterRequest2 = req

        console.log('req', filterRequest2)
    })

        console.log('state', filterRequest2)


    //poll
    interval = setInterval(() => {console.log(filterRequest2), getApiAndEmit(socket, filterRequest2 )}, 10000)


    socket.on("disconnect", () => {
        console.log("Client disconnected")
  })
})


//fetch api
const getApiAndEmit = async (socket, request) => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins?per_page=10`)
        const bitcoinData = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${request}`)
        const etherData = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${request}`)
        const eosData = await axios.get(`https://api.coingecko.com/api/v3/coins/eos/market_chart?vs_currency=usd&days=${request}`)

        //send data to client
        socket.emit("FromAPI", res.data, bitcoinData.data, etherData.data, eosData.data )
    } catch(error) {console.error(`Error: ${error.code}`)}
}

//listening(open)
server.listen(port, () => console.log(`Listening on port ${port}`))
