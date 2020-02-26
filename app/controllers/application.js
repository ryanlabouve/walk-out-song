import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { task, timeout } from "ember-concurrency";
import { set } from "@ember/object";

export default Controller.extend({
  searchResults: [],
  searchTerm: null,

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
