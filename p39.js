function make_album(artist, title, tracks){
    const album = { artist, title };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Create album dictionaries with and without the number of tracks
  const album1 = make_album('Artist1', 'Album1');
  const album2 = make_album('Artist2', 'Album2', 12); // Include the number of tracks
  const album3 = make_album('Artist3', 'Album3');
  
  // Print the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  