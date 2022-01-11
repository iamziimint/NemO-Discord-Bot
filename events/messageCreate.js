const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
  if (message.author.bot) return;

  if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
  message.channel.send(`My prefix here is \`${client.config.prefix}\``).catch(err => console.log(err))

  }

  //Prefixes also have mention match
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd = client.commands.get(command);
  //Searching a command aliases
  const aliases = client.commands.find(x => x.info.aliases.find(c => c === command))

  if(message.channel.type === "dm")return message.channel.send("<a:Animated_Cross448:857518282206085120> **None of the commands work in DMs. So please use commands in server!**").catch(err => console.log(err));
  //Executing the codes when we get the command or aliases
  if(cmd){
    cmd.run(client, message, args);
  }else if(aliases){
    aliases.run(client, message, args);
  }else return
};