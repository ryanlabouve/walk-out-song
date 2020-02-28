import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { task, timeout } from "ember-concurrency";
import { set } from "@ember/object";

let songs = {
  heart: {
    title: "Lose Yourself to Dance",
    artist: "Daft Punk",
    trackId: "5CMjjywI0eZMixPeqNd75R",
    previewUrl:
      "https://p.scdn.co/mp3-preview/24e8d6ba5f91d46782dc44ca9eb44db18b1fc897?cid=352b9da6530e4269a99b32174d12cb4c"
  },
  poop: {
    title: "Photograph",
    artist: "Nickleback",
    trackId: "3hb2ScEVkGchcAQqrPLP0R",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2926d141d7e00df9268b08e33400dc9a509bdfbf?cid=352b9da6530e4269a99b32174d12cb4c"
  },
  sob: {
    title: "Stay With Me",
    artist: "Sam Smith",
    trackId: "5Nm9ERjJZ5oyfXZTECKmRt",
    previewUrl:
      "https://p.scdn.co/mp3-preview/7e1bd9665057172f1f4dc4130abaaffe584bbcb7?cid=352b9da6530e4269a99b32174d12cb4c"
  },
  curse: {
    title: "We're Not Gonna Take It",
    artist: "Twisted Sister",
    trackId: "1hlveB9M6ijHZRbzZ2teyh",
    previewUrl:
      "https://p.scdn.co/mp3-preview/7e1bd9665057172f1f4dc4130abaaffe584bbcb7?cid=352b9da6530e4269a99b32174d12cb4c"
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
            "Bearer BQCEF8SdpFMh0iHIFh_Yebw38tSwjDMiyNPnQteFCvDu-uIn9X0NnAueJbz8WuaUshQogUfQZJoTjFNd2Xg"
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
