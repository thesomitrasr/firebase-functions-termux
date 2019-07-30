const functions = require('firebase-functions');
const express = require('express');

const app=express();
app.get('/users', (request, response)=>{
response.send("Hi Somitrasr");

});
exports.app = functions.https.onRequest(app);
