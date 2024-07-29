#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;//Dollar

let myPin = 1324;

let pinAns = await inquirer.prompt(
   [ 
    {
    name: "pin",
    message: "enter your pin",
    type:"number",
}
    ]
);
if (pinAns.pin === myPin){
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw", "check balance","Fast Cash"],
            }

        ]
    );

    console.log(operationAns.operation);

    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message: "enter your amount",
                    type:"number",
                }
            ]
        )
if(amountAns.amount <= myBalance){
//= -= +=
     myBalance -=   amountAns.amount ;

     console.log(chalk.green(`Your remaining balance is: ${myBalance}`));
    }
    else(console.log(chalk.red("Insufficient Balance")))
}
 if (operationAns.operation === "check balance"){
      console.log(chalk.blue(`Your current balance is: ${myBalance}`));
}
if (operationAns.operation === "Fast Cash"){
    let CashAns = await inquirer.prompt(
    [
        {
            name:"Amount",
            message:"Choose your desired amount",
            type:"list",
            choices:["1000","2000","5000","1000"]
        }
    ]
    )
    myBalance -= CashAns.Amount
    console.log(chalk.yellow(`Your remaining balance is: ${myBalance}`));
}
   //==============================EISHA KANWAL==================================
   

}
else {
console.log(chalk.redBright("Incorret pin number"));
}
