const asreaperDiscord = require('discord.js');
const asreaperClient = new asreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const asreaperEmbed = new asreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **s!davet** \n-> Botu davet edersiniz.
 **s!randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **s!istatistik** \n-> Botun istatistiğini gösterir.
 **s!sonmesaj** \n-> Yazdığınız son mesajı gösterir.
 **s!avatar** \n-> Avatarınızı Gösterir.
  **s!profil** \n-> Profilinizi Gösterir.
   **s!afk** \n-> Afk Moduna Geçersiniz.
   **s!github** \n-> Adını Girdiğiniz Kullanıcının Github Bilgilerini Gösterir .
   **s!google** \n-> Google Arama Yaparsınız.
   **s!steam** \n-> Steam Oyun Bilgilerini Gösterir.
`)
 .setTimestamp()
 message.channel.send(asreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};