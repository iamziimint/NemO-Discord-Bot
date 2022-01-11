const { MessageEmbed } = require(`discord.js`)
const { oneLine, stripIndent } = require('common-tags');
const moment = require("moment");
require('moment-duration-format')

const { mem, cpu, os } = require('node-os-utils');

module.exports = {
  info: {
    name: "stats",
    description: "",
    usage: "",
    aliases: ["stat"],
  },

  run: async function (client, message, args) {
    const log = client.channels.cache.get(`926356822334521344`);
    let uptime = moment.duration(client.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")
    const duration = moment.duration(client.uptime)
    const { totalMemMb, usedMemMb } = await mem.info();
    const msg = await message.channel.send("<a:loading21:865788054358720532> **loading...**").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

let embed = new MessageEmbed()
.setColor("RED")
.addField("<:stats:884780196694220811> SYSTEM STATS",`\`\`\`prolog\nRAM - ${totalMemMb} MB
RAM USAGES - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
CPU - ${cpu.model()}
CORE - ${cpu.count()}
CPU USAGES - ${await cpu.usage()} % \`\`\``)
.addField("<:output:887272607265742870> BOT STATS",`\`\`\`prolog\nTOTAL SERVERS - ${client.guilds.cache.size}
PING - ${client.ws.ping} ms
UPTIME - ${uptime}\`\`\``)
.addField("<:vhk:884780256223977512> PACKAGE STATS",`\`\`\`prolog\nDISCORD.JS - V13.3.0
NODE.JS - v16.10.0
BOT VERSION - V1.1.0\`\`\``)
.setTimestamp()
message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
await msg.delete()
  }
}