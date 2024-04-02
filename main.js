#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1324;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "checkbalance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        //= -= +=
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + myBalance);
        console.log(`Your remaining balance is, ${myBalance}`);
    }
}
else {
    console.log("Incorret pin number");
}
