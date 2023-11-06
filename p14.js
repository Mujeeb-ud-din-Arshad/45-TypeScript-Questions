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
