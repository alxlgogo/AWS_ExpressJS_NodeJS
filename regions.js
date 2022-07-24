const express = require('express');
const router = express.Router();
let AWS = require("aws-sdk");
AWS.config.update({ region: 'eu-west-1' });

let ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });
router.get('/', function (req, res) {
    let params = {};
    ec2.describeRegions(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            res.send(data.Regions);
        }
    });
});

router.get('/:regionName', function (req, res) {
    let regionName = req.params.regionName;
    console.log(regionName);

    let params = {
        RegionNames: [
            regionName
        ]
    };

    ec2.describeRegions(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            res.send(data.Regions);
        }
    });
});





// q2 Return a list of all VPCs within a specific region
// describeVPCs();

//3. Return a list of all Subnets within a specific VPC
// describeSubnets(params);

//export this router to use in our index.js
module.exports = router;