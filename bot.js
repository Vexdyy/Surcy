// Youtube: 

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Bot Başarıyla Hostlandı.`);
      console.log(`SURCY BOT`)
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

// // Youtube: 



const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);


client.on('ready', () => {
 client.user.setActivity(`🍁 Yardım İçin s!yardım`)
 console.log(`${client.user.tag} isimli bot başarıyla şu an aktifleştirildi!`);
});

//---------------------------------KOMUTLAR---------------------------------//
//---------------------------------Everyone-Here Engel--------------------------\\


let hereEngel = JSON.parse(fs.readFileSync("././jsonlar/hereEngelle.json", "utf8"));
client.on("message", msg => {
  if (!msg.guild) return;
  if (!hereEngel[msg.guild.id]) return;
  if (hereEngel[msg.guild.id].hereEngel === 'kapali') return;
    if (hereEngel[msg.guild.id].hereEngel=== 'acik') {
      const here = ["@here", "@everyone"];
  if (here.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete());
        var e = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Everyone ve Here Engeli!")
        .setDescription(`Bu sunucuda Everyone ve Here kullanmak yasak!`)
        msg.channel.send(e).then(message => message.delete(5000));
    }
}
    }
});

//-------------------------------EVERYONE-HERE Engel Son------------------------\\


//----------------------------LİNK ENGEL ----------------------------------------------------||


client.on("message", async  msg => {
 var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
    if (mayfe == 'acik') {
        const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (birisireklammidedi.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Reklam yapmana izin vermem!').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (mayfe == 'kapali') {
      
    }
    if (!mayfe) return;
  })
  ;

//----------------------------LİNK ENGEL SON----------------------------------------------------||

//---------------------------- SA AS----------------------------------------------------||

client.on("message", message => {
  if(message.content.toLowerCase() == "Sa")  
  return message.reply(`Aleyküm selam, hoş geldin!`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "sa")  
  return message.reply(`Aleyküm selam, hoş geldin!`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "SA")  
  return message.reply(`Aleyküm selam, hoş geldin!`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "Selamün Aleyküm")  
  return message.reply(`Aleyküm selam, hoş geldin!`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "Selamün aleyküm")  
  return message.reply(`Aleyküm selam, hoş geldin!`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "sea")  
  return message.reply(`Aleyküm selam, hoş geldin!`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "slm")  
  return message.reply(`Aleyküm selam, hoş geldin!`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "hi")  
  return message.reply(`Aleyküm selam, hoş geldin!`)
});

//---------------------------- SA AS SON----------------------------------------------------||


client.on("ready", async () => {
  let sesliKanalID = client.channels.cache.get("964865893215658004");
  if (sesliKanalID)
    sesliKanalID.join()
      .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});


////MODLOG////
/// modlog sistemi

client.on("messageDelete", async (message) => {

  if (message.author.bot || message.channel.type == "dm") return;

  let log = message.guild.channels.cache.get(await db.fetch(`log_${message.guild.id}`));

  if (!log) return;

  const embed = new Discord.MessageEmbed()

    .setTitle(message.author.username + " | Mesaj Silindi")

    .addField("Kullanıcı: ", message.author)

    .addField("Kanal: ", message.channel)

    .addField("Mesaj: ", "" + message.content + "")

  log.send(embed)

})

client.on("messageUpdate", async (oldMessage, newMessage) => {

  let modlog = await db.fetch(`log_${oldMessage.guild.id}`);

  if (!modlog) return;

  let embed = new Discord.MessageEmbed()

  .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())

  .addField("**Eylem:**", "Mesaj Düzenleme")

  .addField("**Mesajın sahibi:**", `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`)

  .addField("**Eski Mesajı:**", `${oldMessage.content}`)

  .addField("**Yeni Mesajı:**", `${newMessage.content}`)

  .setTimestamp()

  .setColor(0x36393F)

  .setFooter(`Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`, oldMessage.guild.iconURL())

  .setThumbnail(oldMessage.guild.iconURL)

  client.channels.cache.get(modlog).send(embed)

});

client.on("channelCreate", async(channel) => {

  let modlog = await db.fetch(`log_${channel.guild.id}`);

    if (!modlog) return;

    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());

    let kanal;

    if (channel.type === "text") kanal = `<#${channel.id}>`

    if (channel.type === "voice") kanal = `\`${channel.name}\``

    let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Oluşturma")

    .addField("**Kanalı Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturduğu Kanal:**", `${kanal}`)

    .setTimestamp()

    .setColor(0x36393F)

    .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())

    .setThumbnail(channel.guild.iconUR)

    client.channels.cache.get(modlog).send(embed)

    })

client.on("channelDelete", async(channel) => {

  let modlog = await db.fetch(`log_${channel.guild.id}`);

    if (!modlog) return;

    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());

    let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Silme")

    .addField("**Kanalı Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Kanal:**", `\`${channel.name}\``)

    .setTimestamp()

    .setColor(0x36393F)

    .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())

    .setThumbnail(channel.guild.iconURL)

    client.channels.cache.get(modlog).send(embed)

    })

