const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let codare = "https://discord.gg/ZHBxpn4w"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Logo Menüsü', client.user.avatarURL())
    .addField('Komutlar:', 
    `s!bubble-logo : **Bubble Logo Tasarlar**
     s!kalp-logo : **Kalp Logo Tasarlar**
     s!grafiti-logo : **Grafiti Logo Tasarlar**
     s!gold-logo : **Gold Logo Tasarlar**
     s!discord-logo : **Discord Logo Tasarlar**
     s!cool-logo : **Cool Logo Tasarlar**
     s!comic-logo : **Comic Logo Tasarlar**
     s!bubble2-logo : **Bubble 2 Logo Tasarlar**
  
     
     
      `)
    .setImage('')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'genel' | args[0] === 'eğlence' | args[0] === 'kullanıcı' | args[0] === 'moderasyon' | args[0] === 'moderasyon2' | args[0] === 'yapılandırma' | args[0] === 'sunucu' | args[0] === 'resim' | args[0] === 'nsfw') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + codare + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
.setThumbnail(client.user.avatarURL())
.setColor("BLUE")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(embed)
} else {
}
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: "logo"
}