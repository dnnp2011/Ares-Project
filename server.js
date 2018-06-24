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

//open connection
io.on("connection", socket => {
    console.log("New client connected")

    //clear running interval so we don't have too many connections open
    if(interval) {clearInterval(interval)}

    interval = setInterval(() => getApiAndEmit(socket), 10000)

    socket.on("disconnect", () => {
        console.log("Client disconnected")
    })
})


//fetch api
const getApiAndEmit = async socket => {
    try {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins?per_page=10")
        const bitcoinData = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1")
        const etherData = await axios.get("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1")
        const eosData = await axios.get("https://api.coingecko.com/api/v3/coins/eos/market_chart?vs_currency=usd&days=1")

        //send data to client
        socket.emit("FromAPI", res.data, bitcoinData.data, etherData.data, eosData.data )
    } catch(error) {console.error(`Error: ${error.code}`)}
}

//listening(open)
server.listen(port, () => console.log(`Listening on port ${port}`))
