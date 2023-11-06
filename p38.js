function city_country(city, country) {
    return `"${city}, ${country}"`;
  }
  
  const location1 = city_country('Lahore', 'Pakistan');
  const location2 = city_country('New York', 'USA');
  const location3 = city_country('Sydney', 'Australia');
  
  console.log(location1);
  console.log(location2);
  console.log(location3);
  