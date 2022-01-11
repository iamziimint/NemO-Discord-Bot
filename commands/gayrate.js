const { MessageEmbed } = require("discord.js");

module.exports = {
    info: {
        name: "gayrate",
        description: "To show all command",
        usage: "",
        aliases: ["howgay", "gay"]
    },

    run: async function(client, message, args){
      const log = client.channels.cache.get(`926356822334521344`);
    //Start
    const user = message.mentions.users.first()
    if (!user) { return message.channel.send('Please Tag a Valid User').catch(err => console.log(err))};
    let Member =
      message.mentions.users.first() ||
      message.guild.member(args[0]) ||
      message.author.catch(err => console.log(err));
      
    let Result = Math.floor(Math.random() * 101);
message.channel.send(`${Member.username} Is \`${Result}%\` Gay`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    //End
  }
};