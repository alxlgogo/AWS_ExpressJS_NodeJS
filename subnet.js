const express = require('express');
const router = express.Router();

let AWS = require("aws-sdk");
AWS.config.update({ region: 'eu-west-1' });
let ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

router.get('/subnets', function (req, res) {
    let params = {};
    ec2.describeSubnets(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        }else {
            console.log(data.Subnets);
            res.send(data.Subnets);
        }
    })
});

router.get('/subnet/:RegionName', function (req, res) {
    let regionName = req.params.RegionName;
    let params = {
        Filters: [
            {
                Name: "RegionName",
                Values: [
                    regionName
                ]
            }
        ]
    };

    ec2.describeSubnets(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(data.Subnets);
            res.send(data.Subnets);
        }
    })
});

module.exports = router;