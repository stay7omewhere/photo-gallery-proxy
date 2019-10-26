const express = require('express');
const app = express();
const port = 3000;
const request = require('request');

app.use('/:listingid', express.static('public'));

// for photos module
app.get('/photos/:listingid', (req, res) => {
  request(`http://18.217.122.245/photos/${req.params.listingid}`, (error, response, body) => {
    if (error) return res.end();
    res.send(JSON.parse(body));
  });
});

// for checkout module
// app.get('/listing', (req, res) => {
//   request('http://3.17.59.236/listing', (error, response, body) => {
//     if (error) return res.end();
//     res.send(JSON.parse(body));
//   });
// });

// app.get('/currentCalendar', (req, res) => {
//   request('http://3.17.59.236/currentCalendar', (error, response, body) => {
//     if (error) return res.end();
//     res.send(JSON.parse(body));
//   });
// });

// app.get('/monthAndYear', (req, res) => {
//   request('http://3.17.59.236/monthAndYear', (error, response, body) => {
//     if (error) return res.end();
//     res.send(JSON.parse(body));
//   });
// });

// app.get('/month', (req, res) => {
//   request('http://3.17.59.236/month', (error, response, body) => {
//     if (error) return res.end();
//     res.send(JSON.parse(body));
//   });
// });

// app.get('/nextCalendar', (req, res) => {
//   request('http://3.17.59.236/nextCalendar', (error, response, body) => {
//     if (error) return res.end();
//     res.send(JSON.parse(body));
//   });
// });

// app.get('/previousCalendar', (req, res) => {
//   request('http://3.17.59.236/previousCalendar', (error, response, body) => {
//     if (error) return res.end();
//     res.send(JSON.parse(body));
//   });
// });

// for reviews module
app.get('/reviews', (req, res) => {
  request('http://18.219.230.255/reviews', (error, response, body) => {
    if (error) return res.end();
    res.send(JSON.parse(body));
  });
});

// for recommendations module
// app.get('/api/recommendations', (req, res) => {
//   request('http://ec2-13-58-95-198.us-east-2.compute.amazonaws.com:3004/api/recommendations', (error, response, body) => {
//     if (error) return res.end();
//     res.send(JSON.parse(body));
//   });
// });

// for experiences module
// app.get('/experiences', (req, res) => {
//   request('http://TOADD/experiences', (error, response, body) => {
//     if (error) return res.end();
//     res.send(JSON.parse(body));
//   });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
