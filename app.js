const yelp = require('yelp-fusion');
const cors = require('cors');
const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(cors());
// use the express-static middleware
app.use(express.static('public'));

// define the first route
app.get('/businesses/search', function (req, res) {
  search(res, req.query);
});

app.get('/businesses/reviews/:id', function (req, res) {
  reviews(res, req.params.id);
});

const port = process.env.PORT || 3001;
// start the server listening for requests
app.listen(port, () => console.log(`Server started on port ${port}`));

const apiKey = process.env.FUSION_API_KEY || '<ADD FUSION API KEY HERE>';
const client = yelp.client(apiKey);

function search(res, searchRequest = {}) {
  client
    .search(searchRequest)
    .then((response) => {
      const result = response.jsonBody.businesses;
      console.log(result);
      res.status(201).json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).jsonp({ error: 'FAILED TO GET RESULTS' });
    });
}

function reviews(res, id) {
  client
    .reviews(id)
    .then((response) => {
      console.log(response.jsonBody.reviews[0]);
      const result = response.jsonBody.reviews[0];
      console.log(result);
      res.status(201).json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).jsonp({ error: 'FAILED TO GET REVIEWS' });
    });
}
