const express = require('express');
const app = express();

const reigions = require('./regions.js');
app.use('/api-region', reigions);

const subnet = require('./subnet.js');
app.use('/api-subnet', subnet);

const vpcs = require('./vpcs.js');
app.use('/api-vpc', vpcs);
app.listen(30009);