var connection = require("./connection");
var mysql = require("mysql");

var orm = {
// add department connection
addDep: function(id, name) {
    var queryString = "INSERT INTO department (id, name) VALUES (?, ?)";
    connection.query(queryString, [id, name], function(err, result) {
      if (err) throw err;
      console.log(result);
    });},
// add role connection
addRL: function(id, title, salary, department_id) {
    var queryString = "INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)";
    connection.query(queryString, [id, title, salary, department_id], function(err, result) {
        if (err) throw err;
        console.log(result);
    });},
// add employee connection
addEmp: function(id, first_name, last_name, role_id, manager_id) {
    var queryString = "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)";
    connection.query(queryString, [id, first_name, last_name, role_id, manager_id], function(err, result) {
        if (err) throw err;
        console.log(result);
    });},
// update connection
update: function(tableName, colName, value, condCol, condVal) {
    var queryString = "UPDATE ?? SET ?? = (?) WHERE ?? = (?);";
    connection.query(queryString, [tableName, colName, value, condCol, condVal], function(err, result) {
        if (err) throw err;
        console.log(result);
    });},
// selector connection
select: function(tableName, cb) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableName], function(err, result) {
        if (err) throw err;
        cb(result);
        // console.log(result);
    });},
}  
module.exports = orm;