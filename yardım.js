const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Surcy Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Hey! <@${message.author.id}> beni kullandığın için teşekkür ederim!\n •  Prefixim: **s!**\n • Dilim: **TR** :flag_tr:`)
  .addField(" • Kategoriler:", ` > • [s!mod](https://bot): **Moderasyon yardım menüsünü gösterir.**\n > • [s!abone-yardım](https://bot): ** Abone yardım menüsünü gösterir.**\n > • [s!logo](https://bot): ** Logo Komutlarını gösterir.**\n > • [s!eğlence](https://bot): ** Eğlence yardım menüsünü gösterir.** \n > • [s!kullanıcı](https://bot): ** Kullanıcı Komutlarını Gösterir.**`)

  .addField(" • Linkler:", "• [Davet Et](https://discord.com/api/oauth2/authorize?client_id=959768300882120756&permissions=8&scope=bot)")
  .setImage("")
.setFooter("Surcy", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}