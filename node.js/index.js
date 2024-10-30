// RUN THIS FILE WITH NODE.JS TO CREAT SERVER END


const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/get-quote', (req, res) => {
    const { location, duration, serviceType } = req.body;
    const quote = calculateQuote(location, duration, serviceType);
    res.json({ quote });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

function calculateQuote(location, duration, serviceType) {
    return `$${duration * 100}`;
}
