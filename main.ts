#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance =10000;
let myPin =2233;

console.log("Welcome To Faizan Bhatti");

let pinAnswer =await inquirer.prompt([
    {
        name:"pinCode",
        type:"number",
        message:"Enter Your pin Code:"

    }
])
if(pinAnswer.pinCode === myPin){
    console.log("Your Pin code is Correct!");

    let operationAns =await inquirer.prompt([
        {
            name:"operation",
            type:"list",
            message:"Please select your option",
            choices:["Withdraw Amount","Fast Cash","Check Balance"]
        }
    ])
    if(operationAns.operation === "Withdraw Amount"){
        let amountAns =await inquirer.prompt([
            {
                name:"amount",
                type:"number",
                message:"Enter Your Amount",  
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance")
            
        } else{
             myBalance -= amountAns.amount
            console.log(`Your Remaining Balance is: ${myBalance}`)
        }
    }else if(operationAns.operation === "Fast Cash"){
        let fastcashAns =await inquirer.prompt([
            {
                name:"fashcash",
                type:"list",
                choices:["1000","2000","5000","10000"],
                message:"Select your Amount "
            }
        ]);  
        myBalance -= fastcashAns.fashcash
        console.log(`You have Succesfuly withdrawal: ${fastcashAns.fashcash}\nYour Remaining Balance is:${myBalance}`) 
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`)
    }
} 
else{
    console.log("Incorrect Pin Code!")
}