var orm = require("../config/orm.js");

var burger = {

  // for GET route 
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // for POST route
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // for PUT route
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // for DELETE route
  delete: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }

};

// ==============EXPORT================

// Export database functions for burgers_controllers.js
module.exports = burger;