//Q11- Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list,
//  one at a time.
let friendsName: string[] = [
  "Muhammad Sufyan",
  "Abdul Rafey",
  "Ameer Hamza",
  "Abdul Sammad",
];

console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
console.log("---------------------------------------");

// Q12-Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.
let message: string = "HELLO! How are you?";
console.log(friendsName[3] + "" + message);
console.log(friendsName[0] + "" + message);
console.log(friendsName[1] + "" + message);
console.log(friendsName[2] + "" + message);
console.log("---------------------------------------");

//Q13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["BMW S1000RR", "Audi A6", "Tesla Cybertruck"];
transportation.map((items) => {
  console.log(`I would like to own a ${items}`);
});
console.log("---------------------------------------");

//Q14-  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people
//  you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest: string[] = ["Abdul Rafey", "Muhammad Sufyan", "Ameer Hamza"];
Guest.map((items) => {
  console.log(`Dear ${items}, You are invited to the dinner`);
});
console.log("---------------------------------------");

// Q15-
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let guests1: string[] = ["Abdul Rafey", "Muhammad Sufyan", "Ameer Hamza"];

let canNotAttend: string = "Ameer Hamza";
console.log(canNotAttend + "", "can not attend the dinner.");

let newGuest: string = "Abdul Sammad";
guests1[guests1.indexOf(canNotAttend)] = newGuest;
console.log(guests1);

guests1.map((items) =>
  console.log(`Dear ${items}, You are invited to the dinner`)
);

console.log("---------------------------------------");

//Q16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner
//  table.

// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// part 1
let guests: string[] = ["Abdul Rafey", "Muhammad Sufyan", "Ameer Hamza"];
guests.map((items) =>
  console.log(
    `dear ${items}, "Great news! I have found a bigger dinner table".`
  )
);

//part 2
let guestBeg: string = "Faizan";
guests.unshift(guestBeg);
console.log(guests);

//part 3
let middleGuest: string = "Hammad";
let MiddleIndex = guests.length / 2;
guests.splice(MiddleIndex, 0, middleGuest);
console.log(guests);

//part 4
guests.push("Faraz");
console.log(guests);

//part 5
guests.map((items) =>
  console.log(
    `"dear ${items}, you are coodially invited on bigger dinner table." `
  )
);

console.log("----------------------------------");

// Q17-
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only
//  two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the
// end of your program.

let myGuest: string[] = ["Abdul Rafey", "Muhammad Sufyan", "Ameer Hamza"];
console.log(
  "Due to limited space, only two people are invited for the dinner!"
);
// remove guest until two guest remain;
while (myGuest.length > 2) {
  const removeGuest = myGuest.pop();
  console.log(`sorry ${myGuest} ,you are not longer invited to the dinner.`);
}
// priniting invitation to the remaining two guests.
myGuest.forEach((myGuest) => {
  console.log(` dear ${myGuest}, you are invited to the dinner.`);
});
//removing ames the last two names from the list
myGuest.pop();
myGuest.pop();
// printing the final list to confirm it`s empty
console.log(`final guest list ${myGuest}`);
console.log("----------------------------------");

//Q18- Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//• Store the locations in a array:

let placesToVisit: string[] = ["UAE", "turkey", "Uk", "SaudiArabia", "USA"];
// Print your array in its original order:
console.log("Original Order;", placesToVisit);

// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabatical Order;", [...placesToVisit].sort());

//• Show that your array is still in its original order by printing it.
console.log("Original Order after sorting;", placesToVisit);
//// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(
  "Reverse Alphabatical Order;",
  [...placesToVisit].sort().reverse()
);

//• Show that your array is still in its original order by printing it again.
console.log("Original Order After Reverse Alphabatical Order;", placesToVisit);

//// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse  Order;", [...placesToVisit].reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to the original Order:", placesToVisit);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in Alphabetic Order:", [...placesToVisit].sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(
  "Sorted in reverse Alphabetic Order:",
  [...placesToVisit].sort().reverse()
);

console.log("----------------------------------");


//Q19-  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are
// inviting to dinner.

let invited: string[] = ["Abdul Rafey", "Muhammad Sufyan"];
let countInvited: number = invited.length;
console.log(`${countInvited} people are come to the dinner`);

console.log("----------------------------------");

//Q20- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
//  or anything else you’d like. Write a program that creates a list containing these items.

let laptopBrand: string[] = ["Dell", "hp", "lenovo", "Apple"];
console.log(" these brands of laptops commonly used in Pakistan");
console.log(laptopBrand);

console.log("----------------------------------");
