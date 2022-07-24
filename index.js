const express = require('express');
const app = express();

const reigions = require('./regions.js');
app.use('/regions', reigions);

const subnet = require('./subnet.js');
app.use('/subnets', subnet);

const vpcs = require('./vpcs.js');
app.use('/vpcs', vpcs);
app.listen(30009);