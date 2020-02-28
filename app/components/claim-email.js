import Component from "@glimmer/component";
import { task } from "ember-concurrency";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class ClaimEmailComponent extends Component {
  @service store;
  @service router;

  claimSong(e) {
    e.preventDefault();
    let params = {
      email: this.email
    };

    let song = this.args.song;

    params.spotifyTrackidWaiting = song.trackId;
    params.spotifyEmbedUrlWaiting = song.previewUrl;
    params.spotifyTrackid = song.trackId;
    params.spotifyEmbedUrl = song.previewUrl;

    this.claimSongTask.perform(params);
  }

  @task(function*(params) {
    let getProfile = this.store.query;
    let profile = this.store.createRecord("profile", params);
    try {
      yield profile.save();
      this.router.transitionTo("success", params.spotifyTrackidWaiting);
    } catch (e) {
      alert("There was a problem claiming this song.");
      console.log(e);
    }
  })
  claimSongTask;
}
