const {Client} = require("discord.js")
const {token} = require("./config.json")
const eventHandler = require("./src/handlers/eventHandler")

const client = new Client({intents:[]});

eventHandler(client);

client.login(token);