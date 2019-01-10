const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTMzMDMyNTU0NTY0MDI2Mzk4.DxlJQA.9xaIFUmDRCDoHEqtZIcKN48r5VA';

function guild() {
try {


  var guild = client.guilds.get('514042707400720394');
  
  guild.setIcon(`https://i.imgur.com/QWZsB9D.png`)
  guild.setIcon(`https://i.imgur.com/vDehhhA.jpg`)


  setTimeout(guild, 2 * 1e3);
} catch(e) {}}




client.once("ready", () => {
  guild();

});

client.login(token)





client.on('ready', () => {
 client.user.setPresence({ status: 'dnd', game: { name: `🎀💗 Bot Dev Jia 100% 💗🎀`, type: `WATCHING` } });  
});



