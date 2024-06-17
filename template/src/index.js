// This is a placeholder for the main JavaScript file.
// Add your JavaScript code here if needed.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Handle /data request
app.get('/data', (req, res) => {
    res.send('<p>HTMX loaded this content!</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
