const Discord = require('discord.js');
const got = require('got');
module.exports = {
    info: {
        name: "cat",
        description: "To show all command",
        usage: "",
        aliases: ["cat"]
    },

    run: async(client, message, args) => {
      const log = client.channels.cache.get(`926356822334521344`);
      let catembed = new Discord.MessageEmbed() 
      got('https://www.reddit.com/r/catpictures/random/.json').then(response => { let content = JSON.parse(response.body); 
      let Image = content[0].data.children[0].data.url; 
      catembed.setImage(Image) 
      catembed.setColor('#26ffff') 
message.channel.send({ embeds : [catembed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
      })
      }
}
 
