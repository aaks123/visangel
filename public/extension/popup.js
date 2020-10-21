// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('checkPage');
//     checkPageButton.addEventListener('click', function() {
  
//       chrome.tabs.getSelected(null, function(tab) {
//         d = document;
  
//         var f = d.createElement('form');
//         f.action = '';
//         f.method = 'get';
//         var i = d.createElement('input');
//         i.type = 'hidden';
//         i.name = 'url';
//         i.value = tab.url;
//         f.appendChild(i);
//         d.body.appendChild(f);
//         f.submit();
//       });
//     }, false);
//   }, false);
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

        var body = document.getElementsByTagName('body')[0];
        var iframeElement = document.createElement('iframe');
        iframeElement.setAttribute('src', "http://vis-angel.herokuapp.com/popupCheckout.html?subtotal="+change.toString());
        iframeElement.setAttribute('width', '500px');
        iframeElement.setAttribute('height', '500px');
        iframeElement.setAttribute('frameborder', '0');
        body.appendChild(iframeElement);
    });
});