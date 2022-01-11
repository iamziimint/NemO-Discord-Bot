const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    info: {
        name: "waifu",
        description: "To show all command",
        usage: "",
        aliases: ["waifu"]
    },

    run: async function(client, message, args){
        const log = client.channels.cache.get(`926356822334521344`);
        let res = await fetch("https://nekos.life/api/v2/img/waifu");
        res = await res.json();

        const embed = new MessageEmbed()
            .setColor('RED') 
            .setImage(res.url)
        message.channel.send({ embeds: [embed] }).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    }
}