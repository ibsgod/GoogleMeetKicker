//chrome.runtime.onMessage.addListener(
//    function(request,sender,sendResponse){
//        if (request.message === "start")
//        {
//            console.log("sdf")
//        }
//    }
//)
//chrome.runtime.onConnect.addListener(port => {
//  console.log('connected ', port);
//});
//var port = chrome.runtime.connect({name: "porty"});
//port.onMessage.addListener(function(msg) {
//});
//setInterval(send, 3000)
//function send()
//{
//    try
//    {
//        thing = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > div > div")
//        if (thing.innerText < 2)
//        {
//            chrome.runtime.sendMessage({msg: "msg"})
//        }
//    }
//    catch(err){}
//}
try
{
    thing = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > div > div")
    chrome.storage.sync.get("limit", (item)=>
    {
        if (thing.innerText <= item.limit)
        {
            chrome.runtime.sendMessage({msg: "msg"})
        }
    })
}
catch(err){}
//thing = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > div > div")
//
//var observer = new MutationObserver(function(mutations) {
//  mutations.forEach(function(mutation) {
//            chrome.runtime.sendMessage({msg:thing.innerText})
//
//      });
//    });
//
//observer.observe(thing, { characterData: true, attributes: false, childList: false, subtree: true });