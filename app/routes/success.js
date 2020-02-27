import Route from "@ember/routing/route";

export default class SuccessRoute extends Route {
  model({ track_id }) {
    return track_id;
  }
}
