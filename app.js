const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let employees = [];
let employee;

const questions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team manager's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Do you want to add a team member?',
        choices: [
            "Engineer",
            "Intern",
            "Done"
        ],
        loop: false,
        name: 'add'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github',
    },
    {
        type: 'list',
        message: 'Do you want to add a team member?',
        choices: [
            "Engineer",
            "Intern",
            "Done"
        ],
        loop: false,
        name: 'add'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school',
    },
    {
        type: 'list',
        message: 'Do you want to add a team member?',
        choices: [
            "Engineer",
            "Intern",
            "Done"
        ],
        loop: false,
        name: 'add'
    }
]

const userPrompt = (questions) => {
    inquirer
        .prompt(
            questions
        )
        .then((response) => {
            // console.log(response);
            switch (questions){
                case engineerQuestions:
                    response.role = "Engineer";
                    employee = new Engineer (response.name, response.id, response.email, response.github);
                    employees.push(employee);
                    // console.log(employees);
                    break;

                case internQuestions:
                    response.role = "Intern";
                    employee = new Intern (response.name, response.id, response.email, response.school);
                    employees.push(employee);
                    // console.log(employees);
                    break;

                default: 
                    response.role = "Manager";
                    employee = new Manager (response.name, response.id, response.email, response.officeNumber);
                    employees.push(employee);
                    // console.log(employees);
            }
            
            switch (response.add){
                case "Engineer":
                    userPrompt(engineerQuestions);
                    break;

                case "Intern":
                    userPrompt(internQuestions);
                    break;

                default:
                    console.log(employees);
                    const team = render(employees);
                    console.log(team);
                    //return team;
            }

        })
};

userPrompt(questions);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
