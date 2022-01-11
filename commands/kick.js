const { MessageEmbed } = require("discord.js");

module.exports = {
    info: {
        name: "kick",
        description: "To show all command",
        usage: "",
        aliases: ["kick"]
    },

    run: async function(client, message, args){
        const log = client.channels.cache.get(`926356822334521344`);
        const member = message.mentions.members.first() || message.member;

        if (!message.member.permissions.has('KICK_MEMBERS'))
        return message.reply(`<:no:884059056174682122> You Don't have permission for use this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    
        if (!message.guild.me.permissions.has('KICK_MEMBERS'))
        return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
      
        const user = message.mentions.members.first()
        if (!user) { return message.reply('<:no:884059056174682122>  Please Tag a Valid User!').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));};

        if (user.id === message.author.id)
        return message.reply(`<:no:884059056174682122>  You can't kick your own self!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        if (user.id === client.user.id)
        return message.reply(`Please Don't Kick Me :(`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

        if (message.guild.ownerId === member.user.id){ return message.reply("<:no:884059056174682122> I can't Kicked the owner of the server!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}

        if (message.guild.me.roles.highest.position <= member.roles.highest.position){
            const embed3 = new MessageEmbed()
            .setDescription(`<:no:884059056174682122> I don't have high enough in the role hierarchy to do that.`)
            .setColor('RED') 
            return message.reply({ embeds : [embed3]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}
    
        let Reason = args.slice(1).join(" ")
        if (!Reason) { return message.reply('<:no:884059056174682122> Please give any reason!').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));};

        if (user) {
            user.kick().then(() => {
                let embed = new MessageEmbed()
                .setDescription(`<:success:883599837789036545> **${member.user.tag} has been kicked.**`)
                .setColor('RED') 
                message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
                let embed2 = new MessageEmbed()
                .setDescription(`You were kicked from ${message.guild.name} for: ${Reason}`)
                .setColor(`RED`)
                user.send({ embeds : [embed2]}).catch(err => log.send(`\`\`\`prolog\n${member.user.tag} dm is off\`\`\``));
            })
        } else {
            message.channel.send('<:no:884059056174682122> cant find user!').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        }

    }
}