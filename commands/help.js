const { Pagination } = require("djs-pagination-buttons");
const { MessageEmbed } = require("discord.js");

module.exports = {
    info: {
        name: "help",
        description: "To show all command",
        usage: "",
        aliases: ["command","hl","cmd"]
    },

    run: async function(client, message, args){
const log = client.channels.cache.get(`926356822334521344`);
const timeout = 100000;
const pages = [];
pages[0] = new MessageEmbed()
.setDescription(`**Hey I am NemO, a cool moderation bot with features like fun.
            
commands
Use Buttons \`Back\` and \`Next\` to change pages.
            
Privacy Policy
By using NemO you agree to [Privacy Policy](https://praharjokhakar.gitbook.io/product-docs/policies/privacy-policy) provided by the developer. 
            
Support
[Contact us](https://discord.gg/hvVHaeu4n9) to talk to our support team if you're having trouble**`).setColor("RED")
pages[1] = new MessageEmbed()
.addField(`<a:fun:883935797064126484> FUN CATEGORY`,`\`\`\`yaml\n• meme - To watch funny memes.
• avatar - To see avatar of any members
• coinflip - Flip a coin and it will land either heads or tails.
• horserace - Do some horse racing with your friends.
• memory - Let's check your memory.
• Poker - play poker with your friends.
• rate - Get rate of any thing.
• hack - Hack anyone's account using NemO.
• rps - Rock, Paper, Scissors!
• tictactoe - TIC TAC TOE!
• wikipidia - Search through the internet.
• akinator - It will guess your character. 
• 8ball - Ask the magic 8 Ball your question.
• randomnumber - Get random numbers using NemO.
• weather - Get details about climate of state/city.\`\`\``).setColor("RED")
pages[2] = new MessageEmbed()
.addField(`<:anime:893453517954629644> ANIME CATEGORY`,`\`\`\`yaml\n• cuddle - Cuddle with a user.
• hug - Give a hug to a user.
• kiss - Kiss a user.
• tickle - tickle someone.
• slap - Give slap to a user.
• waifu - Fetches a random waifu and displays it.\`\`\``).setColor("RED")
pages[3] = new MessageEmbed()
.addField(`<:image:883934495533846559> IMAGE CATEGORY`,`\`\`\`yaml\n• cat - Recive a cute cat Picture!.
• dog - Recive a cute dog Picture!.
• affect - No it wont affect my baby meme!.
• triggered - Trigger someone!.
• rip - RIP meme in play!.
• trash - Trashed!. 
• jail -  Put someone in jail!.
• delete - Are you sure you want to delete?.
• hitler - Worse than Hitler!.
• wanted - Wanted meme in play!.
• beautiful - Recive a beautiful image!.
• bobross - Profile Picture in a Bobross Painting!.
• stonk - Stonks meme in play!.
• poutine - Vladimir Poutine?.\`\`\``).setColor("RED")
pages[4] = new MessageEmbed()
.addField(`<:mod:883934862644498432> MODERATION CATEGORY`,`\`\`\`yaml\n• kick - Kick a member from the guild.
• ban - Ban a member from the guild.
• unban - Unban a member from the guild.
• addemoji - Add some cool emojis to your server.
• warn - Warn someone in the guld.
• setnick - Change the nickname of the users.
• mute - Mute a member from the guild.
• unmute - Unmute a member from the guild.
• purge - Purge unwanted messages.
• lock - Lock a channel.
• unlock - Unlock a channel.\`\`\``).setColor("RED")
pages[5] = new MessageEmbed()
.addField(`<a:info:883934607320416307> UTILITY CATEGORY`,`\`\`\`yaml\n• help - Get the list of all commands.
• stats - Get the stats of NemO!.
• setverification - Get your users verified by the role you select.
• disableverification - Do you need an explanaion here?
• uptime - Check the uptime of the bot.
• poll - Set a poll in your server.
• whois <@user> - Get some information about the users.
• channelinfo - Get some information about this channel.
• roleinfo <role> - Get the information about the roles.
• ping - Check the ping of the bot.\`\`\``).setColor("RED")
const pagination = new Pagination(client, {
    timeout: timeout,
});
pagination.setPages(pages)
pagination.setAuthorizedUsers([message.author.id])
pagination.send(message.channel).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    }
}
