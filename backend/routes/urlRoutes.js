const express = require('express');
const router = express.Router();
const { shortenUrl, redirectUrl, getUrlAnalytics } = require('../controllers/urlController');

router.post('/shorten', shortenUrl);
router.get('/:shortUrl', redirectUrl);
router.get('/analytics/:shortUrl', getUrlAnalytics);

module.exports = router;
