/**
 * Created by halder on 27-Jan-17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    order:[ {
                orderid: {
                    type: mongoose.Schema.Types.ObjectId,
                    auto: true
                },
                orderperson: [{
                    name: {
                        type: String,
                        required: true,
                        unique: true
                    },
                    email: {
                        type: String,
                        required: true,
                        unique: true
                    },
                    phone:{
                        type: String,
                        required:true,
                        unique:true
                    }
                }],
                item: [{
                title:{
                    type:String,
                    required:true,
                    unique: false
                },
                note:{
                    type:String,
                    required:false,
                    unique:false
                },
                quantity:{
                    type: Number,
                    required:true,
                    unique:false
                },
                price:{
                    type: Number,
                    required:true
                    }
                }],
                date: {
                    type: Date,
                    default: Date.now
                },
                shipto:[{
                shippingname: {
                    type: String,
                    required: true,
                    unique: true
                    },
                shippingemail: {
                    type: String,
                    required: true,
                    unique:true
                },
                shippingphone:{
                    type: String,
                    required:true,
                    unique:true
                },
                shippingaddress: {
                    type: String,
                    required: true,
                    unique:false
                },
                shippingcountry:{
                    type:String,
                    required: false,
                    unique:false
                }
                }]}]}, {
    timestamps: true
});

var customers = mongoose.model('customer', customerSchema);
module.exports = customers;