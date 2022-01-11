const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
    info: {
      name: "Triggered",
      description: "",
      usage: "",
      aliases: ["triggered"],
    },
  
    run: async function (client, message, args) {
    const log = client.channels.cache.get(`926356822334521344`);
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 if (!user) { return message.reply('<:no:884059056174682122>  Please Tag a Valid User!').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));};
 let m = await message.channel.send("<a:loading21:865788054358720532> **loading...**").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Triggered().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "Triggered.gif");
    m.delete({ timeout: 500 });
    message.reply({files: [attach]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
  },
};