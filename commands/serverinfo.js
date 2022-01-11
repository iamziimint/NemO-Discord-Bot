
const Discord = require("discord.js");

module.exports = {
    info: {
      name: "serverinfo",
      description: "",
      usage: "",
      aliases: ["si"],
    },
  
    run: async function (client, message, args) {
    const log = client.channels.cache.get(`926356822334521344`);
    let servericon = message.guild.iconURL;
let serverembed = new Discord.MessageEmbed()
.setTitle("Server Information")
.setColor("RANDOM")
.setThumbnail(servericon)
.addField("Server Name", message.guild.name)
.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
.addField("Channels", message.guild.channels.cache.size, true)
.addField("Roles", message.guild.roles.cache.size, true)
.addField("Created On", message.guild.createdAt)
.addField("You Joined", message.member.joinedAt)
.addField("Total Members", message.guild.memberCount)
.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL);
message.channel.send({embeds: [serverembed]});
}
};
