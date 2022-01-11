const Discord = require('discord.js');
const got = require('got');
module.exports = {
    info: {
        name: "dog",
        description: "To show all command",
        usage: "",
        aliases: ["dog"]
    },

    run: async(client, message, args) => {
    const log = client.channels.cache.get(`926356822334521344`);
      let dogembed = new Discord.MessageEmbed() 
      got('https://www.reddit.com/r/dogpictures/random/.json').then(response => { let content = JSON.parse(response.body); 
      let dogImage = content[0].data.children[0].data.url; 
      dogembed.setImage(dogImage) 
      dogembed.setColor('RED') 
message.channel.send({ embeds : [dogembed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
      })
      }
}
 
