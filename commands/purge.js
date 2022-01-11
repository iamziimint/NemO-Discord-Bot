const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "purge",
    description: "invite kira to your server",
    usage: "",
    aliases: ["clear"]
  },
    run: async(client, message, args) => {
      const log = client.channels.cache.get(`926356822334521344`);
      
      if (!message.member.permissions.has('MANAGE_MESSAGES'))
      return message.reply(`<:no:884059056174682122> You Don't have permission for use this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
      
      if (!message.guild.me.permissions.has('MANAGE_MESSAGES'))
      return message.reply(`<:no:884059056174682122> I Don't have permission for work this command`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
  
      let amount = args[0];

      if(!amount){return message.reply(`<:no:884059056174682122> Please provide amount to delete messages!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``))}

      if(isNaN(amount)){return message.reply(`<:no:884059056174682122> Please provide me valid number value!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``))}

      if(amount >= 101){return message.reply(`<:no:884059056174682122> I can't delete more than \`100\` messages!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``))}

      if(amount <= 1){return message.reply(`<:no:884059056174682122> I can't delete less than \`2\` messages!!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``))}

      message.channel.messages.channel.bulkDelete(amount)
      message.channel.send(`<:success:883599837789036545> Successfully deleted \`${amount}\` messages!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``)).then(msg => setTimeout(() => msg.delete().catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - message already delete!\`\`\``)), 500));
    }
}