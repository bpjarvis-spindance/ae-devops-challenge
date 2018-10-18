/**
 * Filename: server.js
 * Author: Bruce Jarvis
 * Description: Web application to return a value from a Redis cache
 */
 /*jslint node: true */
"use strict";

const express = require("express");
var redis = require("redis");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";
const REDIS_HOST = "cache";
const KEY_NAME = "app_name";
const APP_NAME = "AE DevOps Challenge";

var client = redis.createClient({host: REDIS_HOST});

/* Connect to Redis and initialize with a key/value pair */
function connectCache() {
  client.on("connect", function() {
    console.log("Redis client connected");
  });

  client.on("error", function (err) {
      console.log("Something went wrong " + err);
  });

  client.set(KEY_NAME, APP_NAME, redis.print);
  client.get(KEY_NAME, function (error, result) {
      if (error) {
          console.log(error);
          throw error;
      }
      console.log("GET result ->" + result);
  });
}

/* retrieve a key from redis and return via the response object */
function retrieveKey(res) {
  client.get(KEY_NAME, function (error, result) {
      if (error) {
          console.log(error);
          throw error;
      }
      res.send(JSON.stringify({"Application Name": result}));
  });
}

connectCache();

// App
const app = express();
app.get("/", (req, res) => {
  res.setHeader("Content-type", "application/json");
  retrieveKey(res);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
