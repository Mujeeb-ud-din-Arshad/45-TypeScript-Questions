// Current users list
const current_users = ['admin', 'Ali', 'Nazar', 'Habib', 'Mujeeb'];

// New users list
const new_users= ['khulfan', 'Abdullah', 'Mujeeb', 'Ahmad', 'Saif'];

// Loop through the new_users list
for (const new_user of new_users) {
  // Check for case-insensitive duplicates
  const isDuplicate = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());

  if (isDuplicate) {
    console.log(`The username '${new_user}' is not available. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
