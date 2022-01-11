const { MessageEmbed } = require("discord.js")
module.exports = {
  info: {
    name: "avatar",
    description: "invite kira to your server",
    usage: "",
    aliases: ["av"],
  },
    run: async(client, message, args) => {
      const log = client.channels.cache.get(`926356822334521344`);
        const user = message.mentions.users.first() || message.author || message.guild.members.fetch(args[0]) || client.users.cache.get(u => u.id === args[0])
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true})
        let embed = new MessageEmbed()
        .setImage(avatar)
        .setColor("RED")
        .setTimestamp("Copyright NemO 2020-22/ Rights Reserved")
      message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    }
}
