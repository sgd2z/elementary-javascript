// This tells node that we want to use express
const express = require('express')

// this sets up express
const app = express()

// this is the port on the computer that express will use
const port = 1338

// This tells express to send the files in current folder when someone goes to our server.
app.use(express.static('.'))

// This function is called when express is started
const callWhenServerStarted = () => {
    console.log("Listening on port " +  port)
}

// This starts the server
app.listen(port, callWhenServerStarted)