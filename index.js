#! /usr/bin/env node   
// Import Inquirer
import inquirer from "inquirer";
// Import Chalk 
import chalk from "chalk";
// Print message
console.log(chalk.bgBlueBright(`\n\t\t\t\t*Welcome TO AMT*\n`));
// Initial balance and PIN
let MY_Current_balance = 20000;
let Pin_key = 1234;
// Prompt user for PIN
let Password = await inquirer.prompt({
    name: "Pin",
    message: (chalk.bgGreen.red("Kindly Enter Your Pin")),
    type: "number"
});
// Check if entered PIN is correct 
if (Password.Pin == Pin_key) {
    console.log(chalk.bgYellow.blue('"Welcome To Your Account"'));
    // Prompt user to select an operation
    let Payement_Method = await inquirer.prompt({
        name: "Option",
        message: (chalk.blueBright.italic("Please Select Your One Operation")),
        type: "list",
        choices: ["cash balance", "withdraw", "Fast cash"]
    });
    // If user selects Check Balance option
    if (Payement_Method.Option == "cash balance") {
        console.log(chalk.bold.yellowBright.bgRed(`Your Current balance is : ${MY_Current_balance}`));
    }
    // Perform operation based on user's choice
    else if (Payement_Method.Option == "withdraw") {
        let Amount = await inquirer.prompt({
            name: "withdraw",
            message: (chalk.blue.bgRed("Enter amount you'd like to withdraw : ")),
            type: "number"
        });
        // MY Current balance And Insufficient balance
        if (Amount.withdraw > MY_Current_balance) {
            console.log(chalk.bgGreen.red(`Unable to process transaction! Your total balance is : ${MY_Current_balance}`));
        }
        else if (Amount.withdraw < MY_Current_balance) {
            Amount.withdraw = MY_Current_balance -= Amount.withdraw;
            console.log(chalk.green.bgWhite(`Your Remaining balance is : ${Amount.withdraw}`));
        }
        // Perform operation based on Fast cash
    }
    else if (Payement_Method.Option == "Fast cash") {
        let directly_cash = await inquirer.prompt({
            name: "Fast",
            message: (chalk.yellowBright("Please Select Your Amount")),
            type: "list",
            choices: ["5000", "10000", "15000", "20000"]
        });
        // fast cash Process
        MY_Current_balance = MY_Current_balance - directly_cash.Fast;
        console.log(chalk.bgRed.white("Your remaining balance is : " + MY_Current_balance));
    }
    // If entered PIN is incorrect
}
else {
    console.log(chalk.bgCyan("InCorrect Pin!!"));
}
/////////////////////////// THE END /////////////////////////// 
