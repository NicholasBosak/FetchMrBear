# bin/bot.js

'use strict';

var FetchMrBear = require('../lib/fetchmrbear');

var token = process.env.BOT_API_KEY;
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var fetchmrbear = new FetchMrBear({
    token: token,
    dbPath: dbPath,
    name: name
});

fetchmrbear.run();