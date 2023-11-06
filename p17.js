const travelDestinations = ["Chitral", "Naram", "Islamabad", "Kashmir", "Murree"];

// Print the array in its original order
console.log("Original Order:", travelDestinations);

// Print the array in alphabetical order without modifying the actual list
const alphabeticalOrder = [...travelDestinations].sort();
console.log("Alphabetical Order:", alphabeticalOrder);

// Print the array to show it's still in the original order
console.log("Original Order (Still):", travelDestinations);

// Print the array in reverse alphabetical order without changing the original order
const reverseAlphabeticalOrder = [...travelDestinations].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);

// Print the array to show it's still in the original order
console.log("Original Order (Still):", travelDestinations);

// Reverse the order of the list
travelDestinations.reverse();
console.log("Reversed Order:", travelDestinations);

// Reverse the order of the list again to get back to the original order
travelDestinations.reverse();
console.log("Original Order (Reversed Back):", travelDestinations);

// Sort the array in alphabetical order
travelDestinations.sort();
console.log("Sorted in Alphabetical Order:", travelDestinations);

// Sort the array in reverse alphabetical order
travelDestinations.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", travelDestinations);
