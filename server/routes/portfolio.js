const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Get portfolio data
router.get('/data', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../../data/portfolio-data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    res.json(data);
  } catch (error) {
    console.error('Error reading portfolio data:', error);
    res.status(500).json({ error: 'Failed to load portfolio data' });
  }
});

// Get specific section
router.get('/data/:section', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../../data/portfolio-data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const section = req.params.section;
    
    if (data[section]) {
      res.json(data[section]);
    } else {
      res.status(404).json({ error: 'Section not found' });
    }
  } catch (error) {
    console.error('Error reading portfolio data:', error);
    res.status(500).json({ error: 'Failed to load portfolio data' });
  }
});

module.exports = router;
