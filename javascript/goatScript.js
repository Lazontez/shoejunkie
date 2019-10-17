
const axios = require("axios");
const cheerio = require("cheerio");


const goatScript = (cb) => {
    axios.get("https://www.flightclub.com/sneakers")
        .then((response) => {
            console.log("made connection to https://www.flightclub.com/sneakers ")
            let $ = cheerio.load(response.data);
            $("ul").each((i, ele) => {
                const trendingShoes = []
                $(".item").each((iteration, element) => {

                    let data = {
                        shoeName: $(element).children().children().children().find("img").attr("alt").toUpperCase(),
                        image: $(element).children().children().children().find("img").attr("src")
                    }
                    // console.log(iteration+". "+data.image)
                    trendingShoes.push(data)
                })
                if (i = 1) {
                    console.log("Returning Trending Shoes Found From")
                    return cb(trendingShoes)
                }
                (i != 1) ? true : false

            })


        }).catch((err) => {
            console.error(err)
        });

};


// console.log(goatScript)

module.exports = goatScript
