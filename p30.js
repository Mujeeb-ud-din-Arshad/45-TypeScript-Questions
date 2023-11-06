const usernames = ['admin', 'ALi', 'Nazar', 'Habib', 'Mujeeb'];

if (usernames.length === 0) {
  console.log('We need to find some users!');
} else {
  for (const username of usernames) {
    if (username === 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames to demonstrate the empty list scenario
usernames.length = 0; // Empty the array

if (usernames.length === 0) {
  console.log('We need to find some users!');
}
