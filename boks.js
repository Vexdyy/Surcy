const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let user = message.mentions.users.first();
        var bokspuan = [
            "**Fena Değil:** \`150\`",
            "**Kör Oldum Bu Ne :** \`0\`",
            "**Fena Değil:** \`220\`",
            "**Fena Değildin:** \`345\`",
            "**İdare Eder:** \`360\`",
            "**Olucak Olucak Hadi:** \`465\`",
            "**Olucak Olucak Hadi:** \`500\`",
            "**Olucak Olucak Hadi:** \`535\`",
            "**Orta:** \`1000\`",
            "**Ah Lan Kanka:** \`1500\`",
            "**Süper:** \`2000\`",
            "**Helal Lan Sana :** \`3000\`",
            "**Hassiktir Makinayı Kırdın:** \`4000\`",
            "**Hassiktir Makinayı Kırdın Nesin Sen ?:** \`5000\`"
        ]
        
        let boksrandom = bokspuan[Math.floor(Math.random() * bokspuan.length)]
        const amanerde = new Discord.MessageEmbed()
        .setDescription( "**"+message.author.username +"**"+ `\nBoks Makinası Sonucun;\n${boksrandom}`)
        .setColor('RED')
        .setFooter('')
        message.channel.send(amanerde)
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Boksa','BOKS'],
    permLevel: 0
}

exports.help = {
    name: 'boks'
}