const lodo = require("express").Router();
const axios = require('axios');
const goatScript =  require("../../javascript/goatScript")

console.log("inside the routes")

lodo.route("/api/trending/shoes")
    .get((req, res) => {
        console.log("GET: /api/trending/shoes")
        goatScript(data=>{
            res.json(data)
        })
    })


module.exports = lodo;

