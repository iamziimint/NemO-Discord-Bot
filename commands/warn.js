const { MessageEmbed } = require("discord.js");

module.exports = {
    info: {
        name: "warn",
        description: "To show all command",
        usage: "",
        aliases: ["warn"]
    },

    run: async function(client, message, args){
    const log = client.channels.cache.get(`926356822334521344`);
    const member = message.mentions.members.first() || message.member;

    if (!message.member.permissions.has('MANAGE_MESSAGES'))
    return message.reply(`<:no:884059056174682122> You Don't have permission for use this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    if (!message.guild.me.permissions.has('MANAGE_MESSAGES'))
    return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) { return message.reply('<:no:884059056174682122> Please Tag a Valid User!').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));};

    let Reason = args.slice(1).join(" ")
    if (!Reason) { return message.reply('<:no:884059056174682122> Please give any reason!').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));};

    let embed = new MessageEmbed()
    .setDescription(`<:success:883599837789036545> **${member.user.tag} has been warned.**`)
    .setColor('RED') 
    message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    let embed2 = new MessageEmbed()
    .setDescription(`You were warned in ${message.guild.name} for: ${Reason}`)
    .setColor(`RED`)
    user.send({ embeds : [embed2]}).catch(err => log.send(`\`\`\`prolog\n${member.user.tag} dm is off\`\`\``));
    }
}
