console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var added = notes.add(6, 4);
console.log(added);

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);