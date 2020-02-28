import Model, { attr } from "@ember-data/model";

export default class ProfileModel extends Model {
  @attr("string") email;
  @attr("string") spotifyTrackidWaiting;
  @attr("string") spotifyEmbedUrlWaiting;
  @attr("string") spotifyTrackid;
  @attr("string") spotifyEmbedUrl;
}
