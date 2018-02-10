# README

A simple React app, that displays data retrieved from a series of content APIs.

Thank you for looking through this submission, and for your consideration.

## Running the app

* Build for production: `yarn build`
* Build and serve: `yarn serve`
* Run unit tests: `yarn test`
* Start local development: `yarn start`

## Development notes

### Key libraries used

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* [Styled components](https://www.npmjs.com/package/styled-components)
* [chromatism](https://www.npmjs.com/package/chromatism) - colour utils
* [hex-to-rgba](https://www.npmjs.com/package/hex-to-rgba) - colour utils
* [Enzyme](https://www.npmjs.com/package/enzyme) - component unit testing
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [sanitize.css](https://www.npmjs.com/package/sanitize.css) - an opinonated normalize
* [Prettier.io](https://prettier.io/)

### Public API server and CORS issues

The server that exposes the supplied API endpoints doesn't appear to have the requisite CORS HTTP headers set up to enable cross-origin requests. As a result, it was not possible to programmatically fetch data from the API using a standard AJAX request library, e.g. in this case, `fetch`.

The problem being that the development environment is running at `http://localhost:(whatever)`, and the API URL is at `http://some-other-host:(etc)`: a completely different origin. Web security rules block cross-origin requests by default, unless the server has Headers set up specifically to allow requests from other origins - the key ones being the key ones being [Access-Control-Allow-Origin and Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers).

So, as a workaround for local development - and as you busy chaps can hardly be pestered to mess around with some snapshot API that likely runs on a toaster in the Ostmodern basement - [Chrome web security preflight checks were disabled while developing locally](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome), to bypass the CORS issue.

Namely, the following args were used to launch Chrome (macOS):

```
open -a Google\ Chrome --args --disable-web-security --user-data-dir
```

I'm aware of the security implications this entails, and in a real-world scenario I'd speak with the backend team to ensure we have the right Access-Control headers set up on the server.

In production I'd also suspect the API endpoints would exist on the same domain as the web app, bypassing the issue altogether. Either that, or `Access-Control-Allow-Origin` would allow requests from specific domains.

### APIs

Generally, I had difficulty piecing together which APIs retrieved what data, and formulating the 'chain' of API calls that route a user to the individual episode view. To me, it appeared that a lot of data was actually missing - for example, `image_urls` was often an empty array, and `synopsis` were empty strings. In the end, I had to use some substitute data.

In practice, I'd RTFM, then of course speak to fellow developers to best understand what the intended data retrieval flow would be, and ensure I was using the correct endpoints.

#### Fetching episodes

I was unsure of the expected way to retrieve individual Episodes from a Set (in this case, the Home set), as the Episode `uid`s returned by the `GET /api/sets/{uid}/items/` endpoint (e.g. `sche_{string}`) did not match up to an actual episode uid (e.g. `film_{string}`). I had to extend the content-fetching service with a generic `getUrl` method, that would allow querying any passed URL. I could then query the Episode endpoint directly, using the `content_url` parameter returned by the Sets endpoint.

#### Episode images

When fetching an episode's details via the Episode endpoint (`/api/episodes/{uid}/items/`), no `image_urls` are returned - the array for each Episode is empty. Assuming this is an error (and that I'm not interacting with the API incorrectly), I've used placeholder images instead.

### Responsive grid

Instead of using a prebuilt responsive grid library (flexbox-grid, bootstrap, etc.) I opted to create a basic flexbox Container/Row/Column system using components with props.

### Routing

Some very basic routing logic has been implemented, using the `slug` returned for each Episode. In order to save on an API call, the episode data was passed to the EpisodeDetail Route component via `location.state`.

### Theming

Colour palette was generated using [colormind.io](http://colormind.io/). I usually suck at using the colour scheme effectively, but it at least provides a good, quick starting point for a workable set of complimentary colours for prototypes.

### Naming the app

Obviously one of the most important parts of a code test is giving the app a name. Here's the shortlist:

* Feedeo
* vid.io
* VidNutz
* Viddlesticks
* New Vids on the Block
* Vidfresh
* Vidder
* Trickvidz
* Vidbox
* Vidbags
* Viola
* Vidspace
* Vidcentre
* You've Got To Be Vidding Me
* No I Am Not Vidding On You
* Honey I Shrunk The Vids
* Stay Together for the Vids
* Vids (By MGMT)
* Vid-tastic
* Pop(corn) Culture
* Rivr
* Sodium
* Vidsection
* Frontrow
* Legroom
* Veed
* Streemit
* Vidscape
* Streamscape
* Vidbits
* Vidfix
