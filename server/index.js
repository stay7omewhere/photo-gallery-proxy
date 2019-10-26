const express = require('express');
const app = express();
const port = 3000;
const router = require('./router.js');

app.use('/:listingid', express.static('public'));
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));
