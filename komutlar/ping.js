const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = (client, message, params) => {
  
 message.channel.send("Pong! pingim: " + client.ws.ping + "ms")
  }

exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "ping",
  
}