const library = {
    tracks: { 
      t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
      t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
      t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" }
    },
    playlists: { 
      p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
      p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
    },
  
    printPlaylists: function() {
      for (const playlistId in this.playlists) {
        const playlist = this.playlists[playlistId];
        const trackCount = playlist.tracks.length;
        console.log(`${playlistId}: ${playlist.name} - ${trackCount} tracks`);
      }
    },
  
    printTracks: function() {
      for (const trackId in this.tracks) {
        const track = this.tracks[trackId];
        console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
      }
    },
  
    printPlaylist: function(playlistId) {
      const playlist = this.playlists[playlistId];
      if (!playlist) {
        console.log('Playlist not found');
        return;
      }
      const trackCount = playlist.tracks.length;
      console.log(`${playlistId}: ${playlist.name} - ${trackCount} tracks`);
      playlist.tracks.forEach(trackId => {
        const track = this.tracks[trackId];
        console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
      });
    },
  
    addTrackToPlaylist: function(trackId, playlistId) {
      const playlist = this.playlists[playlistId];
      const track = this.tracks[trackId];
      if (!playlist || !track) {
        console.log(!playlist ? 'Playlist not found' : 'Track not found');
        return;
      }
      if (!playlist.tracks.includes(trackId)) {
        playlist.tracks.push(trackId);
        console.log(`Track ${trackId} added to playlist ${playlistId}`);
      } else {
        console.log('Track already exists in playlist');
      }
    },
  
    generateUid: function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
  
    addTrack: function(name, artist, album) {
      const newTrackId = 't' + this.generateUid();
      const newTrack = { id: newTrackId, name: name, artist: artist, album: album };
      this.tracks[newTrackId] = newTrack;
      console.log(`Added new track: ${newTrackId}: ${name} by ${artist} (${album})`);
    },
  
    addPlaylist: function(name) {
      const newPlaylistId = 'p' + this.generateUid();
      const newPlaylist = { id: newPlaylistId, name: name, tracks: [] };
      this.playlists[newPlaylistId] = newPlaylist;
      console.log(`Added new playlist: ${newPlaylistId}: ${name} - 0 tracks`);
    }
  };
  
  // Example of method calls
  library.printPlaylists();
  console.log("///////////////////////////////////////////");
  library.printTracks();
  console.log("///////////////////////////////////////////");
  library.printPlaylist("p01");
  console.log("///////////////////////////////////////////");
  library.addTrackToPlaylist('t01', 'p02'); // Adding track t01 to playlist p02
  library.printPlaylist("p02"); // Test if track t01 is in playlist p02
  console.log("///////////////////////////////////////////");
  library.addTrack("Here Comes The Sun", "The Beatles", "Abbey Road"); // Adding track to library
  library.printTracks(); // Test to see the track added to library
  console.log("///////////////////////////////////////////");
  library.addPlaylist("WorkOut music"); // Adding a new playlist
  library.printPlaylists(); // Test to see new playlist added to library
  