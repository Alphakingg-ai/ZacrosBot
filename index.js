const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
var isRunning = false;
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    response.send("Tetha Bot Is Running")
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

function start(file) {
  if (isRunning) return;
  isRunning = true;
  let pathFile = [path.join(__dirname, file), ...process.argv.slice(2)];
  let run = spawn(process.argv[0], pathFile, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });
  run.on("message", (data) => {
    switch (data) {
      case "reset":
        run.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case "uptime":
        run.send(process.uptime());
        break;
      case "close":
        run.kill();
        process.kill();
        break;
    }
  });
  run.on("exit", (code) => {
    isRunning = false;
    if (code == 1) return process.kill();
    console.error("Exited with code:", code);
    fs.watchFile(pathFile[0], () => {
      fs.unwatchFile(pathFile[0]);
      start(file);
    });
  });
}

process.on("uncaughtException", (err) => {
	console.error(err, "Uncaught Exception thrown");
        start(file);
});

start("main.js");
