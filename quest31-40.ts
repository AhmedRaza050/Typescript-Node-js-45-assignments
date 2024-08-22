// Q31-
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed
let user2: string[] = [
  "admin",
  "eric",
  "Ahmed Raza",
  "Abdul Rafey",
  "Muhammad Sufyan",
];
if (user2.length === 0) {
  console.log("we need to find some users!");
} else {
  for (let user of user2) {
    if (user === "admin") {
      console.log("Hello Admin, would you like to see a status report?");
    } else {
      console.log(`~Hello ${user} thank you for loginig in again`);
    }
  }
}
let user3: string[] = [];
if (user3.length === 0) {
  console.log("we need to find some user");
}
console.log(
  "--------------------------------------------------------------------"
);

//Q# 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will
// need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = [
  "admin",
  "eric",
  "Ahmed Raza",
  "Muhammad Sufyan",
  "Abdul Rafey",
];
let new_users: string[] = [
  "Muhammad Sufyan",
  "Abdul Rafey",
  "faizan",
  "hammad",
  "Abdul Rehman",
];
let current_users_lower: string[] = current_users.map((user) =>
  user.toLowerCase()
);

for (let new_user of new_users) {
  if (current_users_lower.includes(new_user.toLowerCase())) {
    console.log(`sorry ${new_users}, that name is taken`);
  } else {
    console.log(`yes ${new_users},still in available list`);
  }
}
console.log(
  "--------------------------------------------------------------------"
);

//Q33-
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th,
// except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read
//  "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let ordinalNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of ordinalNumber) {
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else if (number === 4) {
    console.log(`${number}th`);
  } else if (
    number === 5 ||
    number === 6 ||
    number === 7 ||
    number === 8 ||
    number === 9
  )
    console.log(`${number}th`);
}

console.log(
  "--------------------------------------------------------------------"
);

// Q34-
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the
// name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//  The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
//  such as I really love pizza!

let favorite_pizza: string[] = ["chickenTikka", "Fajita", "peproni"];

for (let pizza in favorite_pizza) {
  console.log(pizza);
}
for (let pizza in favorite_pizza) {
  console.log(`I really like ${pizza} pizza`);
}
console.log("I really love pizza");

console.log(
  "--------------------------------------------------------------------"
);

// Q35-
// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as
// Any of these animals would make a great pet!

let animals: string[] = ["cat", "dog", "lion", "cow"];
for (let animal of animals) {
  console.log(animal);
}
for (let animal of animals) {
  console.log(`A ${animal} has a tail`);
}
console.log("All of these are great pets! but i love cat more");

console.log(
  "--------------------------------------------------------------------"
);

// Q36-
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, text: string) {
  console.log(`you have order ${size} shirt that says ${text}`);
}
make_shirt("medium", '"Hello world"');

console.log(
  "--------------------------------------------------------------------"
);

// Q37-
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt1(
  size: string = "large",
  text: string = "i love typescript"
) {
  console.log(`you have order ${size} shirt that says ${text}`);
}
make_shirt1();
make_shirt1("medium");
make_shirt1("small", "i love javascript");

console.log(
  "--------------------------------------------------------------------"
);

// Q38-
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence,
//  such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities,
//   at least one of which is not in the default country.
function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city}is in ${country}`);
}
describe_city("karachi");
describe_city("Lahore");
describe_city("islamabad");
describe_city("paris", "farance");

console.log(
  "--------------------------------------------------------------------"
);

// Q39-
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string
//  formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}
console.log(city_country("multan", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "Uk"));

console.log(
  "--------------------------------------------------------------------"
);

//Q40-
// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the
// album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call
//  that includes the number of tracks on an album.

function make_album(artist_name: string, album_title: string, tracks?: number) {
  let album: { artist: string; album: string; tracks?: number } = {
    artist: artist_name,
    album: album_title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}
let album1 = make_album("Ahmed Raza", "My Album");
let album2 = make_album("Abdul Rafey", " Buddy Album");
let album3 = make_album("Muhammad Sufyan", "Sufyan`s Album");
console.log(album1);
console.log(album2);
console.log(album3);

console.log(
  "--------------------------------------------------------------------"
);
