const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

// Base paths
router.use('/auth', authRoutes);
router.use('/profile', userRoutes);

module.exports = router;