client.on("roleCreate", async(role) => {

let modlog = await db.fetch(`log_${role.guild.id}`);

if (!modlog) return;

const entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Rol Oluşturma")

.addField("**Rolü oluşturan kişi:**", `<@${entry.executor.id}>`)

.addField("**Oluşturulan rol:**", `\`${role.name}\` **=** \`${role.id}\``)

.setTimestamp()

.setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)

.setColor(0x36393F)

.setThumbnail(role.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("roleDelete", async(role) => {

let modlog = await db.fetch(`log_${role.guild.id}`);

if (!modlog) return;

const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Rol Silme")

.addField("**Rolü silen kişi:**", `<@${entry.executor.id}>`)

.addField("**Silinen rol:**", `\`${role.name}\` **=** \`${role.id}\``)

.setTimestamp()

.setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)

.setColor(0x36393F)

.setThumbnail(role.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiCreate", async(emoji) => {

let modlog = await db.fetch(`log_${emoji.guild.id}`);

if (!modlog) return;

const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Emoji Oluşturma")

.addField("**Emojiyi oluşturan kişi:**", `<@${entry.executor.id}>`)

.addField("**Oluşturulan emoji:**", `${emoji} - İsmi: \`${emoji.name}\``)

.setTimestamp()

.setColor(0x36393F)

.setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)

.setThumbnail(emoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiDelete", async(emoji) => {

let modlog = await db.fetch(`log_${emoji.guild.id}`);

if (!modlog) return;

const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Emoji Silme")

.addField("**Emojiyi silen kişi:**", `<@${entry.executor.id}>`)

.addField("**Silinen emoji:**", `${emoji}`)

.setTimestamp()

.setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)

.setColor(0x36393F)

.setThumbnail(emoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiUpdate", async(oldEmoji, newEmoji) => {

let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);

if (!modlog) return;

const entry = await oldEmoji.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Emoji Güncelleme")

.addField("**Emojiyi güncelleyen kişi:**", `<@${entry.executor.id}>`)

.addField("**Güncellenmeden önceki emoji:**", `${oldEmoji} - İsmi: \`${oldEmoji.name}\``)

.addField("**Güncellendikten sonraki emoji:**", `${newEmoji} - İsmi: \`${newEmoji.name}\``)

.setTimestamp()

.setColor(0x36393F)

.setFooter(`Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`, oldEmoji.guild.iconURL)

.setThumbnail(oldEmoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("guildBanAdd", async(guild, user) => {

let modlog = await db.fetch(`log_${guild.id}`);

if (!modlog) return;

const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_ADD"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Yasaklama")

.addField("**Kullanıcıyı yasaklayan yetkili:**", `<@${entry.executor.id}>`)

.addField("**Yasaklanan kullanıcı:**", `**${user.tag}** - ${user.id}`)

.addField("**Yasaklanma sebebi:**", `${entry.reason}`)

.setTimestamp()

.setColor(0x36393F)

.setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

.setThumbnail(guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("guildBanRemove", async(guild, user) => {

let modlog = await db.fetch(`log_${guild.id}`);

if (!modlog) return;

const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_REMOVE"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Yasak kaldırma")

.addField("**Yasağı kaldıran yetkili:**", `<@${entry.executor.id}>`)

.addField("**Yasağı kaldırılan kullanıcı:**", `**${user.tag}** - ${user.id}`)

.setTimestamp()

.setColor(0x36393F)

.setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

.setThumbnail(guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})
// mod log son ///


///OTOROL///
//// otorol sistemi

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;
const asreaper = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setFooter(`Asreaper`)
.setDescription( " **" +
          member.user.username +
          "** hoş geldin! Otomatik rolün verildi. Seninle beraber **" +
          member.guild.memberCount +
          " **kişiyiz!")
  if (!mesaj) {
    client.channels.cache
      .get(kanal)
      .send(asreaper);
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj
      .replace("-uye-", `${member.user}`)
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.cache.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
  }
});

//////




///reklam-engel

const reklam = [
  ".com",
  ".net",
  ".xyz",
  ".tk",
  ".pw",
  ".io",
  ".me",
  ".gg",
  "www.",
  "https",
  "http",
  ".gl",
  ".org",
  ".com.tr",
  ".biz",
  "net",
  ".rf",
  ".gd",
  ".az",
  ".party",
".gf",
".31"
];
client.on("messageUpdate", async (old, nev) => {

if (old.content != nev.content) {
let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);
if (i) {

if (reklam.some(word => nev.content.includes(word))) {
if (nev.member.hasPermission("BAN_MEMBERS")) return ;
 //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
const embed = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${nev.author} , **Mesajını editleyerek reklam yapmaya çalıştı!**`)
      .addField("Mesajı:",nev)
  
      nev.delete();
      const embeds = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${nev.author} , **Mesajı editleyerek reklam yapamana izin veremem!**`) 
    client.channels.cache.get(y).send(embed)
      nev.channel.send(embeds).then(msg => msg.delete({timeout:5000}));
    
}
} else {
}
if (!i) return;
}
});

client.on("message", async msg => {


if(msg.author.bot) return;
if(msg.channel.type === "dm") return;
   let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);

let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
    if (i) {
        if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
          try {
           if (!msg.member.hasPermission("MANAGE_GUILD")) {
           //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
msg.delete({timeout:750});
              const embeds = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` <@${msg.author.id}> , **Bu sunucuda reklam yapmak yasak!**`)
msg.channel.send(embeds).then(msg => msg.delete({timeout: 5000}));
          const embed = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${msg.author} , **Reklam yapmaya çalıştı!**`) .addField("Mesajı:",msg)
         client.channels.cache.get(y).send(embed)
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
   if(!i) return ;
});


//reklam engel son //


//küfür engel //

const küfür = [
        "siktir",
        "fuck",
        "puşt",
        "pust",
        "piç",
        "sikerim",
        "sik",
        "yarra",
        "yarrak",
        "amcık",
        "orospu",
        "orosbu",
        "orosbucocu",
        "oç",
        ".oc",
        "ibne",
        "yavşak",
        "bitch",
        "dalyarak",
        "amk",
        "awk",
        "taşak",
        "taşşak",
        "daşşak",
		"sikm",
		"sikim",
		"sikmm",
		"skim",
		"skm",
		"sg"
      ];
client.on("messageUpdate", async (old, nev) => {
  
    if (old.content != nev.content) {
    let i = await db.fetch(`küfür.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`küfür.${nev.member.guild.id}.kanal`);
   if (i) {
      
      if (küfür.some(word => nev.content.includes(word))) {
      if (nev.member.hasPermission("BAN_MEMBERS")) return ;
       //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
 const embed = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${nev.author} , **Mesajını editleyerek küfür etmeye çalıştı!**`)
            .addField("Mesajı:",nev)
        
            nev.delete();
            const embeds = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${nev.author} , **Mesajı editleyerek küfür etmene izin veremem!**`) 
          client.channels.cache.get(y).send(embed)
            nev.channel.send(embeds).then(msg => msg.delete({timeout:5000}));
          
      }
    } else {
    }
    if (!i) return;
  }
});

