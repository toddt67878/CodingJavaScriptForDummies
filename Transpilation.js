class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;

    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    static generatePassword() {
        return Math.floor(Math.random() * 10000);
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this.certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
let nurseDurant = new Nurse('Durant', ['Orthopedics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

module.exports = HospitalEmployee;

// BROWSER COMPATIBILITY AND TRANSPILATION

// caniuse.com  A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features. You will learn how to use it to look up ES6 feature support
// The website caniuse.com is the best resource for finding browser compatibility information

// Babel  A Javascript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers
// Babel that transpiles ES6 JavaScript to ES5
// TRANSPILATION: process of converting one programming language to another

// JavaScript ES6 is syntactically more similar to other object-oriented programming language

// The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code)

// The initial JavaScript project file structure is:
// project
// |_ src
// |___ main.js

// node package manager (npm): access and manage Node packages
// Node packages: directories that contain JavaScript code written by other developers
// You can use these packages to reduce duplication of work and avoid bugs

// package.json file contains information about the current JavaScript project
// Metadata  includes a project title, description, authors, and more
// List of node packages required for the project  If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list
// Key-value pairs for command line scripts  You can use npm to run these shorthand scripts to perform some process

// After you run npm init your directory structure will contain the following files and folders:
// project
// |_ src
// |___ main.js
// |_ package.json
// npm adds the package.json file to the same level as the src directory.


// $ npm install babel-cli -D
// $ npm install babel-preset-env -D
// The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5

// You can specify the initial JavaScript version inside of a file named .babelrc.
// In your root directory, you can run "touch .babelrc" to create this file.

// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "build": "babel src -d lib"
// }

// In the "scripts" object above, we add a property called "build". 
// The property's value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. 

// babel  The Babel command call responsible for transpiling code.
// src  Instructs Babel to transpile all JavaScript code inside the src directory.
// -d  Instructs Babel to write the transpiled code to a directory.
// lib  Babel writes the transpiled code to a directory called lib



// npm init  A terminal command that creates a package.json file.
// package.json  A file that contains information about a JavaScript project.
// npm install  A command that installs Node packages.
// babel-cli  A Node package that contains command line tools for Babel.
// babel-preset-env  A Node package that contains ES6+ to ES5 syntax mapping information.
// .babelrc  A file that specifies the version of the JavaScript source code.
// "build" script  A package.json script that you use to tranpsile ES6+ code to ES5.
// npm run build  A command that runs the build script and transpiles ES6+ code to ES5.

// MODULES are reusable pieces of code that can be exported from one program and imported for use in another program

// let Menu = {};
// Menu.specialty = "Roasted Beet Burger with Mint Sauce";

// module.exports = Menu;

// let Menu = {}; creates the object that represents the module Menu
// The statement contains an uppercase variable named Menu which is set equal to an object

// Menu.specialty is defined as a property of the Menu module
// We add data to the Menu object by setting properties on that object, and giving the properties a value

// "Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.

// module.exports = Menu; exports the Menu object as a module
// module is a variable that represents the module, and EXPORTS exposes the module as an object



// REQUIRE(): f that enables a module to load by passing in the module's filepath as a parameter

// If you want the module to control the menu's data and behavior, and we want a separate file to handle placing an order then create a separate file "order.js" and import the Menu module from "menu.js" to "order.js" using "require()":

// const Menu = require('./menu.js');

// function placeOrder() {
//   console.log('My order is: ' + Menu.specialty);
// }

// placeOrder();

// In "order.js" we import the module by creating a variable with "const" Menu = to the value of the require() f
// Set to any variable name we like, such as menuItems

// './menu.js' is the argument we pass to the require() function
// The placeOrder() f then uses the Menu module in its f def
// By calling Menu.specialty, we access the property specialty defined in the Menu module

// INVOKE the function using placeOrder()

// IMPORT A MODULE:
// 1. Import the module
// 2. Use the module and its properties within a program


// 1. In missionControl.js use the require() function to import the Airplane module from 1-airplane.js.
// 2. In missionControl.js, define a function displayAirplane(). In the function, log the value of the module and its property to the console
// 3. Call the displayAirplane() function. In the console, you should see the name of the airplane you defined in the module

// const Airplane = require('./1-airplane.js');

// function displayAirplane () {
// 	console.log(Airplane.myAirplane);
// }

// displayAirplane();


// create an object named Airplane
// Set module.exports equal to an empty object
// Within the object, create a KEY called myAirplane and set it to a value "CloudJet"
// Within module.exports, create another KEY displayAirplane and set it to an anonymous f The f should use the this statement to return myAirplane

// let Airplane = {};

// module.exports = {
// 	myAirplane: "CloudJet",

//   displayAirplane: function () {
// 	return this.myAirplane;
// }
// };

// // In 2-missionControl.js use the require() function to import the Airplane MODULE
// const Airplane = require('./2-airplane.js');



// ES6: default export and named export

// Export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types
// Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules


// let Airplane = {};

// Airplane.availableAirplanes = [
//   { 
//     name: 'AeroJet',
//   	fuelCapacity: 800
//   },
//   {
//     name: 'SkyJet',
//     fuelCapacity: 500
// 	}
// ];

// export default Airplane;


// In our order.js example, we import an object like this
// import Menu from './menu';
// 1. import keyword begins statement
// 2. keyword "Menu" specifies name of var to store default export
// 3. "from" specifies where to load the module from
// 4. './menu' : name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file.



// import Airplane from './airplane';

// function displayFuelCapacity() {
//   Airplane.availableAirplanes.forEach(function(element){
//   console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
//   });
// }

// displayFuelCapacity();

// 1. Use import keyword to import the Airplane module
// 2. Define a function displayFuelCapacity()
// 3. Within body of the displayFuelCapacity function, use forEach() to iterate over Airplane.availableAirplanes array. forEach() should take an anonymous function as a parameter
// Pass in anonymous function a parameter of element.



// let specialty = '';
// function isVegetarian() {
// }; 
// function isLowSodium() {
// }; 

// export { specialty, isVegetarian };

// specialty is a string object: ''
// while isVegetarian and isLowSodium are objects in the form of f
// Every function is in fact a function object

// export { specialty, isVegetarian }; exports objects by their variable names
// Notice the keyword "export" is the prefix
// specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified




// IMPORT
// import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements}  from './airplane';

// function displaySpeedRangeStatus() {
// 	availableAirplanes.forEach(function(element){
//     console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed,flightRequirements.requiredSpeedRange));
//   });
// }
// //(element name) + 'meets speed range requirements: ' + (true/false)

// function displayFuelCapacity() {
//   availableAirplanes.forEach(function(element){
//   console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
//   });
// }

// displayFuelCapacity();

// function displayStaffStatus() {

// availableAirplanes.forEach(function(element) {
//   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
// });


// };

// displayStaffStatus();
// displaySpeedRangeStatus();


// // EXPORT
// export let availableAirplanes = [
// {
//   name: 'AeroJet',
//   fuelCapacity: 800,
//   availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
//   maxSpeed: 1200,
//   minSpeed: 300
//   }, 
// {
//   name: 'SkyJet',
//   fuelCapacity: 500,
//   availableStaff: ['pilots', 'flightAttendants'],
//   maxSpeed: 800,
//   minSpeed: 200
// },
// ];

// export let flightRequirements = {	
// 	requiredStaff: 4,
//   requiredSpeedRange: 700,
// }

// export function meetsStaffRequirements(availableStaff, requiredStaff) {
// 	if (availableStaff.length >= requiredStaff){
//     return true
//   } else {
// 	return false
// 	}
// }; 


// export function
// meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
//   let range = maxSpeed - minSpeed;
//   if (range > requiredSpeedRange) {
// 	return true
// } else {
// 	return false
// }
// };


// modify the console.log() statement to output:
// (element name) + ' meets staff requirements: ' + (true/false)
// To do this, we call the meetsStaffRequirements method, passing in two parameters element.availableStaff and flightRequirements.requiredStaff

// In the body of the meetsStaffRequirements() function, write logic to see if the length of the availableStaff array is greater than or equal to requiredStaff


//EXPORT 'AS'
// Named exports offer a way to change the name of variables when we export/import them; with "as" keyword

// module.exports_exports the module for use in another program
// require() imports the module for use in the current program

// default exports use export default to export JavaScript objects, functions, and primitive data types.
// named exports use the export keyword to export data in variables.
// named exports can be aliased with the as keyword.
// import is a keyword that imports any object, function, or data type


/*
 */
// long messages are broken into smaller messages that are added to the queue when they are ready to be run

// JavaScript handles multiple requests is called its event loop
// Technologies called Asynchronous JavaScript and XML, or AJAX


function fun() {
    console.log('hi');
    setTimeout(() => {
        console.log('how are you');
    }, 2500);
    console.log('hi 2');
}

fun();


// Four commonly types of HTTP requests - GET, POST, PUT, and DELETE
GET requests RECIEVE information from other sites by sending a query
A GET request is like a search

POST requests can change information on another site and will receive information or data in response
POST requests introduce new information to another website

boilerplate code
for an AJAX GET request using an XMLHttpRequest objec
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
    }
}

xhr.open('GET', url);
xhr.send();