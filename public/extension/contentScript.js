chrome.runtime.onMessage.addListener(
function (message,sender,sendresponse)
{
	console.log("Hellp");
	var amount = document.getElementById("sc-subtotal-amount-buybox").textContent;
	var name = document.getElementsByClassName("nav-line-1-container")[0].textContent;
	console.log(name);
	amount = parseInt(amount);
	var model = {
		name: name,
		amount: amount
	};
	console.log(amount);
	sendresponse(model);
});