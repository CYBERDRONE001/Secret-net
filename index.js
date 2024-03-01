function checkPassword() {
            const enteredPassword = document.getElementById('passwordInput').value;
            const correctPassword = 'i will never be poor'; // Replace with your correct password
            if (enteredPassword.trim() === '') {
                // Show error message for empty password
                alert('Please enter your password.');
                return; // Exit the function early if password is empty
            }
            if (enteredPassword === correctPassword) {
                // Redirect to a success page
                window.location.href = 'darknetapp.html';
            } else {
                // Show error message for incorrect password
                alert('Incorrect password. Please buy a new one and try again. The Password Amount is N5,500');
                clearInput(); // Optional: Clear the input field for retry
                // Redirect to an error page (you can customize this URL)
                window.location.href = 'buy-password.html';
            }
        }

        function clearInput() {
            document.getElementById('passwordInput').value = '';
        }

        // Popup message function
        window.onload = function() {
            alert("This website/app was created for those who are looking for a way to earn money easily from home/n if you are not looking for a way to get money on time just exist the website/n thank you");
        };
