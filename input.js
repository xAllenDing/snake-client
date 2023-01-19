

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  const handleUserInput = function (data) {
    if (data === '\u0003') {
      console.log("terminated");
      process.exit();
    }
  }
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };
