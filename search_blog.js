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

getCopyList = async () => {
    let copyList =[];
    let pageIdx = 1;
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
                copyList.push({ href : $(el).find("a").attr("href"), title : $(el).find("a").text().replace("출처: https://nhj12311.tistory.com/397 [This is IT]","").trim()  });
                //console.log(idx, $(el).find("a").attr("href"), $(el).find("a").text());
            }
        )
        console.log("wait 1sec... index : ", pageIdx);
        await sleep(500);
    }
    return copyList;
}

getMyList = async () => {
    let copyList =[];
    let pageIdx = 1;
    while(true){
        options.uri = `https://nhj12311.tistory.com/?page=${pageIdx++}`;    
        const result = await request(options);
        const $ = cheerio.load(result);
        const list_li = $("#mArticle");
        if( list_li && list_li.length == 0 ){
            break;
        }
        list_li.each(
            (idx, el)=>{
                copyList.push({ href : $(el).find("a").attr("href"), title : $(el).find(".tit_post").text().replace("출처: https://nhj12311.tistory.com/397 [This is IT]","").trim()  });
                //console.log(idx, $(el).find("a").attr("href"), $(el).find("a").text());
            }
        )
        console.log("wait 1sec... index : ", pageIdx);
        await sleep(500);
    }
    return copyList;
}

(async () => {
    const copyList = await getCopyList();
    const myList = await getMyList();
    const dupList = [];
    
    copyList.forEach(
        (el, idx ) => {
            myList.forEach(
                (el2, idx2 ) => {
                    //console.log(idx, "  ", el.title, "    " , el.href, "  " ,el2.href);
                    if( el.title == el2.title ){
                        console.log(idx, "  ", el.title, "    원본URL : https://nhj12311.tistory.com" + el2.href, "  신고URL : https://ameagaru3241.tistory.com" + el.href);
                        console.log("");
                    }
                }
            )
        }
    );
    
    


    //console.table(myList);
})();



