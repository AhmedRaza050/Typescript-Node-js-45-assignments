"use strict";
//Q21- They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let Person = {
    name: "Abdul Rafey",
    gender: "Male",
    age: 19,
};
console.log(Person);
console.log("-----------------------------------------------");
// Q22- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in
// one of your programs to produce an index error. Make sure you correct the error before closing the program.
const Days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
];
// console.log(Days{7});
console.log(Days[6]);
console.log("-----------------------------------------------");
// Q-23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of
//  each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "civic";
console.log("Is car=='civic? I predict True");
console.log(car == "civic");
console.log("Is car != 'Honda City'? I predict true");
console.log(car != "Honda City");
console.log("Is car.length == 5? I preict true");
console.log(car.length == 5);
console.log("Is car.length >= 5? I preict true");
console.log(car.length >= 5);
console.log("Is car != 'civic' || car.length < 5? I predict true");
console.log(car != "civic" || car.length < 5);
console.log("Is car != 'civic' && car.length < 5? I predict false");
console.log(car != "civic" && car.length < 5);
console.log("Is car == 'suzuki'? I predict false");
console.log(car == "suzuki");
console.log("Is car != 'suzuki' && car.length > 5? I predict false");
console.log(car != "suzuki" && car.length > 5);
console.log("Is car === suzuki || car.length > 5? I predict false");
console.log(car === "suzuki" || car.length > 5);
console.log("Is car != 'civic'? I predict false");
console.log(car != "civic");
console.log("-----------------------------------------------");
//Q24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array// Q24-
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let name_1 = "Ahmed Raza";
let name_2 = "Abdul Rafey";
let name_3 = "Muhammad Sufyan";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
let age_1 = 18;
let age_2 = 25;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 25) {
    console.log("eligible for vote older category");
}
if (age_1 <= age_2) {
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
if (age_1 == 18 && age_2 == 25) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 25) {
    console.log("person is eligible not for vote");
}
let country = ["Pakistan", "India", "England", "Turkey"];
if (country.includes("Pakistan")) {
    console.log("Pakistan is in country list");
}
if (!country.includes("America")) {
    console.log("America is not include is an array");
}
console.log("-----------------------------------------------");
//Q25- Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green',
//  'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_Color = "green";
if (alien_Color == "green")
    console.log("you earned 5 points");
let alien_color1 = "red";
if (alien_color1 == "green")
    console.log("no output");
console.log("-----------------------------------------------");
// Q26-
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("player just earned 5 point for shooting the alien");
}
else {
    console.log("player just earned 10 point");
}
let alien_color3 = "red";
if (alien_color3 == "green") {
    console.log("player just earned 5 point for shooting the alien");
}
else {
    console.log("player just earned 10 point");
}
console.log("-----------------------------------------------");
// Q27-
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien
let alien_Color4 = "green";
if (alien_Color4 == "green") {
    console.log("the player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
let alien_Color5 = "yellow";
if (alien_Color4 == "yellow") {
    console.log("the player earned 10 points");
}
else {
    console.log("player earned 15 points");
}
let alien_Color6 = "red";
if (alien_Color4 == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("you are just a palyer");
}
console.log("-----------------------------------------------");
// Q28-
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 1;
if (age < 2) {
    console.log("the person is a baby");
}
else {
    console.log("person is toddler");
}
let age1 = 3;
if (age1 == 2 && age1 < 4) {
    console.log("the person is a toddler");
}
else {
    console.log("the person is a kid");
}
let age2 = 4;
if (age2 == 4 && age2 < 13) {
    console.log("the person is a kid");
}
else {
    console.log("the person is a teenager");
}
let age3 = 13;
if (age3 == 13 && age3 < 20) {
    console.log("the person is a teenager");
}
else {
    console.log("the person is a adult");
}
let age4 = 20;
if (age4 == 20 && age4 < 65) {
    console.log("the person is a adult");
}
else {
    console.log("the person is a elder");
}
let age5 = 65;
if (age5 == 65) {
    console.log("the person is a elder");
}
else {
    console.log("the person is a senior citizen");
}
console.log("-----------------------------------------------");
// Q29-
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits
// in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
//  the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Banana", "Apple", "Mango"];
if (favorite_fruits.includes("Banana")) {
    console.log("you really like Banana");
}
if (favorite_fruits.includes("Apple")) {
    console.log("you really like Apple");
}
if (favorite_fruits.includes("Mango")) {
    console.log("you really like Mango");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("you really like kiwi");
}
if (favorite_fruits.includes("peach")) {
    console.log("you really like peach");
}
console.log("-----------------------------------------------");
// Q30-
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print
//  a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = [
    "Admin",
    "Ahmed Raza",
    "Abdul Rafey",
    "Muhammad Sufyan",
    "Muhammad Usman",
];
for (let user in users) {
    if (user == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, Thank you for logging in again`);
    }
}
console.log("-----------------------------------------------");
