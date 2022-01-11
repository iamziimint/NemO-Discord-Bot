const { MessageEmbed } = require('discord.js');
const { inspect } = require('util');

module.exports = {
    info: {
        name: "eval",
        description: "To show all command",
        usage: "",
        aliases: ["eval"]
    },

    run: async function(client, message, args){
        const log = client.channels.cache.get(`926356822334521344`);
        
        if(message.author.id != "728806245573591132") 
        return message.reply("<:no:884059056174682122> only owner use this command!"
          ).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        function clean(text) {
            if (typeof (text) === 'string') {return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));}
            else {return text;}
        }
        
        const code = args.join(' ');
            const hasAwait = code.includes('await');
            const hasReturn = code.includes('return');
            try {
                let evaled = hasAwait ? await eval(`(async () => { ${hasReturn ? ' ' : 'return'} ${code} })()`) : eval(code);
                if (typeof evaled !== 'string') {
                    evaled = require('util').inspect(evaled, { depth: Number(message.content.slice(-1)) || +!(require('util').inspect(evaled, { depth: 2 })),
                    });
                }
                let embed = new MessageEmbed()
                .addField("<:timer:872478240130887733> Input",`\`\`\`yaml\n${args.join(" ")}\`\`\``)
                .addField("<:output:887272607265742870> Output",`\`\`\`js\n${clean(evaled)}\`\`\``)
                .setColor("#26ffff")
                message.reply({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``))
            }
            catch (err) {
                let embed2 = new MessageEmbed()
                .setDescription(`\`\`\`js\n${clean(err)}\`\`\``)
                .setColor("#26ffff")
                message.reply({ embeds : [embed2]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
            }
        }
    }