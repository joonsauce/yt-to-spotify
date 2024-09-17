const apiURL = "";

function ytToSpotify() {
    let playlistURL = $("#playlistURL").val();
    // First, check if the link is a YouTube playlist link
    if (playlistURL.toLowerCase().includes("youtube.com") && playlistURL.toLowerCase().includes("/playlist?list=")) {
        // Save playlist URL to session storage
        sessionStorage.setItem("ytPlaylistURL", playlistURL);
        // Redirect and require login to Spotify
        window.open(makeSpotifyAuthURL(), "_blank");
    }
    else {
        alert("Invalid YouTube Playlist URL")
    }
}

// could be better but whatever
function makeSpotifyAuthURL() {
    let baseURL = "https://accounts.spotify.com/authorize?";

    baseURL += 'response_type=code';
    baseURL += '&client_id=';
    baseURL += '&scope=' + encodeURIComponent('user-read-private user-read-email');
    baseURL += '&redirect_uri=' + window.location.href.toString() + 'redirect';

    return baseURL;
}