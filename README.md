# Weather app on express.js
This is a great express.js app for a learning experience. 

## 1. Sign up for API
1. The very first thing you need to do is sign up (free) for Weather API at https://openweathermap.org/api because it
   will take few hours to start working.
2. I chose "Pay as you call"; it's for free on first 1000 API requests a day

**Note:** It will take few hours for it to start working; 2 and half hours in my case. Just be patient. If the API is
still not ready, the app will return an error fetching information.

## 2. Pull my repo and put your API
1. Clone this repository and put it in a folder you won't forget.
   ```bash
   git clone https://github.com/dmxt/weather-express-api.git
2. Copy an API they provided you and replace it with `API_KEY_HERE` on line 9 in `weather.js`
```javascript
const apiKey = 'API_KEY_HERE';
```

## 3. Install required packages
Install two packages `axios` `express` with either npm or yarn but not both.

`npm install axios express`

OR

`yarn add axios express`

Note: npm or yarn lockfile don't go well together.
If you find a two lockfiles in your directory, delete the one you don't use. It will generate a new one after running
anyway.

## 4. Start a server!

```bash
npm start
```

This script will run the script `node weather.js` (I set in package.json)

The console output will provide some example and tips after you start a node server. You can open the link in a browser
or use `curl` in command line to get a temperature information.

### How to stop a server

Go to the command line where you started a server and press Ctrl+C

---

### Tips

1. You can change the (or curl) URL to any cities and it's not case-sensitive.
2. If your city or state have a space, replace the space with `%20`

### Questions?

If you have any question, make a new issue on GitHub repository, and I will to get back to you as soon as possible.

---

### Credits

OpenGPT helped tremendously for me to get started by asking how to start a weather app, and it gave me useful
information regarding how to build an app (nothing direct, but a good start) and included a link to an API.**
