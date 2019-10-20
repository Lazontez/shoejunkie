const lodo = require("express").Router();
const axios = require('axios');
const goatScript =  require("../../javascript/goatScript")
const upcomingShoes = require("../../javascript/upcomingScript")

console.log("inside the routes")

lodo.route("/api/trending/shoes")
    .get((req, res) => {
        console.log("GET: /api/trending/shoes")
        goatScript(data=>{
            res.json(data)
        })
    })

lodo.route("/api/upcoming/shoes")
    .get((req , res)=>{
        console.log("GET: /api/upcoming/shoes")
        upcomingShoes(data=>{
            res.json(data)
        })
    
    })


module.exports = lodo;

