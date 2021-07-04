
window.onload = function () {
    let input = document.getElementById("input")

   chrome.storage.sync.get("limit", (item)=>
    {
        if (item === "undefined")
        {
           chrome.storage.sync.set({"limit": 5}, function() {
             input.value = 5
           });
        }
        else
        {
            chrome.storage.sync.get("limit", (item)=>
            {
                input.value = item.limit
            })
        }
    })
    function isNumeric(value) {
        return /^\d+$/.test(value);
    }
    document.getElementById("button").onclick = () =>
    {
        if (!isNumeric(input.value))
        {
            input.value = 5
        }
        chrome.storage.sync.set({"limit": input.value}, function(item) {});
    }
}