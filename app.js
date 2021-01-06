const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const locationCmd = process.argv[2];

if (locationCmd) {
  geocode(locationCmd, (error, { location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(location, (error, forecastData) => {
      if (error) {
        return console.log("Error", error);
      }
      console.log("Your location is ", location);
      console.log(forecastData);
    });
  });
} else {
  console.log("Enter valid location");
}
