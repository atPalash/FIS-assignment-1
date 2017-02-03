var json =  {
    "_id" : "588c80d2ac03aa1e94fac4fb",
    "updatedAt" : "2017-01-28T11:30:26.815Z",
    "createdAt" : "2017-01-28T11:30:26.815Z",
    "order" : [
        {
            "_id" : "588c80d2ac03aa1e94fac4fc",
            "shipto" : [
                {
                    "shippingname" : "joy",
                    "shippingemail" : "joy@gmail.com",
                    "shippingphone" : "666666",
                    "shippingaddress" : "kolkata",
                    "shippingcountry" : "india",
                    "_id" : "588c80d2ac03aa1e94fac4fd"
                }
            ],
            "item" : [
                {
                    "title" : "bottle",
                    "note" : "hihiiiiii",
                    "quantity" : 3,
                    "price" : 4,
                    "_id" : "588c80d2ac03aa1e94fac4fe"
                }
            ],
            "orderperson" : [
                {
                    "name" : "Palash",
                    "email" : "halder@student.tut.fi",
                    "phone" : "403703415",
                    "_id" : "588c80d2ac03aa1e94fac4ff"
                }
            ]
        }
    ],
    "__v" : 0
}
var d = json.order[0].shipto[0].shippingaddress;
//var data = JSON.stringify(json[0].shipto);
console.log(d);
//console.log(data);