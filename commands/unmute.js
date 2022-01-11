const { MessageEmbed } = require("discord.js");

module.exports = {
    info: {
        name: "unmute",
        description: "To show all command",
        usage: "",
        aliases: ["unmute"]
    },

    run: async function(client, message, args){
        const log = client.channels.cache.get(`926356822334521344`);

        if (!message.member.permissions.has(`MANAGE_ROLES`))
        return message.reply(`<:no:884059056174682122> You Don't have permission for use this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    
        if (!message.guild.me.permissions.has(`MANAGE_ROLES`))
        return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        
        const user = message.mentions.members.first();

        if (!user) {return message.reply("<:no:884059056174682122> Please Tag a Valid User!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}
     
        if (user.id === message.author.id)
        return message.reply(`<:no:884059056174682122> You are already unmuted!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));


        if (user.id === client.user.id)
        return message.reply(`Please Don't try mute Me :(`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

        if (message.guild.me.roles.highest.position <= user.roles.highest.position){
            const embed3 = new MessageEmbed()
            .setDescription(`<:no:884059056174682122> I don't have high enough in the role hierarchy to do that.`)
            .setColor('RED') 
            return message.reply({ embeds : [embed3]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}

        let muterole = message.guild.roles.cache.find(x => x.name === "MUTED")
        if(!muterole) {return message.reply("<:no:884059056174682122> This server do not have mute role, use `ev!muterole` for create role!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}

        if (message.guild.me.roles.highest.position <= muterole.position) return message.reply("<:no:884059056174682122> I can't do that, because my role is lower than `MUTED` role!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

        if (!muterole || !user.roles.cache.has(muterole.id)) return message.reply("<:no:884059056174682122> That member is currently not muted!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

        user.roles.remove(muterole)
let embed = new MessageEmbed()
.setDescription(`<:success:883599837789036545> **${user.user.tag} has been unmuted.**`)
.setColor('RED') 
message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

let embed2 = new MessageEmbed()
.setDescription(`You were unmuted in ${message.guild.name} By: ${message.author.tag}`)
.setColor(`RED`)
user.send({ embeds : [embed2]}).catch(err => log.send(`\`\`\`prolog\n${user.user.tag} dm is off\`\`\``))
    }
}