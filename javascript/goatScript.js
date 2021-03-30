
const axios = require("axios");
const cheerio = require("cheerio");

console.log("Goat Script")
const goatScript = (cb) => {
    axios.get("https://www.stadiumgoods.com/stadium-picks")
        .then((response) => {
            // Axios is gathering HTML before Flightclubs page has loaded which is causing the elements needed to traverse to not be there at the time of
            console.log("made connection to https://www.stadiumgoods.com/stadium-picks ")
            let $ = cheerio.load(response.data);
            $(".main").each((i, ele) => {
                console.log("Here: "+$(ele).children().next())
                let page = cheerio.load($(ele).children().next())
                const trendingShoes = []
                
                page(".etojV").each((i , element)=>{
                    console.log(element)
                })
                // $(".sc-1wc5x2x-0").each((iteration, element) => {

                //     console.log(element)

                //     console.log("New Image: "+$(element).children().children().children().find("img"))

                //     let data = {
                //         shoeName: $(element).children().children().children().find("img").attr("alt"),
                //         image: $(element).children().children().children().find("img").attr("src")
                //     }
                    
                
                //     trendingShoes.push(data)
                //     if(iteration === 29){
                //         return false
                //     }
                    
                // })
                // if (i = 1) {
                //     console.log(trendingShoes)
                //     // return cb(trendingShoes)
                // }
                // (i != 1) ? true : false

            })


        })
        .catch((err) => {
            console.error(err)
        });

};


// console.log(goatScript)

module.exports = goatScript
