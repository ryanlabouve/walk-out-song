import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { task, timeout } from "ember-concurrency";
import { set } from "@ember/object";

let songs = {
  heart: {
    title: "Lose Yourself to Dance",
    artist: "Daft Punk",
    albumCover: ""
  },
  poop: {
    title: "Photograph",
    artist: "Nickleback",
    albumCover: ""
  },
  sob: {
    title: "Stay With Me",
    artist: "Sam Smith",
    albumCover: ""
  },
  curse: {
    title: "We're not going to take it",
    artist: "Twisted Sister",
    albumCover: ""
  }
};
export default Controller.extend({
  searchResults: [],
  searchTerm: null,
  songs,

  searchResultsTask: task(function*(searchTerm) {
    set(this, "searchTerm", searchTerm);

    yield timeout(2000);
    set(this, "results", [
      {
        title: "test"
      }
    ]);
  })
});
