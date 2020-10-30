var inquirer = require("inquirer");
var orm = require("./orm");
var Table = require('cli-table');
 
// initilizer when node app.js is run in terminal
init();
// starts the action function
function init(){
 action();
}
// prompts user to view, add, or update
function action(){
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "what would you like to do?",
        choices: [
            "View",
            "Add",
            "Update"
        ]
    }).then(function(answer){
        switch (answer.action) {
            case "View":
            whatToView();
            break;

            case "Add":
            whatToAdd();
            break;

            case "Update":
            whatToUpdate();
            break;
        }
    }).catch(error => {
        if(error) throw error 
});
}
// prompts user what to add (dep, role, employee) and runs function based on what is inputted by user
function whatToAdd(){
    inquirer
    .prompt({
      name: "add",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add department?",
        "Add role?",
        "Add employee?"
      ]
    })
    .then(function(answer) {
      switch (answer.add) {
      case "Add department?":
        addDepartment();
        break;

      case "Add role?":
        addRole();
        break;

      case "Add employee?":
        addEmployee();
        break;
}}).catch(error => {
    if(error) throw error 
});;
}
// adds a department when the user has selected to add department
function addDepartment(){
    inquirer
    .prompt([{
        name: "dID",
        type: "input",
        message: "Enter ID:"
    },
    {
        name: "dName",
        type: "input",
        message: "Enter department name:"
    }
    ]).then(function(inputs){
        console.log(inputs);
        // orm.addDep(inputs.dId,inputs.dName);
        orm.addDep(inputs.dID, inputs.dName);
        console.log("added department");
    }).catch(error => {
        if(error) throw error 
});
}
// adds a role when the user has selected to add a role
function addRole(){
    inquirer
    .prompt([{
        name: "rID",
        type: "input",
        message: "Enter ID:"
    },
    {
        name: "rTitle",
        type: "input",
        message: "Enter role title:"
    },
    {
        name: "rSalary",
        type: "input",
        message: "Enter role salary:"
    },
    {
        name: "rDepID",
        type: "input",
        message: "Enter department ID:"
    },
    ]).then(function(inputs){
        console.log(inputs);
        // orm.addDep(inputs.dId,inputs.dName);
        orm.addRL(inputs.rID, inputs.rTitle, inputs.rSalary, inputs.rDepID);
        console.log("added role");
    }).catch(error => {
        if(error) throw error 
});
}
// adds a employee when the user has selected to add an employee
function addEmployee(){
    inquirer
    .prompt([{
        name: "eID",
        type: "input",
        message: "Enter ID:"
    },
    {
        name: "eFN",
        type: "input",
        message: "Enter first name:"
    },
    {
        name: "eLN",
        type: "input",
        message: "Enter last name:"
    },
    {
        name: "eRoleID",
        type: "input",
        message: "Enter role ID:"
    },
    {
        name: "eManID",
        type: "input",
        message: "Enter manager ID:"
    }
    ]).then(function(inputs){
        console.log(inputs);
        orm.addEmp(inputs.eID, inputs.eFN, inputs.eLN, inputs.eRoleID, inputs.eManID);
        console.log("added employee");
    }).catch(error => {
        if(error) throw error 
});
}
// asks user what to update and then runs the function based on response
function whatToUpdate(){
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "what would you like to update?",
        choices: [
            "department",
            "role",
            "employee"
        ]
    }).then(function(answers){
        switch (answers.action){
            case "department":
            console.log("depart")
            updateDep();
            break;

            case "role":
            updateRole();
            break;

            case "employee":
            updateEmp();
            break;
        }
    })
}
// updates the department table
function updateDep(){
    inquirer
    .prompt([{
        type: "list",
        message: "what would you like to update?",
        name: "col",
        choices: [
            "id",
            "name"
        ]},
        {
            type: "input",
            message: "what value would you like to update it with?",
            name: "value",
        },
        {
            type: "list",
            message: "what condition?",
            name: "condCol",
            choices: [
                "id",
                "name"
            ]
        },
        {
            type: "input",
            name: "condVal",
            message: "For what conditional value?"
        }
    ]).then(function(answers){
        orm.update("department",answers.col, answers.value, answers.condCol, answers.condVal);
        console.log("updated department");
    })
}
// update dates the role table
function updateRole(){
    inquirer
    .prompt([{
        type: "list",
        message: "what would you like to update?",
        name: "col",
        choices: [
            "id",
            "title",
            "salary",
            "department_id"
        ]},
        {
            type: "input",
            message: "what value would you like to update it with?",
            name: "value",
        },
        {
            type: "list",
            message: "what condition?",
            name: "condCol",
            choices: [
                "id",
                "title",
                "salary",
                "department_id"
            ]
        },
        {
            type: "input",
            name: "condVal",
            message: "For what conditional value?"
        }
    ]).then(function(answers){
        orm.update("role",answers.col, answers.value, answers.condCol, answers.condVal);
        console.log("updated role");
    })
}
// updates the employee table
function updateEmp(){
    inquirer
    .prompt([{
        type: "list",
        message: "what would you like to update?",
        name: "col",
        choices: [
            "id",
            "first_name",
            "last_name",
            "role_id",
            "manager_id"
        ]},
        {
            type: "input",
            message: "what value would you like to update it with?",
            name: "value",
        },
        {
            type: "list",
            message: "what condition?",
            name: "condCol",
            choices: [
            "id",
            "first_name",
            "last_name",
            "role_id",
            "manager_id"
            ]
        },
        {
            type: "input",
            name: "condVal",
            message: "For what conditional value?"
        }
    ]).then(function(answers){
        orm.update("employee",answers.col, answers.value, answers.condCol, answers.condVal);
        console.log("updated employee");
    })
}
// asks users what table to display and runs a function based on user input
function whatToView(){
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "What table would you like to view?",
        choices: [
            "department",
            "role",
            "employee"
        ]
    }).then(function(answer){
        switch(answer.action){
            case "department":
            viewDepartment();
            break;

            case "role":
            viewRole();
            break;

            case "employee":
            viewEmployee();
            break;
        }
    })
}
// creates a console visible table of department for the user using db as source
function viewDepartment(){
orm.select("department", function(res){
    var data = res;
    var table = new Table({
        head: ["id", "name"],
        colWidths: [10, 30]
    })
    for(let i = 0;i<data.length;i++){
        table.push(
            [data[i].id, data[i].name]
        )
    }
    console.log(table.toString());
});
}
// creates a console visible table of role for the user using db as source
function viewRole(){
orm.select("role", function(res){
    var data = res;
    var table = new Table({
        head: ["id", "title", "salary", "department_id"],
        colWidths: [10, 30, 30, 30]
    })
    for(let i = 0;i<data.length;i++){
        table.push(
            [data[i].id, data[i].title, data[i].salary, data[i].department_id]
        )
    }
    console.log(table.toString());
});
}
// creates a console visible table of employee for the user using db as source
function viewEmployee(){
orm.select("employee", function(res){
    var data = res;
    var table = new Table({
        head: ["id", "first_name", "last_name","role_id", "manager_id"],
        colWidths: [5, 20, 20, 20, 20]
    })
    for(let i = 0;i<data.length;i++){
        table.push(
            [data[i].id, data[i].first_name, data[i].last_name, data[i].role_id, data[i].manager_id]
        )
    }
    console.log(table.toString());
});
}