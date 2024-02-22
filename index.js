const inquirer = require('inquirer');
const connection = require('./db/connection');

function mainMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]).then((answers) => {
    switch (answers.action) {
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'View all roles':
        viewAllRoles();
        break;
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployeeRole();
        break;
      case 'Exit':
        connection.end();
        break;
      default:
        break;
    }
  });
}

function viewAllDepartments() {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      mainMenu();
    });
  }
  

function viewAllRoles() {
  // Placeholder for the function to view all roles
  console.log('Viewing all roles...');
  mainMenu();
}

function viewAllEmployees() {
  // Placeholder for the function to view all employees
  console.log('Viewing all employees...');
  mainMenu();
}

function addDepartment() {
  // Placeholder for the function to add a department
  console.log('Adding a department...');
  mainMenu();
}

function addRole() {
  // Placeholder for the function to add a role
  console.log('Adding a role...');
  mainMenu();
}

function addEmployee() {
  // Placeholder for the function to add an employee
  console.log('Adding an employee...');
  mainMenu();
}

function updateEmployeeRole() {
  // Placeholder for the function to update an employee's role
  console.log('Updating an employee role...');
  mainMenu();
}

mainMenu();
