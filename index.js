const fs = require("fs");
const {Collection, Client, Intents, MessageEmbed} = require("discord.js");
const {PREFIX, TOKEN} = require("./config.json")

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
Intents.FLAGS.GUILD_VOICE_STATES,] });
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()
client.setMaxListeners(10)

client.config = {prefix: PREFIX}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});
process.on("unhandledRejection", (reason, promise) => {
    try {
        console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
    } catch {
        console.error(reason);
    }
});
//Logging in to discord
client.login(TOKEN)