const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    info: {
        name: "rate",
        description: "To show all command",
        usage: "",
        aliases: ["ratr"]
    },

    run: async function(client, message, args){
      const log = client.channels.cache.get(`926356822334521344`);
    //Start
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Please Give Me Something To Rate!`).catch(err => log.send(`\`\`\`prolog\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    message.channel.send(`I Rate \`${Math.floor(Math.random() * 101)}/100\` To ${Content}`).catch(err => log.send(`\`\`\`prolog\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    //End
  }
};