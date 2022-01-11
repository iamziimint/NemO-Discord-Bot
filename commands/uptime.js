const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const moment = require('moment');


module.exports = {
  info: {
    name: "uptime",
    description: "invite kira to your server",
    usage: "",
    aliases: ["up"],
  },
  run: async(client, message, args) => {
    const log = client.channels.cache.get(`926356822334521344`);

    const d = moment.duration(message.client.uptime);
    let days = Math.floor(client.uptime / 86400000 );
    let hours = Math.floor(client.uptime / 3600000 ) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
    
    let upembed = new Discord.MessageEmbed()
    .setColor("RED")
    .addField(`**Uptime**`,`\`\`\`prolog\n${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds\`\`\``)
    .addField('**Date Launched**',`\`\`\`prolog\n ${date} \`\`\``) 
message.channel.send({ embeds : [upembed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    }
  
}
  
