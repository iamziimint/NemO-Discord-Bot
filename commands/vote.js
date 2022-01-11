const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "Vote",
    description: "Vote kira now",
    usage: "",
    aliases: ["vote"]
  },

  run: async function (client, message, args) {
    const log = client.channels.cache.get(`884308898432057364`);
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;

    
    let invite = new MessageEmbed()
    .setTitle(`vote Nem0 now!`)
    .setDescription(`give support by [vote evon](https://top.gg/bot/883313942435352606/vote)`)
    .setColor("RED")     
message.channel.send({ embeds : [invite]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
  },
};