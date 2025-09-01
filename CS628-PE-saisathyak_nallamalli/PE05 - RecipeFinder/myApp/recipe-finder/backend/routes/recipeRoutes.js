// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();

// Temporary test route
router.get('/', (req, res) => {
  res.json({ message: 'Recipe routes working!' });
});

module.exports = router;
