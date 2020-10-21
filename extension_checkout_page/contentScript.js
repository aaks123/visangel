chrome.runtime.onMessage.addListener(
function (message,sender,sendresponse)
{
	var amount = document.getElementById("sc-subtotal-amount-buybox").textContent;
	console.log(amount);
	amount = amount.replace(",", "");
	var name = document.getElementsByClassName("nav-line-1-container")[0].textContent;
	amount = parseInt(amount);
	var model = {
		name: name,
		amount: amount
	};
	console.log(name);
	console.log(amount);
	sendresponse(model);
});