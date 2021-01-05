const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Kajiado", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(-75.70564388, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
