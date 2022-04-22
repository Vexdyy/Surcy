const WestraDiscord = require('discord.js');
exports.run = (client, message) => {
  const asreaperEmbed = new WestraDiscord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setImage(client.users.cache.random().displayAvatarURL({ display: true, dynamic: true }))
  message.channel.send(asreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["random-pp","randomavatar","random-avatar"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'randompp',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};