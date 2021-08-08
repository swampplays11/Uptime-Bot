const Discord = require('discord.js')
const webhook = new Discord.WebhookClient('873908224905076786','wRPMMIwJrUeKsNuZs5nstjEVEprM4NMK_ogI0-vShRgKfc-2dTH7E1-XrjhsGgN-EmCI')
module.exports = {
  name: "feedback",
  description: "feedback command (embed style)",

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Please add a reason to feedback!')

    message.reply(`✉ | ${message.author.username}, Thanks for the feedback! :)`)

    const feedbackEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Fedback:`)
      .setDescription(`${args}`)
      .addField("On the server:", `${message.guild.name}`)
      .addField("Server ID:", `${message.guild.id}`)

    webhook.send(feedbackEmbed)

    
  }
}