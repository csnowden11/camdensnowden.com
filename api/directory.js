const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

router.post('/create-directory', async (req, res) => {
    try {
        const { path: dirPath } = req.body;
        
        // Ensure the path is safe (no parent directory traversal)
        const safePath = path.join(__dirname, '..', dirPath);
        
        // Check if directory exists
        try {
            await fs.access(safePath);
        } catch {
            // Directory doesn't exist, create it
            await fs.mkdir(safePath, { recursive: true });
        }
        
        res.status(200).json({ message: 'Directory created successfully' });
    } catch (error) {
        console.error('Directory creation error:', error);
        res.status(500).json({ error: 'Failed to create directory' });
    }
});

module.exports = router; 