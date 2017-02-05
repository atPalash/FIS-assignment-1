var express = require('express');
var jsonxml = require('jsontoxml');
var mongoose = require('mongoose');
var assert = require('assert');
var parser = require('json-parser');
var customers = require('../models/customers');
var validator = require('xsd-schema-validator');
var xsdFileName = "users.xsd";
var fs = require('fs');

var router = express.Router();

try {
    fs.accessSync(xsdFileName, fs.F_OK);
} catch (e) {
    console.log('XSD file ' + xsdFileName + ' is not accessible. Existing the program');
    console.log(e);
    process.exit(1);
}

router.route('/')
	
    .post(function(req,res,next){
        console.log("request setup");
        console.log(req.body);
        var json = {
                    "orderperson": {
                        "name" : req.body.name,
                        "email": req.body.email,
                        "phone": req.body.phone},
                    "item":{
                        "title":req.body.title,
                        "frame":req.body.frame,
                        "framecolor":req.body.framecolor,
                        "screen":req.body.screen,
                        "screencolor":req.body.screencolor,
                        "keyboard":req.body.key,
                        "keyboardcolor":req.body.keycolor,
                        "note": req.body.note,
                        "quantity":req.body.quantity,
                        "price": req.body.price
                    },
                    "shipto":{
                        "shippingname":req.body.Rname,
                        "shippingemail":req.body.Remail,
                        "shippingphone": req.body.Rphone,
                        "shippingaddress": req.body.Raddress,
                        "shippingcountry":req.body.Rcountry
                    }};
        console.log("json setup");
        console.log(json);
        var xml = jsonxml(json);
		xml = "<order xmlns:xsi = \"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"users.xsd\">" + xml + "</order>";
        validator.validateXML(xml, xsdFileName, function(err, result) {
            if (err) {
                console.log('Error was found during validation of file:');
                console.log(err);
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end("Customer not created: INVALID INPUT" + err.message.split('\n')[1]);
            }
            console.log('XML file is valid: ' + result.valid); // true
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("New customer created \nPrinting xml content in text format: \n" + xml);
            // res.writeHead(200,{'Content-Type':'text/xml'});
            // res.end(xml);
        })


        });

module.exports = router;
