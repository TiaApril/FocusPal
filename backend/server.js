const express = require("express");
// io
const http = require("http");
const socketIo = require("socket.io");

const Passage = require("@passageidentity/passage-node");
const cors = require("cors");

const app = express();
// io
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 7000;
const CLIENT_URL = "http://localhost:3000";



require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
  })
);

const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER",
});

app.post("/auth", async (req, res) => {
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;

      res.json({
        authStatus: "success",
        identifier,
      });
    }
  } catch (e) {
    // authentication failed
    console.log(e);
    res.json({
      authStatus: "failure",
    });
  }
});

// WebSocket chat logic
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle incoming chat messages
  socket.on("message", (message) => {
    // Broadcast the message to all connected clients
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});