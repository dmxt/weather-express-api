const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/temp/:city/:state', async (req, res) => {
  const { city, state } = req.params;
  const apiKey = 'MY_API_KEY'; // replace MY_API_KEY with your api key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=imperial`;

  try {
    const response = await axios.get(apiUrl);
    const temperature = response.data.main.temp;
    res.send(`The temperature in ${city}, ${state} is ${temperature}°F.`);
  } catch (error) {
    console.error(error);
    res.status(500).send('<h1>Error getting temperature data!</h1> ' +
      '<p>1. Make sure you spell city and state correctly.</p>' +
      '<p>2. If the city or state have a space, replace the space with %20 in URL.</p>' +
      '<p>3. Perhaps you didn\'t wait long enough for the provided API to start working. It can take up to 5 hours.</p>' +
      '<hr />' +
      '<p><strong>If issue still persist, please open an issue ticket on GitHub. Thank you. :-)</strong></p>');
  }
});

/*
 * Tips:
 * City and state in URL is not case-sensitive.
 * To add spaces in URL, put %20 instead of a space.
 */

app.listen(port, () => {
  console.log(`Server running on ${port}`)
  console.log(``)
  console.log(`Tips:\n1. City and state in URL is not case-sensitive.\n2. Use %20 instead of a space.`)
  console.log(``)
  console.log(`Examples:`)
  console.log(`Miami, FL: http://127.0.0.1:${port}/temp/Miami/Florida`)
  console.log(`Las Vegas, NV: http://127.0.0.1:${port}/temp/Las%20Vegas/Nevada`)
  console.log(`Seattle, WA: http://127.0.0.1:${port}/temp/Seattle/Washington`)
});
