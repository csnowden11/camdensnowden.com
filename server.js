const express = require('express');
const path = require('path');
const newsletterRouter = require('./api/newsletter');
const directoryRouter = require('./api/directory');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// API routes
app.use('/api', newsletterRouter);
app.use('/api', directoryRouter);

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 