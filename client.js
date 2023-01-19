const net = require("net");
const {IP, PORT} = require('./constants');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
   IP,// IP address here,
   PORT// PORT number here,
  });

  //message after connecting
  //set up name after
  conn.on('connect', () => {
    console.log("connection successful!");
    conn.write("Name: ABG");
  });

  // ends program after idling
  conn.setTimeout(7000);
  conn.on('timeout', () => {
    console.log("You ded cuz u idled");
    conn.end();
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};