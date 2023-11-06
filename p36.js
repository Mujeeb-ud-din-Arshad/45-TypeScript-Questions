function make_shirt(size= 'Large', message = 'I love TypeScript') {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
  }
  
 // Uses default values
  make_shirt(); 
  
  // Create a medium shirt with the default message
  make_shirt('Medium');
  
  // Create a small shirt with a custom message
  make_shirt('Small', 'Have a nyc day!');
  