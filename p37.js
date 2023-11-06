function describe_city(city, country = 'Pakistan'){
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities, including one not in the default country
  describe_city('Karachi');
  describe_city('New York','USA'); // Uses the default country value
  describe_city('Sydney', 'Australia');
  