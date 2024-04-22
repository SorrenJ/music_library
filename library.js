const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       const playlists = library.playlists;
       for (const playlistId in playlists) {
           const playlist = playlists[playlistId];
           const trackCount = playlist.tracks.length;
           console.log(`${playlistId}: ${playlist.name} - ${trackCount} tracks`);
       }
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       const tracks = library.tracks;
       for (const trackId in tracks) {
           const track = tracks[trackId];
           console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
       }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       const playlist = library.playlists[playlistId];
       if (!playlist) {
           console.log('Playlist not found');
           return;
       }
       const trackCount = playlist.tracks.length;
       console.log(`${playlistId}: ${playlist.name} - ${trackCount} tracks`);
       playlist.tracks.forEach(trackId => {
           const track = library.tracks[trackId];
           console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
       });
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       const playlist = library.playlists[playlistId];
       const track = library.tracks[trackId];
   
       // Check if both the track and the playlist exist
       if (!playlist) {
           console.log('Playlist not found');
           return;
       }
       if (!track) {
           console.log('Track not found');
           return;
       }
   
       // Check if the track is already in the playlist to avoid duplicates
       if (!playlist.tracks.includes(trackId)) {
           playlist.tracks.push(trackId);
           console.log(`Track ${trackId} added to playlist ${playlistId}`);
       } else {
           console.log('Track already exists in playlist');
       }
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
 // Generate a new unique track ID
 const newTrackId = 't' + generateUid();

 // Create the track object
 const newTrack = {
     id: newTrackId,
     name: name,
     artist: artist,
     album: album
 };

 // Add the new track to the library
 library.tracks[newTrackId] = newTrack;
 console.log(`Added new track: ${newTrackId}: ${name} by ${artist} (${album})`);
}


// adds a playlist to the library
const addPlaylist = function(name) {
    // Generate a new unique playlist ID
    const newPlaylistId = generateUid();

    // Create the playlist object with no initial tracks
    const newPlaylist = {
        id: newPlaylistId,
        name: name,
        tracks: []  // Starts with an empty array of tracks
    };

    // Add the new playlist to the library
    library.playlists[newPlaylistId] = newPlaylist;
    console.log(`Added new playlist: ${newPlaylistId}: ${name} - 0 tracks`);
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}


// Call the function with the library object
printPlaylists(library);
console.log ("///////////////////////////////////////////");
printTracks(library);
console.log ("///////////////////////////////////////////");
printPlaylist("p01");
console.log ("///////////////////////////////////////////");
addTrackToPlaylist('t01', 'p02'); // Adding track t01 to playlist p02
printPlaylist("p02");// Test if track t01 is in playlist p02
console.log ("///////////////////////////////////////////");
addTrack("Here Comes The Sun", "The Beatles", "Abbey Road"); // Adding track to library
printTracks(library); // Test to see the track added to library
console.log ("///////////////////////////////////////////");
addPlaylist("WorkOut music"); // Adding a new playlist
printPlaylists(library); // Test to see new playlist added to library