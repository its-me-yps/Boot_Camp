var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

var axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/price',
  params: {
    Indices: 'NIFTY 50'
  },
  headers: {
    'X-RapidAPI-Key': '8250dca6aamshdce8f0f74f03112p1cf5d3jsnfb17200113c7',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

app.get("/", function (req, res) {
  res.sendFile("/Users/yashpratapsingh/Desktop/Boot Camp/frontend/simple.html");
});

app.get("/NIFTY50", function(req, res) {
  axios.request(options)
  .then(function(response) {
    res.json(response)
  })
});

app.post("/data", function (req, res) {
  var itemSelectedFromDropdown = req.body.companyName;
  axios.request(options)
    .then(function (response) {
      var dataFromResponse = response.data;
      for (var i = 0; i < dataFromResponse.length; i++) {
        if (dataFromResponse[i].symbol == itemSelectedFromDropdown) {
          var dataOfStock = dataFromResponse[i];
          res.json(dataOfStock);
          console.log(dataOfStock);
          return;
        }
      }
      res.status(404).json({ error: "Stock not found" });
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    });
});

var port = 3000;
app.listen(port, function () {
  console.log("Server started successfully at port 3000!");
});


