function show_magicians(magicians) {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians){
    const greatMagicians = [];
  
    for (const magician of magicians) {
      greatMagicians.push(magician + ' the Great');
    }
  
    return greatMagicians;
  }
  
  const magicianNames = ['Ahmad', 'Harry', 'Nazar', 'Habib'];
  
  const greatMagicians = make_great(magicianNames);
  
  console.log('Original Magicians:');
  show_magicians(magicianNames);
  
  console.log('\nGreat Magicians:');
  show_magicians(greatMagicians);
  