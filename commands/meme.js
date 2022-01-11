const Discord = require('discord.js');
const got = require('got');
module.exports = {
    info: {
        name: "meme",
        description: "To show all command",
        usage: "",
        aliases: ["meme"]
    },

    run: async(client, message, args) => {
      const log = client.channels.cache.get(`926356822334521344`);
      let memeembed = new Discord.MessageEmbed() 
      got('https://www.reddit.com/r/memes/random/.json').then(response => { let content = JSON.parse(response.body); 
      let permalink = content[0].data.children[0].data.permalink; 
      let memeUrl = `https://reddit.com${permalink}`; 
      let memeImage = content[0].data.children[0].data.url; 
      let memeTitle = content[0].data.children[0].data.title; 
      let memeUpvotes = content[0].data.children[0].data.ups; 
      let memeDownvotes = content[0].data.children[0].data.downs; 
      let memeNumComments = content[0].data.children[0].data.num_comments; 
      memeembed.setTitle(`${memeTitle}`) 
      memeembed.setURL(`${memeUrl}`) 
      memeembed.setImage(memeImage) 
      memeembed.setColor('RED') 
      memeembed.setFooter(`r/meme | 👍 ${memeUpvotes} | 💬 ${memeNumComments}`)
      message.channel.sendTyping()
      message.channel.send({ embeds : [memeembed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
      })
      }
}
 
