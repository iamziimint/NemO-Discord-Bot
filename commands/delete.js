const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
    info: {
      name: "delete",
      description: "",
      usage: "",
      aliases: ["trash"],
    },
  
    run: async function (client, message, args) {
    const log = client.channels.cache.get(`RED`);
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 if (!user) { return message.reply('<:no:884059056174682122>  Please Tag a Valid User!').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));};
 let m = await message.channel.send("<a:loading21:865788054358720532> **loading...**").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Delete().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "Delete.png");
    m.delete({ timeout: 500 });
    message.reply({files: [attach]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
  },
};