const Discord = require("discord.js");
const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
      name: "weather",
      description: "To show all command",
      usage: "",
      aliases: ["weather"]
  },

  run: async function(client, message, args){
    const log = client.channels.cache.get(`926356822334521344`);
    //Start

    if (!args[0]) return message.channel.send("Please Give Location!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    weather.find({ search: args.join(" ") }, function(error, result) {
      if (error) return message.channel.send(`Something Went Wrong, Try Again Later!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

      if (result === undefined || result.length === 0)
        return message.channel.send(`Invalid Location, Please Give Valid Location!`).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

      var current = result[0].current;
      var location = result[0].location;

      const Weather = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setTitle(`${location.name} Weather!`)
        .setDescription(`${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature}°`, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .addField("Wind", current.winddisplay, true)
        .addField("Feels Like", `${current.feelslike}°`, true)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .setTimestamp();

        message.channel.send({ embeds : [Weather]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    });

    //End
  }
};
