#! /usr/bin/env node 

import inquirer from "inquirer"

// Choose a Random Number
// User's guess a number
// Compare Users number with computer choosen random number and print final answer

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([{
    name: "usersGuessNumber",
    type: "number",
    message: "Please guess a right number between 1 to 10:"
    } 
])  
if (answer.usersGuessNumber === randomNumber){
    console.log("Congragulations! You Won.");
} else { 
    console.log("Try again, You guessed a wrong number.")
         }

