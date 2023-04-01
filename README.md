# ☀️🌤 Weather API on express.js

This is a great express.js app for a learning experience. 

This instruction is for both `yarn` or `npm` users; it is your own choice to use what you're most comfortable with. But you can't use both at once!

## ⚙️ 1. Sign up for API
1. The very first thing you need to do is sign up (free) for Weather API at https://openweathermap.org/api because **it will take few hours to start working**.
2. I chose "Pay as you call"; it's for free on first 1000 API requests a day.

**Note:** It will take few hours for it to start working; two and half hours in my case. Just be patient. If the API is still not ready, the app will return an error fetching information when API is not ready or not properly not applied to the file according to the step 2.2

## 🗂️ 2. Clone my repo and apply your own API
1. **Clone this repository** and put it in a folder you won't forget.
   ```bash
   git clone https://github.com/dmxt/weather-express-api.git
2. **Copy an API they provided you from** https://openweathermap.org/api and replace it with `API_KEY_HERE` on line 11 in `weather.js` 
   ```javascript
   const apiKey = 'API_KEY_HERE';
   ```

## 📦 3. Install required packages
Install dependency packages with either npm or yarn but not both by running either:

`npm install`

or

`yarn`

The lockfile will appear in a root directory after installation.

### 🔐 3.1 Notes about lockfiles: 
npm and yarn lockfile don't go well together.
If you find a two lockfiles in your directory, which are `yarn.lock` or `package-json.lock`. Delete the one you don't use (or delete both). 
It will generate a new lockfile after running a start command with no impact. You're not supposed to modify these files.

Makre sure you have `/node_modules/` folder in your root directory after running the command. If you don't have this folder, repeat the step 3.

## ⚡ 4. Start a server!

Again, make sure you have `/node_modules/` folder in your root directory before running, otherwise it will not work. If you don't have this folder, repeat step 3 or open an issue.

```bash
npm start
```
or
```bash
yarn start
```

These scripts will run the script `node weather.js` (I set up in package.json)

The console output will provide some example and tips after you start a node server. You can open the link in a browser
or use `curl` in command line to get a temperature information.

### 4.1 How to use curl
It's a good method to use without a browser, just enter a commandline to get your result.

Make sure you have the following:
1. Server is running
2. API is working
3. `curl` commandline program is installed on your system
```bash
curl http://127.0.0.1:3000/temp/los%20angeles/california
```
![sample-la.png](images/sample-curl.png)

**💡 Tip:** `%20` replaces spacebar in URL, otherwise it won't work.

##  🛑 5. How to stop a server

Go to the command line where you started a server and press Ctrl+C or close an IDE.

---

## 💡 Tips

1. You can change or `curl` URL to any cities, and it's not case-sensitive.
2. If your city or state have spaces, replace the space with `%20`. 

**For an example:**

```bash
http://127.0.0.1:3000/temp/los%20angeles/california
http://127.0.0.1:3000/temp/new%20york%20city/new%20york
```
spacebar = `%20` in the url

---

## ❔ Questions

If you have any question, make a new issue on GitHub repository, and I will to get back to you as soon as possible.

---

## ✨ Credits

1. OpenGPT helped tremendously for me to get started by asking how to start a weather app, and it gave me useful
information regarding how to build an app (nothing direct, but a good start) and included a link to an API. 
2. https://openweathermap.com/api is awesome for providing free API (up to 1000 requests) for us to build on.
