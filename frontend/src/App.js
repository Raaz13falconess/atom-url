import React, { useState } from 'react';
import { shortenUrl } from './services/urlService';
import 'animate.css';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await shortenUrl(originalUrl);
    setShortUrl(`http://localhost:5000/${data.shortUrl}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('URL copied to clipboard!');
  };

  return (
    <div className="App">
      <h1 className="animate__animated animate__fadeIn">URL Shortener</h1>
      <form className="animate__animated animate__fadeIn animate__delay-1s" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL to shorten"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div className="animate__animated animate__fadeIn animate__delay-2s">
          <p>Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
          <button className="copy-button" onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default App;
