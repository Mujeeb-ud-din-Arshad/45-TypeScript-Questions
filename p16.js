const dinnerGuests = ["Ali", "Nazar", "Habib", "Khulfan"];
const guestCannotAttend = "Khulfan"; // Guest who can't attend


// Print a message for the guest who can't attend
console.log(`${guestCannotAttend} can't make it to the dinner.`)

// Remove the guest who can't attend
const gCannotAttend = dinnerGuests.indexOf(guestCannotAttend);
if (gCannotAttend !== -1) {
  dinnerGuests.splice(gCannotAttend, 1);
}

// Think of someone else to invite
const newGuest = "Mujeeb";

// Add the new guest to the list
dinnerGuests.push(newGuest);

// Send out new invitation messages
for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, I would like to invite you to dinner. Please join me for a wonderful evening.`);
}


// Print a message about the bigger dinner table
console.log("Great news! We found a bigger dinner table!");

// Add new guests to the array
dinnerGuests.unshift("Abdullah"); // Add one new guest to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Hanan"); // Add one new guest to the middle
dinnerGuests.push("Amir"); // Use push() to add one new guest to the end

// Print a new set of invitation messages
for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, I would like to invite you to dinner. Please join me for a wonderful evening.`);
}

// Print a message about the limited space
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests until only two names remain
while (dinnerGuests.length > 2) {
  const removedGuest = dinnerGuests.pop(); // Remove the last guest
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the two remaining guests
for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
}

// Remove the last two names from the list
dinnerGuests.pop();
dinnerGuests.pop();

// Print the list to ensure it's empty
console.log("Updated guest list:", dinnerGuests);
