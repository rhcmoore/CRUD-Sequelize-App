// Import MySQL connection.
var connection = require("../config/connection.js");

// ==============HELPER FUNCTIONS==================

// for CREATE 
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// for UPDATE 
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// ===============METHODS=================
var orm = {

  // Method to select all burgers from database
  selectAll: function (input, cb) {
    var queryString = `SELECT * FROM ${input};`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  // Method to insert one burger to database
  insertOne: function (table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  // Method to update one burger in database
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  // Method to delete one burger in database
  deleteOne: function(table, condition, cb) {
    var queryString = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
  
}

// ==============EXPORT================

// Export the orm object for the model
module.exports = orm;