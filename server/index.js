const express = require('express');
const app = express();
const port = 3000;

app.use('/:listingid', express.static('public'));

app.get('/:listingid', (req, res) => {
  res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
