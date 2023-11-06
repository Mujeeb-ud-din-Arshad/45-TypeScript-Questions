const fruits = ["apple", "banana", "orange"];


  // Access an index that is out of bounds
  const fruit = fruits[5];
  if(fruit<fruits.length){
    console.log(`Selected fruit: ${fruit}`);
  }
  else{
    console.log("An indes error")
  }
  

