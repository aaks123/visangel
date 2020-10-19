import {apiKey,encrypKey} from "./config.js"
function onVisaCheckoutReady() {
    V.init( {
        apikey: apiKey ,
        encryptionKey: encrypKey,
        paymentRequest: {
            currencyCode: "USD",
            subtotal: "10.00"
        }
        });
    V.on("payment.success", function(payment) {
        document.write("payment.success: \n" + JSON.stringify(payment));
    });
    V.on("payment.cancel", function(payment) {
         document.write("payment.cancel: \n" + JSON.stringify(payment));
    });
    V.on("payment.error", function(payment, error) {
        document.write("payment.error: \n" +
        JSON.stringify(payment) + "\n" +
        JSON.stringify(error));
    });
}