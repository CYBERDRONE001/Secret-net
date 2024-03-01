function processPayment() {
    var name = document.getElementById('nameInput').value;
    var number = document.getElementById('numberInput').value;
    var email = document.getElementById('emailInput').value;
    var amount = 5500; // Default amount for the password

    // Initialize Paystack payment
    var handler = PaystackPop.setup({
        key: 'pk_live_d9e5a766a34d5805b8b430b8f62f2fcd4c0cb9fd', // Replace with your Paystack public key
        email: email, // Use receiver's email
        amount: amount * 100, // Amount in kobo
        currency: 'NGN', // Currency code
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Unique reference
        metadata: {
            custom_fields: [
                {
                    display_name: "Receiver Name",
                    variable_name: "receiver_name",
                    value: name
                },
                {
                    display_name: "Receiver Phone Number",
                    variable_name: "receiver_number",
                    value: number
                },
                {
                    display_name: "Receiver Email",
                    variable_name: "receiver_email",
                    value: email
                }
            ]
        },
        callback: function(response) {
            // Payment successful, handle response
            alert('Payment successful! Transaction reference: ' + response.reference);
            // Proceed with further actions (e.g., providing password)
        },
        onClose: function() {
            // Payment window closed
            alert('Payment window closed.');
        }
    });
    handler.openIframe();
}
