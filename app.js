const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=06cb779babb0f7fde143cfd776563c31&query=Nairobi";

request({ url }, (err, res) => {
  const data = JSON.parse(res.body);
  console.log(data.current);
});
