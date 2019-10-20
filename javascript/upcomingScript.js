const axios = require("axios");
const cheerio = require("cheerio");



function upcomingReleases(cb){

    axios
    .get("https://www.kixify.com/release-dates/upcoming")
    .then(response=>{
        const $ = cheerio.load(response.data)
        const upcomingShoes = []
        $("div .release-date-item-wrapper").each((i , ele)=>{
                const data = {
                    releaseDate:$(ele).children().find(".event-date").text().trim() ,
                    moreInfoLink : "https://www.kixify.com"+$(ele).children().next().children().find("a").attr("href"),
                    shoeName : $(ele).children().next().next().children().children().text() ,
                    image : $(ele).children().next().children().children().attr("src")
                }       

                upcomingShoes.push(data)
        })

        return cb(upcomingShoes)
    })
    .catch(err=>{
    console.error("SOMETHING WENT WRONG WHILE MAKING CALL TO https://www.kixify.com/release-dates/upcoming")
    console.log(err)
    })
}


module.exports = upcomingReleases
