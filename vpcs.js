const express = require('express');
const router = express.Router();

let AWS = require("aws-sdk");
AWS.config.update({ region: 'eu-west-1' });
let ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

router.get('/vpcs', function (req, res) {
    ec2.describeVpcs((err, data) => {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("vpcs: ", data.Vpcs);
            res.send(data.Vpcs);
        }
    });
});

router.get('/vpc/:vpcid', function (req, res) {
    let vpcid = req.params.vpcid;
    let params = {
        VpcIds: [
            vpcid
        ]
    };
    ec2.describeVpcs(params, (err, data) => {
        if (err) {
            console.log("Error", err);
        } else {
            res.send(data.Vpcs);
        }
    });
});

module.exports = router;