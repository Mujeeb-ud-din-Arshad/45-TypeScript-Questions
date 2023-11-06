function make_sandwich(...items) {
    console.log('Making a sandwich with the following items:');
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log('Sandwich complete!\n');
  }
  
  // Call the function with different numbers of arguments
  make_sandwich('Bread', 'Turkey', 'Lettuce', 'Tomato', 'Mayo');
  make_sandwich('Bread', 'Peanut Butter', 'Jam');
  make_sandwich('Bread', 'Ham', 'Cheese', 'Mustard');
  