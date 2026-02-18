const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

// Base paths
router.use('/auth', authRoutes);
router.use('/prof   ile', userRoutes);

module.exports = router;
