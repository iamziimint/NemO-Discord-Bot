const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    info: {
        name: "kiss",
        description: "To show all command",
        usage: "",
        aliases: ["kiss"]
    },

    run: async function(client, message, args){
        const log = client.channels.cache.get(`926356822334521344`);
        let res = await fetch("https://nekos.life/api/v2/img/kiss");
        res = await res.json();

        const user = await message.mentions.users.first() || message.guild.members.cache.get(args[0])

        if (!user) {return message.reply("<:no:884059056174682122> Mention a Valid User!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}

        if (user.id === message.author.id) {
            return message.reply("<:no:884059056174682122> You can't kiss your own self!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        }
        const embed = new MessageEmbed()
            .setTitle(`${message.author.tag} kiss ${user.tag}`)
            .setColor('RED') 
            .setImage(res.url)
        message.channel.send({ embeds: [embed] }).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    }
}