client.on("message", async msg => {

     
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
         let y = await db.fetch(`küfür.${msg.member.guild.id}.kanal`);
   
    let i = await db.fetch(`küfür.${msg.member.guild.id}.durum`);
          if (i) {
              if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                 if (!msg.member.hasPermission("MANAGE_GUILD")) {
                 //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
     msg.delete({timeout:750});
                    const embeds = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` <@${msg.author.id}> , **Bu sunucuda küfür yasak!**`)
      msg.channel.send(embeds).then(msg => msg.delete({timeout: 5000}));
                const embed = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${msg.author} , **Küfür etmeye çalıştı!**`) .addField("Mesajı:",msg)
               client.channels.cache.get(y).send(embed)
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
         if(!i) return ;
});

//küfür engel son //



// spam engel

const dctrat = require('dctr-antispam.js'); 

var authors = [];
var warned = [];

var messageLog = [];

client.on('message', async message => {
const spam = await db.fetch(`spam.${message.guild.id}`);
if(!spam) return;
const maxTime = await db.fetch(`max.${message.guild.id}.${message.author.id}`);
const timeout = await db.fetch(`time.${message.guild.id}.${message.author.id}`);
db.add(`mesaj.${message.guild.id}.${message.author.id}`, 1)
if(timeout) {
const sayı = await db.fetch(`mesaj.${message.guild.id}.${message.author.id}`);
if(Date.now() < maxTime) {
  const asreaper = new Discord.MessageEmbed()
  .setColor(0x36393F)
  .setDescription(` <@${message.author.id}> , **Bu sunucuda spam yapmak yasak!**`)
 // .setFooter(`Bu mesaj otomatik olarak silinecektir.`)
 if (message.member.hasPermission("BAN_MEMBERS")) return ;
 message.channel.send(asreaper).then(msg => msg.delete({timeout: 1500}));
  return message.delete();
  
}
} else {
db.set(`time.${message.guild.id}.${message.author.id}`, 'ok');
db.set(`max.${message.guild.id}.${message.author.id}`, Date.now()+3000);
setTimeout(() => {
db.delete(`mesaj.${message.guild.id}.${message.author.id}`);
db.delete(`time.${message.guild.id}.${message.author.id}`);
}, 500) // default : 500
}


});


/////


////-------------AFK----------------\\\\\\\\\

client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){

       msg.reply(`Afk'lıktan Çıktınız`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});
