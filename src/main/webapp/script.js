// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 1. Prevent the default form submission (stops the page from reloading)
    event.preventDefault();

    // 2. Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // 3. Client-side Validation (e.g., check if fields are too short)
    if (username.length < 4 || password.length < 6) {
        messageElement.textContent = 'Username must be at least 4 chars and password 6 chars.';
        messageElement.style.color = 'red';
        messageElement.classList.remove('hidden');
        return; // Stop execution
    }

    // 4. Submission Logic (Simulated)
    // In a real application, you would use 'fetch' or 'XMLHttpRequest'
    // to send the data to a server-side endpoint for actual authentication.

    console.log('Attempting login...');
    console.log('Username:', username);
    // WARNING: Never log or display passwords in a real app!

    // Simulated successful login after a short delay
    setTimeout(() => {
        if (username === 'user' && password === 'password123') {
             // In a real app, the server sends a token, and you redirect the user
            messageElement.textContent = 'Login successful! Redirecting...';
            messageElement.style.color = 'green';
            messageElement.classList.remove('hidden');
            // window.location.href = 'dashboard.html'; // Example redirect
        } else {
            messageElement.textContent = 'Invalid username or password.';
            messageElement.style.color = 'red';
            messageElement.classList.remove('hidden');
        }
    }, 1000); // Wait 1 second to simulate network delay
});