const { MessageEmbed } = require("discord.js");

module.exports = {
    info: {
        name: "muterole",
        description: "To show all command",
        usage: "",
        aliases: ["muterole"]
    },

    run: async function(client, message, args){
        const log = client.channels.cache.get(`926356822334521344`);
        if (!message.member.permissions.has(`MANAGE_ROLES`))
        return message.reply(`<:no:884059056174682122> You Don't have permission for use this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    
        if (!message.guild.me.permissions.has(`MANAGE_ROLES`))
        return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

        if (!message.guild.me.permissions.has(`MANAGE_CHANNELS`))
        return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        
        let role = message.guild.roles.cache.find(x => x.name === "MUTED")
        if(role){return message.reply(`<:no:884059056174682122> Mute role is already created!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}

        await message.guild.roles.create({
            name: 'MUTED',
            color: '#ff1100',
            permissions: [],
          }).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
          message.reply(`<:success:883599837789036545> Mute role has been created!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
          let muterole = message.guild.roles.cache.find(x => x.name === "MUTED")
          message.guild.channels.fetch().then((channels) => {
            channels.forEach(async (channel) => {
                await channel.permissionOverwrites
                    .create(muterole, {
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                    })
                    .catch(() => {})
                });
            }).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    }
}