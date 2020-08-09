# yelp-fusion-api
You will need to get your own Fusion APIKey from Yelp and use it in `app.js` or create a `.env` file and add `FUSION_API_KEY=<KEY GOES HERE>` to run the app locally. 
https://www.yelp.com/developers/documentation/v3/authentication for more details.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to access APIs.

### `npm run serve`

Runs the app.<br />
Open [http://localhost:3001](http://localhost:3001) to access APIs.

## Available APIs

`/businesses/search` 

Use this url to fetch Yelp Fusion API serch results. You can use the Yelp API's search params in query string.  
visit https://www.yelp.com/developers/documentation/v3/business_search for all available options and how the response will look like. 

`/businesses/reviews/:id` 

Use this url to fetch Yelp Fusion API review results. Use the business Id for the `:id` field. It will only return 1 top review.
Visit https://www.yelp.com/developers/documentation/v3/business_reviews to see what the response will look like. 

## Deploy
I've deployed it to Heroku from Heroku dashboard using the github deploy section. 
