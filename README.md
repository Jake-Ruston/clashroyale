# Clash Royale
A simple to use module for interacting with the Clash Royale API.

## Install
```
$ npm install clashroyale
```
## How to
```js
// require the package
const cr = require('clashroyale');
cr.getProfile('2J8U0PRJ').then(profile => console.log(profile));
cr.getClan('C9YC9U').then(clan => console.log(clan));
```
- Both methods have the option of getting multiple profiles/clans by adding extra parameters.
