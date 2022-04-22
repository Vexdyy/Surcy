exports.run = async (client, msg, args) => {
    let ask=[
 "Aşkölçer %3 Gösteriyor. ❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 Olmaz uğraşma.",
      "Aşkölçer %6 Gösteriyor. ❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 Olmaz uğraşma.",
      "Aşkölçer %9 Gösteriyor. ❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 Olmaz uğraşma.",
      "Aşkölçer %12 Gösteriyor. ❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 Olmaz büyük ihtimalle.",
      "Aşkölçer %18 Gösteriyor. ❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤 Olmaz olmaz.",
      "Aşkölçer %20 Gösteriyor. ❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 İhtimal düşük.",
      "Aşkölçer %23 Gösteriyor. ❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤 Belkide diyemem.",
      "Aşkölçer %26 Gösteriyor. ❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤 Hayır, olmaz bu.",
      "Aşkölçer %29 Gösteriyor.❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤 Yok olmaz.",
      "Aşkölçer %30 Gösteriyor. ❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 Hiiiç olmaz.",
      "Aşkölçer %40 Gösteriyor. ❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 Belki olabilir.",
      "Aşkölçer %50 Gösteriyor.❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤 Olabilirde, olmayabilirde.",
      "Aşkölçer %60 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤 Birazda olsa olur sanki.",
      "Aşkölçer %70 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤 Olabilir.",
      "Aşkölçer %73 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤 Olabilir.",
      "Aşkölçer %76 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤 Olabilir.",
      "Aşkölçer %79 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤 Olabilir.",
      "Aşkölçer %82 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤  Olur bence.",
      "Aşkölçer %85 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤 Olur gibi.",
      "Aşkölçer %88 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤 Olur mu dersin? Olur olur.",
      "Aşkölçer %90 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤 Olur bu, teklif et.",
      "Aşkölçer %91 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤 Olacak, evlenme teklifi et.",
      "Aşkölçer %92 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤 Olur olur, bal gibi olur.",
      "Aşkölçer %93 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤 Olacak kesinlikle.",
      "Aşkölçer %94 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤 Olur eminim.",
      "Aşkölçer %95 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤 Uğraş biraz daha olacak.",
      "Aşkölçer %96 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤 Seviyorsunuz birbirinizi.",
      "Aşkölçer %97 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤 Evlendirelim sizi.",
      "Aşkölçer %98 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤 Evlenin.",
      "Aşkölçer %99 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤 Bu ne kesin evlenirsiniz.",
      "Aşkölçer %100 Gösteriyor. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ Oldu bile, düğününüz ne zaman?",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimi Sevdiğini etiketlemelisin..')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }