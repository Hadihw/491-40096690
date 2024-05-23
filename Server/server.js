const dotenv = require("dotenv");
const express = require("express");
const https = require("https");


dotenv.config();



const app = express();


//Middleware

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
    next();
});

// API Routes




let server;

if (process.env.NODE_ENV === 'development') {
    server = app.listen(process.env.PORT || 8080, () => {
        console.log(`HTTP server listening on port ${process.env.PORT || 8080}!`);
    });
} else {
    server = https.createServer(app);
    server.listen(process.env.PORT || 8080, () => {
        console.log(`HTTPS server listening on port ${process.env.PORT || 8080}!`);
    });
}
