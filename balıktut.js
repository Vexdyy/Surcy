const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {

var Code = [

      "Sazan Tuttun! :fish:",
      "Köpek Balığı Tuttun İyi Para Eder Sat Sat :D",
      "Uskumru Tuttun! :fish:",
      "Mezgit Tuttun! Havyarıda Var hee ;) :fish:",
      "Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?",
      "Hamsi Tuttun! :fish:",
      "Levrek Tuttun! :fish:",
      "Hiçbirşey Tutamadın Maalesef! :wastebasket:",
      "Alabalık Tuttun! :fish:",
      "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
      "İstavrit Tuttun! :fish:"

    ];

    var Code = Code[Math.floor(Math.random() * Code.length)];
    message.edit(`${Code}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balıktut"],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",
  usage: "balıktut"
};
