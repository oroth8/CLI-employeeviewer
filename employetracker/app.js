var inquirer = require("inquirer");
var orm = require("./orm");

init();

function init(){
 action();
}

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
    })
}

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
}});
}

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


// update: function(tableName, colName, value, condCol, condVal) {
//     var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
//     connection.query(queryString, [tableName, colName, value, condCol], 


// what would you like to add?
    // department, roles, employees? 
// what deparment
    // front-end = 10, back-end = 20
