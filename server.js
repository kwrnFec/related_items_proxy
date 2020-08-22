const express = require("express");
const axios = require("axios");
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 3001;

// const rpUrl = 'http://ec2-13-58-209-140.us-east-2.compute.amazonaws.com/';
const rpUrl = 'http://localhost:3000/';


let app = express();

app.use(express.static('public'));

app.use('/rp', createProxyMiddleware({ target: rpUrl, changeOrigin: true }));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
