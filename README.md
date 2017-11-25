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

## Example Response
```js
[
  {
    "name": "Reddit Alpha",
    "badge": {
      "url": "/badge/A_Char_Rocket_02.png",
      "filename": "A_Char_Rocket_02.png",
      "key": "A_Char_Rocket_02"
    },
    "type": 2,
    "memberCount": 45,
    "score": 50796,
    "requiredScore": 4600,
    "donations": 22640,
    "currentRank": 0,
    "description": "Minimum 5100 🏆to join. When full, #50/50 sent to Reddit Bravo #2U2GGQJ 🚀http://discord.gg/RACF 🚀http://twitch.tv/woody",
    "tag": "2CCCP",
    "typeName": "Invite Only",
    "region": {
      "id": 57000172,
      "isCountry": true,
      "key": "NU",
      "name": "Niue"
    },
    "clanChest": {
      "clanChestCrowns": 813,
      "clanChestCrownsPercent": 50.81,
      "clanChestCrownsRequired": 1600
    },
    "members": [
      [Object],
      [Object],
      ...
    ]
  }
]
```
