const Discord = require('discord.js');
const BuildC4 = new Discord.Client();

console.log("BOT ONLINE");
 
BuildC4.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم ورحمة الله تعالى وبركاته.
لو سمحت ممكن تدخل سيرفرى يا قلبي <3...
:man_in_tuxedo:5 Invites = 10.000 :credit_card:  Credit ProBot + 
:man_in_tuxedo:10 Invites = 25.000 :credit_card:  Credit ProBot + 
:man_in_tuxedo:20 Invites = 50.000 :credit_card:  Credit ProBot + 
:man_in_tuxedo:40 Invites = 100.000 :credit_card:  Credit ProBot + 
:man_in_tuxedo:100 Invites = 300.000 :credit_card:  Credit ProBot +
                               [ https://discord.gg/J5kZpS ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
BuildC4.login('NTEyMzgzMjM0MzYyMDQ4NTMy.Ds7uww.fP7UyUbzGUub1avgJSMHdyQAKA0');