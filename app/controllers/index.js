import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { task, timeout } from "ember-concurrency";
import { set } from "@ember/object";

let songs = {
  heart: {
    title: "Lose Yourself to Dance",
    artist: "Daft Punk",
    albumCover: "",
    trackId: "5CMjjywI0eZMixPeqNd75R"
  },
  poop: {
    title: "Photograph",
    artist: "Nickleback",
    albumCover: "",
    trackId: "3hb2ScEVkGchcAQqrPLP0R"
    // "https://p.scdn.co/mp3-preview/2926d141d7e00df9268b08e33400dc9a509bdfbf?cid=352b9da6530e4269a99b32174d12cb4c
  },
  sob: {
    title: "Stay With Me",
    artist: "Sam Smith",
    albumCover: "",
    trackId: "5Nm9ERjJZ5oyfXZTECKmRt"
  },
  curse: {
    title: "We're Not Gonna Take It",
    artist: "Twisted Sister",
    albumCover: "",
    trackId: "1hlveB9M6ijHZRbzZ2teyh"
  }
};
export default Controller.extend({
  searchResults: [],
  searchTerm: null,
  emojiSong: null,

  songs,

  searchResultsTask: task(function*(searchTerm) {
    set(this, "searchTerm", searchTerm);

    yield timeout(1000);
    let url = `https://api.spotify.com/v1/search?q=${this.searchTerm}&type=track`;
    try {
      let request = yield fetch(url, {
        headers: {
          Authorization:
            "Bearer BQCTiOQMgBvjCaOhjlv8ZJCSOeuA6xScwNKXpMxXtB_Mxqvd1l9fquPci5Un1GmDdhEyZHEC1ksqACi0WdU"
        }
      });
      let json = yield request.json();
      let tracks = json.tracks.items;

      set(this, "results", tracks);
    } catch (e) {
      alert("Error fetching songs!");
      console.log(e);
    }
  }).restartable()
});
