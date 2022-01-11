const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "unban",
    description: "Vote kira now",
    usage: "",
    aliases: ["unban"]
  },
  run: async(client, message, args) => {
    const log = client.channels.cache.get(`926356822334521344`);

    if (!message.member.permissions.has('BAN_MEMBERS'))
    return message.reply(`<:no:884059056174682122> You Don't have permission for use this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    if (!message.guild.me.permissions.has('BAN_MEMBERS'))
    return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    let userid = args[0];
    if(!userid) {return message.reply(`<:no:884059056174682122> please state the id for unban`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``))};

    if (userid === message.author.id) return message.reply(`<:no:884059056174682122> You can't unbanned you own self!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    let unban = await message.guild.bans.fetch();
        await message.guild.members.unban(userid).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} COMMAND - Unban ERROR - Already unban or incorrect id.\`\`\``));
        let embed = new MessageEmbed()
        .setDescription(`<:success:883599837789036545> **Successfully unbanned.**`)
        .setColor(`RED`)
        message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    }
}
