// Import express
var express = require("express");

// Import the burger.js model
var burger = require("../models/burger.js");

var router = express.Router();

// ==============ROUTES================

// Handle GET request
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {burgers: data};
    res.render("index", hbsObject);
  });
});

// Handle POST request
router.post("/api/burgers", function(req, res) {
  burger.create(
    ["burger_name", "devoured"], 
    [req.body.burger_name, req.body.devoured], 
    function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
});

// Handle PUT request
router.put("/api/burgers/:id", function(req, res) {
  var condition = `id = ${req.params.id}`;
  burger.update(
    {devoured: req.body.devoured}, 
    condition, 
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Handle DELETE request
router.delete("/api/burgers/:id", function(req, res) {
  var condition = `id = ${req.params.id}`;
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// ==============EXPORT================

// Export routes for server.js
module.exports = router;