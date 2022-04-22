const Discord = require("discord.js");

exports.run = (client, message) => {
  const Code = new Discord.MessageEmbed()

    .setColor("#2196F3")
    .setTitle("**Surcy Eğlence Komutları**")
    .setThumbnail("")
    .setDescription(
      `
      
      
  **s!ascii** : Ascii Fontunda Yazı Yazar
  **s!aşkölçer** : Aşkınızı Ölçer
  **s!balıktut** : Balık Tutarsınız
  **s!boks** : Boks Makinasına Vurursunuz
  **s!deste** : Zula Deste Açarsınız
  **s!düello** : Etiketlediginiz Kişiyle Tek Tek Atarsınız
  **s!efkarım** : Efkarını Ölçer
  **s!emojiyazı** : Yazdıgınız Yazıyı Emojiyle Yazar
  **s!kafasınasık** : Etiketlediginiz Kişinin Kafasına Sıkar
  **s!kartopu** : Etiketlediginiz Kişiye Kartopu Atar
  **s!korona** : Korona Bilgisi Verir
  **s!şalgam** : Şalgam Komutu
  **s!yazıtura** : Yazı Tura Atarsınız
  **s!tokat** : Etiketlediginiz Kişiye Tokat Atarsınız

`
    )
  
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(Code).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "eğlence", 
  description: "Komutlar hakkında bilgi verir.",
  usage: "yardım",
};
