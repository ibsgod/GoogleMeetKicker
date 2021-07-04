meetTab = []
function query(tabId, changeInfo, tab)
{
    meetTab = []
    chrome.tabs.query({url: "https://meet.google.com/*-*"},function(tabs)
    {
        console.log("\n/////////////////////\n");
        tabs.forEach(function(tab)
        {
            console.log(tab.url);
            meetTab.push(tab)
        });
        meetTab.forEach(function(tab)
        {
            console.log(tab.id)
        })
        send()
    })

}
//chrome.tabs.onCreated.addListener(query)
//chrome.tabs.onRemoved.addListener(query)
//chrome.runtime.onStartup.addListener(query)
//chrome.tabs.onUpdated.addListener(query)
setInterval(query, 3000)
function send()
{
    meetTab.forEach(function(tab)
    {
        console.log("hii")
        chrome.tabs.executeScript(tab.id, {file: "check.js"})
    })
    console.log("hi")
}

//chrome.runtime.onConnect.addListener(function(port) {
//  port.onMessage.addListener(function(msg) {
//    if (msg.msg === "msg")
//    {
//        console.log("hi")
//    }
//
//  });
//});
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.msg === "msg")
    {
        chrome.tabs.remove(sender.tab.id)
    }
    else
    {
        console.log(message)
    }
});