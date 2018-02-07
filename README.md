# README
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Initial findings
### API endpoint and CORS issues
The server that exposes the supplied API endpoints doesn't appear to have the requisite CORS HTTP headers set up to enable cross-origin requests. As a result, it was not possible to programmatically fetch data from the API using a standard AJAX request library, e.g. in this case, `fetch`.

The problem being that the development environment is running at `http://localhost:(whatever)`, and the API URL is at `http://some-other-host:(etc)`: a completely different origin. Web security rules block cross-origin requests by default, unless the server is set up specifically to allow requests from other origins via Headers. These are detailed [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers), the key ones being `Access-Control-Allow-Origin` and `Access-Control-Allow-Methods`.

So, as a workaround for local development - and as you busy chaps can hardly be pestered to mess around with some snapshot API that probably runs on a toaster in the Ostmodern basement - [Chrome web security preflight checks were disabled while developing locally](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome), to bypass the CORS issue.

Namely, the following args were used to launch Chrome (macOS):

```
open -a Google\ Chrome --args --disable-web-security --user-data-dir
```

I'm aware of the security implications this entails, and in a real-world scenario I'd speak with the backend team to ensure we have the right Access-Control headers set up on the server.

In production I'd also suspect the API endpoints would exist on the same domain as the web app, bypassing the issue altogether (as no cross-origin request would occur, the requested URL and the Host would possess the same origin).
