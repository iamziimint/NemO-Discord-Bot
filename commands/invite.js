const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "invite NemO to your server",
    usage: "",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    const log = client.channels.cache.get(`926356822334521344`);
let invite = new MessageEmbed()
.setTitle(`Invite NemO now!`)
.setDescription(`invite me to your server [click here](https://discord.com/oauth2/authorize?client_id=818731660009930754&permissions=271887566&scope=bot%20applications.commands)
need more support join [Support server](https://discord.gg/UCwbr4TbR9)`)
    .setColor("RED")    
message.channel.send({ embeds : [invite]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
  }
  
}
