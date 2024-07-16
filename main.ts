#! /usr/bin/env node
import inquirer from "inquirer";
let studentManagementSystem: any[] = [];
while (true) {
    let selectOperation = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Select the action you want to perform: ",
        choices: ["View Student", "Student Enrollment", "Remove Student", "TimeTable Management", "Fee Management", "Exit"]
    })
    if (selectOperation.operation == "Exit") {
        console.log("Exited...");
        break;
      } else if (selectOperation.operation == "View Student") {
        console.log("STUDENTS List for BSCS: ");
        console.log("----------------------");
        console.log("----------------------");
        for (let i = 0; i < studentManagementSystem.length; i++) {
          console.log(i, studentManagementSystem[i]);
          if ((i + 1) % 3 === 0) {
            console.log('---------------------');
        }
        }
        console.log("----------------------");

        let again = await inquirer.prompt({
                name: "confirm",
                type: "confirm",
                message: "Want to see options again? ",
        })
        if (!again.confirm) {
            console.log("Exited...");
            break;
      }
    }else if (selectOperation.operation == "Student Enrollment") {
        let studentEnrollment = await inquirer.prompt([
          {
            name: "add",
            type: "input",
            message: "Enter Name and Registration ID of student to add (i.e; Ahmed(00000)): ",
          },
    
          {
            name: "confirm",
            type: "confirm",
            message: "Want to see options again? ",
          },
        ]);
    
        studentManagementSystem.push(studentEnrollment.add);
        console.log("Student added successfully!");
        console.log(studentManagementSystem);
        if (!studentEnrollment.confirm) {
            console.log("Exited...");
          break;
        }
      } else if (selectOperation.operation == "Remove Student") {
        let removeStudent = await inquirer.prompt([
          {
            name: "remove",
            type: "input",
            message: "Enter the index of the student details you want to remove: ",
          },
          {
            name: "confirm",
            type: "confirm",
            message: "Want to see options again? ",
          }
        ]);
        studentManagementSystem.splice(removeStudent.remove, removeStudent.confirm);
        console.log("Student removed successfully!");
        console.log(studentManagementSystem);

        if (!removeStudent.confirm) {
            console.log("Exited...");
            break;
      }
    } else if (selectOperation.operation == "TimeTable Management"){
        let timeTableManagement = await inquirer.prompt([
            {
              name: "timeTable",
              type: "input",
              message: "Enter Name of courses with their timings to offer this student OR type Not Offering to show no courses is offered right now(i.e; AI(Wed: 11:45-14:45)): ",
            },
      
            {
              name: "confirm",
              type: "confirm",
              message: "Want to see options again? ",
            },
          ]);
      
          studentManagementSystem.push(timeTableManagement.timeTable);
          console.log("TimeTable added successfully!");
          console.log(studentManagementSystem);
          if (!timeTableManagement.confirm) {
              console.log("Exited...");
            break;
          }
    } else if (selectOperation.operation == "Fee Management"){
        let perCredithourcost = 7500;
        let creditHours = await inquirer.prompt([
            {
              name: "credithrs",
              type: "input",
              message: "Enter Total creadit hours of the student's courses or 0 if no course is offered(i.e; 14): ",
            },
      
            {
              name: "confirm",
              type: "confirm",
              message: "Want to see options again? ",
            },
          ]);
          let TotalFee = perCredithourcost * creditHours.credithrs
      
          studentManagementSystem.push(TotalFee);
          console.log("Fees added successfully!");
          console.log(studentManagementSystem);
          if (!creditHours.confirm) {
              console.log("Exited...");
            break;
          }
    }
}
