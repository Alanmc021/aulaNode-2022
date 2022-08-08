const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async (url) => {
    const result = await axios.get(url)
    return result.data
}

const main = async () => {
    const content = await fetchData("https://stardewvalleywiki.com/Villagers")
    const $ = cheerio.load(content)
    let villagers = []

    $("li.gallerybox").each((i, e) => {
        const title = $(e).find(".gallerytext > p >  a").text()
        const data = { title }
        villagers.push(data)
    })

    console.log(villagers)
}


main()










// var http = require('http')
// http.createServer((request, response) => {
//     response.writeHead(200, { "Content-type": "text/html" });
//     response.write(
//        "<h1>Funfou Legal</h1>"        
//     );
//     response.end()
// }).listen(8080)