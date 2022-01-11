const Discord = require('discord.js')

module.exports = {
    info: {
        name: "hack",
        description: "To show all command",
        usage: "",
        aliases: ["hack"]
    },

    run: async function(client, message, args){
      const log = client.channels.cache.get(`926356822334521344`);
       const user = await message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send("**please mention that user you need to hack**").catch(err => log.send(`\`\`\`prolog\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        

        message.channel.send(`**Hacking @${user.username} now...**`)
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`<a:loading21:865788054358720532>**Finding IP address**`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`<:success:883599837789036545>**IP ADDRESS :  127.0.0.1:2643**`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`<a:loading21:865788054358720532>**Selling data to the Government...**`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`<a:loading21:865788054358720532>**Reporting account to discord for breaking TOS...**`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`<a:loading21:865788054358720532>**Finding Email Address...**`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`<:success:883599837789036545>**Email Address : ${user.username}@gmail.com**`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`<a:loading21:865788054358720532>**Hacking Epic Games Account...**`);
          },  10500)
          setTimeout(function() {
            msg.edit(`<a:loading21:865788054358720532>**Hacking medical records...**`);
          },  12000)
         setTimeout(function() {
            msg.edit(`<:success:883599837789036545> **successfully hacked @${user.username}**`);
         }, 13500)
         }).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    }
   
}