const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=06cb779babb0f7fde143cfd776563c31&query=${
    (latitude, longitude)
  }`;
  request({ url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (res.body.error) {
      callback(res.body.error.info, undefined);
    } else {
      callback(undefined, {
        forecast: res.body.current.weather_descriptions[0],
        temperature: res.body.current.temperature,
        feelslike: res.body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
