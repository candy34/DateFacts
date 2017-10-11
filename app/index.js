const moment = require ('moment');

const chalk = require("chalk");

let seconds = moment().seconds();
let minutes = moment().minutes();
let hours = moment().hours();

const secondsOfDay = function secondsOfDay(){
  return ((seconds )+ (minutes*60) + (hours*60*60))
}
const response = function response () {
  if (moment().isDST() ===true){
    return "is";
  } else {
    return "is not";
  }
const leap = function leap() {
  if (moment().isLeapYear() ===true){
    return "is";
  } else {
    return "is not";
  }
}
}
console.log("It is" + chalk.blue.bold(moment().format("dddd LL LTS")) + ".");
console.log("It is the" + chalk.magenta.bold(moment().dayOfYear()) + chalk.magenta.bold("th") + " day of the year.");
console.log("It is" + chalk.cyan.bold(secondsOfDay()) + "seconds into the day.");
console.log("It" + chalk.green.bold(response()) + "during Dalight Savings Time.");
console.log("It" + chalk.red.bold(moment().isLeapYear() ) + "a leap year.");
