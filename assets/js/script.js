document.getElementById('quote-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const location = document.getElementById('location').value;
    const duration = parseInt(document.getElementById('duration').value);
    const serviceType = document.getElementById('serviceType').value;

    try {
        const response = await fetch('http://localhost:3000/get-quote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location, duration, serviceType })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('quote-result').textContent = `Estimated Quote: ${data.quote}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('quote-result').textContent = "Error: Could not connect to the server.";
    }
});
