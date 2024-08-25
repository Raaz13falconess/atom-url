const Url = require('../models/Url');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();
  try {
    const url = new Url({ originalUrl, shortUrl });
    await url.save();
    res.json(url);
  } catch (err) {
    res.status(500).json('Server error');
  }
};

exports.redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const url = await Url.findOne({ shortUrl });
    if (url) {
      url.clicks++;
      url.lastVisited = new Date();
      await url.save();
      return res.redirect(url.originalUrl);  // Redirect to original URL
    } else {
      res.status(404).json('URL not found');
    }
  } catch (err) {
    res.status(500).json('Server error');
  }
};


exports.getUrlAnalytics = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const url = await Url.findOne({ shortUrl });
    if (url) {
      res.json(url);
    } else {
      res.status(404).json('URL not found');
    }
  } catch (err) {
    res.status(500).json('Server error');
  }
};
