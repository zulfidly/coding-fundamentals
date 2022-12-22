// 1. Authorize the user and get a token.
// 2. Store the token somewhere else.
// 3. Fetch the user's top tracks using the token.
// 4. Display the top tracks.
// 5. Fetch new releases using the token.
// 6. Display new releases.
// 7. Fetch featured playlists using the token.
// 8. Display featured playlists.

var TOKEN = "";     // to store access token
var client_id = "020e85a02386476a8c48773f7a53587e";
var redirect_uri = window.location.origin;      // the current page URL i.e: http://127.0.0.1:5500
var scope = "user-read-private user-read-email user-top-read";      // a space separated scopes

///////////////////////// steps 1 to 3 //////////////////////////////////////////////////////////////////////
window.addEventListener("load", function() {
    console.log(window.location.origin)
    TOKEN = extractTokenFromURI();
    if(TOKEN) {
        console.log("authorize complete")
        console.log("TOKEN: ", TOKEN)
        fetchUserTopItems();
        fetchNewReleases();
        fetchFeaturedPlaylists();
    } else {
        authorize();
    }
});
function authorize() {
    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";              //This parameter specifies the type of response that is expected from the authorization server. In this case, we're expecting an access token.
    url += "&client_id=" + encodeURIComponent(client_id);    //This parameter is the client ID of your application
    url += "&scope=" + encodeURIComponent(scope);            // This parameter is a space-separated list of scopes that your application is requesting
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri); //This parameter is the redirect URI of your application. It must match one of the redirect URIs you set in the Spotify application. User will be redirected to this URI after authorization.
    window.open(url, "_self");
};
function extractTokenFromURI(){
    var hash = window.location.hash;
    if(hash && hash.includes("access_token")) {
        var url = hash.replace("#access_token=", "");
        var chunks = url.split("&");
        var token = chunks[0];
        return token;
    }
    return null;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function fetchUserTopItems() {
    try {
        var endpoint = "https://api.spotify.com/v1/me/top/tracks";
        var response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
        });
        var data = await response.json();
        console.log("User top items", data);
        displayUserTopItems(data);
    } catch(error) {
        alert("Something went wrong : fetchUserTopItems()");
        console.log(error);
    }
}
async function fetchNewReleases() {
    try {
        var endpoint = "https://api.spotify.com/v1/browse/new-releases";
        var response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
        });
        var data = await response.json();
        console.log("New releases", data);
        displayNewReleases(data);
} catch(error) {
        alert("Something went wrong : fetchNewReleases().");
        console.log(error);
    }
}
async function fetchFeaturedPlaylists() {
    try {
        var endpoint = "https://api.spotify.com/v1/browse/featured-playlists";
        var response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
        });
        var data = await response.json();
        console.log("Featured playlists", data);
        displayFeaturedPlaylists(data);
} catch(error) {
        alert("Something went wrong: fetchFeaturedPlaylists()");
        console.log(error);
    }
}
function displayUserTopItems(data) {
    var section = document.querySelector("#your-top-items");
    var sectionTitle = section.querySelector(".title");
    var sectionSubtitle = section.querySelector(".subtitle");
    var sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "Your Top Items";
    sectionSubtitle.textContent = "Based on your recent listening";

    for (i = 0; i < data.items.length; i++) {
        var track = data.items[i];
        var image = track.album.images[1].url;
        var title = track.name;
        var subtitle = track.album.artists[0].name;
        var href = track.album.external_urls.spotify;
        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
    }
}
function displayNewReleases(data) {
    var section = document.querySelector("#new-releases");
    var sectionTitle = section.querySelector(".title");
    var sectionSubtitle = section.querySelector(".subtitle");
    var sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "New Releases";
    sectionSubtitle.textContent = "New releases from Spotify";

    for (i = 0; i < data.albums.items.length; i++) {
        var track = data.albums.items[i];
        var image = track.images[1].url;
        var title = track.name;
        var subtitle = track.artists[0].name;
        var href = track.external_urls.spotify;
        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
    }

}
function displayFeaturedPlaylists(data) {
    var section = document.querySelector("#featured-playlists");
    var sectionTitle = section.querySelector(".title");
    var sectionSubtitle = section.querySelector(".subtitle");
    var sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "Featured Playlists";
    sectionSubtitle.textContent = "Featured Playlists from Spotify";

    for (i = 0; i < data.playlists.items.length; i++) {
        var track = data.playlists.items[i];
        var image = track.images[0].url;
        var title = track.name;
        var subtitle = track.description;
        var href = track.external_urls.spotify;
        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
    }

}
function generateCard(image, title, subtitle, href) {
    return `
    <a class="card" href="${href}" target="_blank">
        <img 
            src="${image}"
            alt="peaceful piano"
            srcset=""
        />
        <span class="mdi mdi-play mdi-36px"></span>
        <div class="title">${title}</div>
        <div class="subtitle">${subtitle}</div>
    </a>
    `;
}
