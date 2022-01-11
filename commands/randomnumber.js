const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
      name: "randomnumber",
      description: "To show all command",
      usage: "",
      aliases: ["number", "rn"]
  },

  run: async function(client, message, args){
    const log = client.channels.cache.get(`926356822334521344`);
    //Start
    let result = Math.floor(Math.random() * 101);
    message.channel.send(`Random Number Is \`${result}\``).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    //End
  }
};