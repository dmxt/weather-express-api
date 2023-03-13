# Weather app on express.js

This is a great app for learning experience in my opinon.

## 1. Sign up for API
1. **!!IMPORTANT!!** Sign up (free) for Weather API at https://openweathermap.org/api 
2. I chose "Pay as you call" it's for free on first 1000 API requests a day

**Note:** It will take few hours for it to start working; 2.5 hours in my case. Be patient!

## 2. Pull my repo and put your API
1. Pull this repository and put it in a folder you won't forget.
   ```bash
   https://github.com/dmxt/weather-express-api.git***
3. Grab a weather API they provided you from the first section "Sign up for API" and replace it... (step 4)
4. Copy the API and open the folder with `weather.js`, go to line 9 or wherever and replace API_KEY_HERE with your API key you copied:
```javascript
const apiKey = 'API_KEY_HERE';
```

## 3. Install required packages
1. Make sure you're in same folder as `weather.js` inside terminal. 
2. Install two packages `axios` `express` with npm or yarn 

`npm install axios express`

OR

`yarn add axios express`

Note: npm or yarn lockfile don't go well together. 
If you find a two lockfiles of something you don't use, just delete it. 
(It will make a new one)


# Start a server!
1. Go tothe directort where `weather.js` was located at and tart the `weather.js` express app
```bash
node weather.js
```

The console output will provide some example and tips after you run `node weather.js`
* You can change the ≈URL to any cities, it's not case-sensitive. 
* If your city or state have a space, replace the space with `%20`

## Conclusion
If you have any question, shoot me a message on issues and I'll my best to get back to you as soon as possible. :-)
