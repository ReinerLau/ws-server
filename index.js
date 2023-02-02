const express = require("express");
const app = express();
require("express-ws")(app);

let st;
app.ws("/", (ws) => {
  sendMessage(ws);
});

function sendMessage(ws) {
  clearTimeout(st);
  ws.send("test");
  st = setTimeout(() => {
    sendMessage(ws);
  }, 1000);
}

app.listen("3000");
