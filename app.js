// Declare Node.js dependencies 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

// Declare the output directory and path for the team.html file created by the app
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Declare an empty array to store the employees added from user input
let employees = [];

// Declare an undefined variable to store the employee to be added from current user prompt
let employee;

// Declare the first set of questions to add the team manager's info
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

// Declare the set of questions to gather an engineer's info
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

// Declare the set of questions to gather an intern's info
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

// Function to prompt the user with questions in the command-line and add employee to the employees array
const userPrompt = (questions) => {
    inquirer
        .prompt(
            questions
        )
        // Promise to perform after user has been prompted with questions
        .then((response) => {

            // Switch statement to create a new Engineer, Intern, or Manager depending upon 
            // the set of questions asked and push that employee to the employees array
            switch (questions){
                case engineerQuestions:
                    employee = new Engineer (response.name, response.id, response.email, response.github);
                    employees.push(employee);
                    break;

                case internQuestions:
                    employee = new Intern (response.name, response.id, response.email, response.school);
                    employees.push(employee);
                    break;

                default: 
                    employee = new Manager (response.name, response.id, response.email, response.officeNumber);
                    employees.push(employee);
            }
            
            // Switch statement to repeat user prompt via command-line with the appropriate questions
            // depending upon if the user wants to add another employee and 
            // what type of employee they want to add to the team
            switch (response.add){
                case "Engineer":
                    userPrompt(engineerQuestions);
                    break;

                case "Intern":
                    userPrompt(internQuestions);
                    break;

                // When the user is done adding employees, use the render module to create the html file
                // and output it to the output path
                default:
                    const team = render(employees);
                    fs.writeFile(outputPath, team, err => err ? err : console.log("File Successfully Written!"));
            }

        })
};

// Inital call of the userPrompt function
userPrompt(questions);


