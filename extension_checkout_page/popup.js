chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"getText"}, function(response){
    	//alert(response);
        console.log(response.amount);
        var subtotal = response.amount;
        var total = subtotal;
        var len = total.toString().length;
        len = (len+1)/2;
        len = Math.floor(len);
        var n = Math.pow(10,len);
        var change = subtotal/n;
        change = Math.ceil(change);
        change *= n;
        change -= subtotal;
        var donation = document.getElementById("change");
        var name = document.getElementById("name");
        donation.textContent = change;
        name.textContent = response.name;
    });
});