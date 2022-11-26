
const config = require("./config.json");
const mineflayer = require('mineflayer')






const bot = mineflayer.createBot({
  host: config.ip, // minecraft server ip
  username: config.username, // minecraft username
  password: config.password, // minecraft password, comment out if you want to log into online-mode=false servers
  port: config.port,
  version: config.version
  
  //port: '25569',                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})








bot.on('chat', (username, message, prefix) => {
  if  (message.startsWith( config.prefix + 'help')) {
    bot.chat("Commands : ")
  }
  return;
})






bot.on('chat', (username, message, prefix) => {

  function intervalFunc() {
    bot.chat('Cant stop me now!');
  }
  if  (message.startsWith( config.prefix + 'd')) {
    setInterval(intervalFunc, 50) 
  }
  return;
})







// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)