const express = require("express");
const app = express()
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    10000
  )
  socket.on("disconnect", () => console.log("Client disconnected"))
})

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins?per_page=10"
    )

    socket.emit("FromAPI", res.data)
    console.log(res.data)
  } catch(error) {
    console.error(`Error: ${error.code}`);
  }
}

server.listen(port, () => console.log(`Listening on port ${port}`))
