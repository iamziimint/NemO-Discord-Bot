const { MessageEmbed } = require("discord.js")
const pm = require('pretty-ms');

module.exports = {
    info: {
        name: "ping",
        description: "To show all command",
        usage: "",
        aliases: ["ping"],
    },

    run: async function(client, message, args){
      const log = client.channels.cache.get(`926356822334521344`);

      const msg = await message.channel.send("Pinging...");

      const botLatency = pm(msg.createdTimestamp - message.createdTimestamp)
      const shardLatency = pm(message.guild.shard.ping);

      
const embed = new MessageEmbed()
.setAuthor('🏓Pong!')
.addFields({
name: 'Message Latency',
value: `\`\`\`prolog\n${botLatency}\`\`\``,
inline: true
}, {
name: `Shard | ${message.guild.shard.id} Latency`,
value: `\`\`\`prolog\n${shardLatency}\`\`\``,
inline: true
}, {
name: 'Websocket ping',
value: `\`\`\`prolog\n${client.ws.ping}\`\`\``,
inline: true})
.setColor('RED')
  
      await msg.delete()
      message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
  }
}
