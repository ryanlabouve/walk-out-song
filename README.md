# walk-out-song

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd walk-out-song`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### Dev Notes

spotify return:

```
{
  "tracks" : {
    "href" : "https://api.spotify.com/v1/search?query=test&type=track&offset=0&limit=20",
    "items" : [ {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
          },
          "href" : "https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq",
          "id" : "3MZsBdqDrRTJihTHQrO6Dq",
          "name" : "Joji",
          "type" : "artist",
          "uri" : "spotify:artist:3MZsBdqDrRTJihTHQrO6Dq"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/34GQP3dILpyCN018y2k61L"
        },
        "href" : "https://api.spotify.com/v1/albums/34GQP3dILpyCN018y2k61L",
        "id" : "34GQP3dILpyCN018y2k61L",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485160ba1d6104d0475c7555a6b2",
          "width" : 64
        } ],
        "name" : "BALLADS 1",
        "release_date" : "2018-10-26",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:34GQP3dILpyCN018y2k61L"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
        },
        "href" : "https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq",
        "id" : "3MZsBdqDrRTJihTHQrO6Dq",
        "name" : "Joji",
        "type" : "artist",
        "uri" : "spotify:artist:3MZsBdqDrRTJihTHQrO6Dq"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 179423,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "ZZOPM1800561"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1DMEzmAoQIikcL52psptQL"
      },
      "href" : "https://api.spotify.com/v1/tracks/1DMEzmAoQIikcL52psptQL",
      "id" : "1DMEzmAoQIikcL52psptQL",
      "is_local" : false,
      "name" : "TEST DRIVE",
      "popularity" : 73,
      "preview_url" : "https://p.scdn.co/mp3-preview/c7d8c051043d53a2ecd3aba7916cec3860456454?cid=352b9da6530e4269a99b32174d12cb4c",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:1DMEzmAoQIikcL52psptQL"
    },
```
