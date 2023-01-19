// const { connect } = require("./client");
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      // console.log("terminated");
      process.exit();
    }
    if (data === 'w') {
      // console.log("you have entered w");
      connection.write("Move: up");
    }
    if (data === 'a') {
      // console.log("you have entered a");
      connection.write("Move: left");
    }
    if (data === 's') {
      // console.log("you have entered s");
      connection.write("Move: down");
    }
    if (data === 'd') {
      // console.log("you have entered d");
      connection.write("Move: right");
    }
  }

  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };
