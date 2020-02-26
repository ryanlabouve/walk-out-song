import Service from "@ember/service";
import { task, timeout } from "ember-concurrency";

export default Service.extend({
  searchForSong(searchTerm) {
    return task(function*() {
      yield timeout(2000);
      return [];
    });
  }
});
