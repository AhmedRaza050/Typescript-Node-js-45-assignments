"use strict";
// Q41-
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array.
function show_magicians(magician) {
    magician.forEach((name) => console.log(name));
}
let magician_name = ["Harry Porter", "hamoon", "goga"];
show_magicians(magician_name);
console.log("-------------------------------------------------------");
//Q42-
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
// magicians by adding the phrase the Great to each magician’s name.Call show_magicians() to see that the list has actually been modified
function show_magicians1(Magicians) {
    Magicians.forEach((name) => {
        console.log(name);
    });
}
function make_great1(magicians) {
    return magicians.map((name) => `the great ${name}`);
}
let magician_name1 = ["Harry porter", "hamoon", "goga"];
let magic = make_great1(magician_name);
show_magicians1(magic);
console.log("-------------------------------------------------------");
// Q43-
// Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the
// new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.
function show_magicians2(Magicians) {
    Magicians.forEach((name) => {
        console.log(name);
    });
}
function make_great2(magicians) {
    return magicians.map((name) => `the great ${name}`);
}
let magician_name2 = ["Harry porter", "hamoon", "goga"];
let copy_magician_name = magician_name2.slice();
let copy_great_magician = make_great2(copy_magician_name);
show_magicians2(copy_great_magician);
show_magicians(magician_name);
console.log("-------------------------------------------------------");
// Q44-
// Sandwiches: Write a function that
// accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function
// call provides, and it should print a summary of the sandwich that s being ordered. Call the function three times, using a different number
// of arguments each time.
function make_sandwish(...items) {
    console.log("\n\tmaking a sandwich of the following items\n");
    items.forEach((singleItem) => console.log(`- ${singleItem}`));
    console.log("enjoy your sandwich");
}
make_sandwish("bread", "chicken", "mayo");
make_sandwish("bread", "butter");
make_sandwish("bread", "chicken", "egg", "mayo", "cheese", "luttuce", "tomato");
console.log("-------------------------------------------------------");
function createcar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const MyCar = createcar("toyota", "corolla", {
    sunroof: "yes",
    Year: 2024,
});
console.log(MyCar);
