const { MessageEmbed } = require("discord.js")
module.exports = {
  info: {
    name: "unlock",
    description: "invite kira to your server",
    usage: "",
    aliases: ["unlocked"]
  },
    run: async(client, message, args) => {
        const log = client.channels.cache.get(`926356822334521344`);
        let channel = message.mentions.channels.first() || message.channel;
        let check = channel.permissionsFor(message.guild.roles.everyone).has("SEND_MESSAGES");

        if (!message.member.permissions.has('MANAGE_MESSAGES'))
        return message.reply(`<:no:884059056174682122> You Don't have permission for use this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    
        if (!message.guild.me.permissions.has('MANAGE_MESSAGES'))
        return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

        if (!message.guild.me.permissions.has(`MANAGE_CHANNELS`))
        return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        
        if(check){return message.reply(`<:no:884059056174682122> ${channel} isn't locked!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}
        
        channel.permissionOverwrites.edit(message.guild.roles.everyone, {
            SEND_MESSAGES: true
        })
        .then(() => {
            message.channel.send(`<:success:883599837789036545> ${channel} has been unlocked!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        })
    }
}