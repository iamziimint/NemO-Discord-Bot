const { MessageEmbed } = require('discord.js');

module.exports = {
    info: {
        name: "coinflip",
        description: "To show all command",
        usage: "",
        aliases: ["flip"]
    },

    run: async function(client, message, args){
    const log = client.channels.cache.get(`926356822334521344`);
const n = Math.floor(Math.random() * 2);
let result;
if (n === 1) result = 'Heads';
else result = 'Tails';
let embed = new MessageEmbed()
.setColor("RED")
.setDescription(`**${message.member.displayName} Flipped ${result}**!`)
.setThumbnail(`https://media.discordapp.net/attachments/833979839761350677/883337942972629042/coin-flip.gif`)
message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
}
};