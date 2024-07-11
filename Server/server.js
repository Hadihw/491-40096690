const dotenv = require("dotenv");
const express = require("express");
const https = require("https");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");


dotenv.config();

// Initialize Firebase Admin SDK
const serviceAccount = require("./firebase_admin_SDK.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const app = express();

app.use(bodyParser.json());

//Middleware

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
    next();
});

// API routes

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/auth/google', require('./routes/googleAuthRoutes'));


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
