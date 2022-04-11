# TokiProxy.js
TokiProxy.js is a Node.JS wrapper for the https://tokiproxy.co.uk/ proxy API.

How to use TokiProxy.js
```js
const TokiProxy = require('tokiproxy.js');

const API = new TokiProxy();

API.getProxies('Proxy Type', 'API Key');

API.on('request', data => {
    console.log(data.proxies)
})
```

If using TypeScript it's a bit different, instead it would look like this:
```js
import TokiProxy from 'tokiproxy.js';

const API = new TokiProxy();

API.getProxies('Proxy Type', 'API Key');

API.on('request', data => {
    console.log(data.proxies)
})```
