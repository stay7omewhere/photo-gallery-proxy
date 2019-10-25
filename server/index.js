const express = require('express');
const app = express();
const port = 3000;
const request = require('request');

app.use('/:listingid', express.static('public'));

app.get('/photos/:listingid', (req, res) => {
  request(`http://18.217.122.245/photos/${req.params.listingid}`, (error, response, body) => {
    if (error) return res.end();
    res.send(JSON.parse(body));
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
