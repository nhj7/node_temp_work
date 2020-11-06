console.log("start....");

var request = require('request-promise-native');
var cheerio = require('cheerio');


function sleep(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
}

let options = {
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    json:true 
};

(async () => {

    let pageIdx = 1;

    let copyList =[];

    while(true){
        options.uri = `https://ameagaru3241.tistory.com/?page=${pageIdx++}`;    
        const result = await request(options);
        const $ = cheerio.load(result);
        const list_li = $("#searchList>ol>li");
        if( list_li && list_li.length == 0 ){
            break;
        }
        list_li.each(
            (idx, el)=>{
                copyList.push({ href : $(el).find("a").attr("href"), title : $(el).find("a").text().trim()  });
                console.log(idx, $(el).find("a").attr("href"), $(el).find("a").text());
            }
        )
        console.log("wait 1sec");
        await sleep(1000);
    }

    
    

})();



