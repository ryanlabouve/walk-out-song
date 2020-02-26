import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Controller.extend({
  songs: service(),

  searchResultsTask: computed("search", function() {
    debugger;
    return this.songs.searchForSong(this.search);
  })
});
