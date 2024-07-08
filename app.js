const Logger = require("./logger");
const path = require("path");

const pathObj = path.parse(__filename);
const os = require("os");
var totalmem = os.totalmem();

logger = new Logger();

//Raise: Logging (data: message)
logger.on("logging", (data) => {
  console.log("logging", data);
});

//Register a listner
logger.on("message logged", (arg) => {
  console.log("message logged", arg);
});

logger.log("message");
logger.connect(3000);
//console.log(pathObj);
//console.log("Total memory :" + totalmem);
