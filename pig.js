const express = require("express")
const app = express()
const Database = require("@replit/database")
const db = new Database()
const eb = require('quick.db');

app.get("/", (req, res) => {
  res.send("hello hello!")
})

app.listen(5000, () => {
  const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
              console.log(generateRandomNumber(0, 6))
  console.log("Project is ready!")
})
let Discord = require("discord.js")
let client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

// client.login(process.env.TOKEN).catch(err => console.log(`Invalid Token Provided!`));

//random test//
client.on("message", async message => {
if(message.content === "ping"){
message.channel.send("pong")
}
})

client.on("message", message => {
if(message.content === "hashim"){
message.channel.send("hisyam")
}
})


//bal
//SHOP//SHOP//SHOP//SHOP//SHOP//SHOP//SHOP//SHOP//SHOP//SHOP//SHOP//SHOP

client.on("message", async message => { 
  if(message.content.toLocaleLowerCase().startsWith("pigshop 2")) {

let currentBalance = await db.get(`wallet_${message.author.id}`)
let currency = "<:pigcoin:868492960478670859>"
let shopEmbed = new Discord.MessageEmbed().setTitle(`PIGGY SHOP`).setDescription(`**Trash Pile VIP Card**\nPrice : 100${currency}\nGive you access to take some things on the trash pile by doing PigTrash\nCode Name : trash pile vip card\n\n`).setColor("GREEN").setThumbnail(message.author.displayAvatarURL({dynamic: true}))
message.channel.send(shopEmbed)
}
if(message.content.toLocaleLowerCase().startsWith("pigbuy trash pile vip card")) {
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(currentBalance < 100) {
    message.channel.send("You dont have enough PigCoins to buy that")
  } else {
      let currency = "<:pigcoin:868492960478670859>"
      let happy = "<:happykp:865542069329592320>"
      let currentBalance = await db.get(`wallet_${message.author.id}`)
      let trashcard = 100
      let kingPig = await db.get(`kingpig_${message.author.id}`)
      let kebabEmbed = new Discord.MessageEmbed().setTitle(`${message.author.username} has bought the Trash Pile Vip Card for 100${currency}`).setColor("GREEN").setDescription(`he is now allowed to keep things that he found on the trash pile`).setThumbnail(message.author.displayAvatarURL({dynamic: true}))

      message.channel.send(kebabEmbed)
      await db.set(`wallet_${message.author.id}`, currentBalance - trashcard)
}
}
  
//HELP//HELP//HELP//HELP//HELP//HELP//HELP//HELP//HELP//HELP
//WORK//WORK//WORK//WORK//WORK//WORK//WORK//WORK//WORK
//JOBLIST//JOBLIST//JOBLIST//JOBLIST//JOBLIST//JOBLIST//JOBLIST//JOBLIST//JOBLIST
 if(message.content.toLocaleLowerCase().startsWith("pigjob king pig carrier")) {
   let kingPig = await db.get(`kingpig_${message.author.id}`)
   if(kingPig < 35) {
     message.channel.send("your king pig happy level is not enough")
   } else {
     let work = await db.get(`work_${message.author.id}`)
     let carrierEmbed = new Discord.MessageEmbed().setTitle(`CONGRATS ${message.author.username}!`).setDescription("You are now a King Pig Carrier<:KingPigCarrier:870227061732691978>").setColor("GREEN")
     message.channel.send(carrierEmbed)

     await db.set(`work_${message.author.id}`, work - work + 2)}
 }
 if(message.content.toLocaleLowerCase().startsWith("pigjob miner")) {
   let kingPig = await db.get(`kingpig_${message.author.id}`)
   if(kingPig < 150) {
     message.channel.send("your king pig happy level is not enough")
   } else {
     let work = await db.get(`work_${message.author.id}`)
   let cleanerEmbed = new Discord.MessageEmbed().setTitle(`CONGRATS ${message.author.username}!`).setDescription("You are now a Miner<:Miner:870229117692416010>").setColor("GREEN")
   message.channel.send(cleanerEmbed)

   await db.set(`work_${message.author.id}`, work - work + 4)}
 }
 if(message.content.toLocaleLowerCase().startsWith("pigjob cleaner")) {
   let kingPig = await db.get(`kingpig_${message.author.id}`)
   if(kingPig < 75) {
     message.channel.send("your king pig happy level is not enough")
   } else {
     let work = await db.get(`work_${message.author.id}`)
   let cleanerEmbed = new Discord.MessageEmbed().setTitle(`CONGRATS ${message.author.username}!`).setDescription("You are now a Cleaner<:Cleaner:870227215596519485>").setColor("GREEN")
   message.channel.send(cleanerEmbed)

   await db.set(`work_${message.author.id}`, work - work + 3)}
 }
 if(message.content.toLocaleLowerCase().startsWith("pigsearch")) {
   const check = await db.get(`searchcheck_${message.author.id}`);
  const timeout = 30000;
  if(check !== null && timeout - (Date.now() - check) > 0) {
    const ms = require("pretty-ms")
    const timeleft =ms(timeout - (Date.now() - check))
    let searchtimerEmbed = new Discord.MessageEmbed().setTitle(`Oi ${message.author.username}!`).setDescription(`you can only search every 30 seconds, pls wait for another ${timeleft}`).setColor("RED")
  message.channel.send(searchtimerEmbed)
 } else {
   const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
    };
    let search = (generateRandomNumber(1, 1))
    if(search === 1 ) {
      const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
    };
    let search1 = (generateRandomNumber(0, 3))
    let search2 = (generateRandomNumber(4, 7))
    let search3 = (generateRandomNumber(8, 11))
    if(search1 === 0) search1 = "my house"
    if(search1 === 1) search1 = "playground"
    if(search1 === 2) search1 = "beach"
    if(search1 === 3) search1 = "main town"
    if(search2 === 4) search2 = "workplace"
    if(search2 === 5) search2 = "building site"
    if(search2 === 6) search2 = "lab"
    if(search2 === 7) search2 = "castle"
    if(search3 === 8) search3 = "army base"
    if(search3 === 9) search3 = "trash pile"
    if(search3 === 10) search3 = "public pool"
    if(search3 === 11) search3 = "crashtest field"

    let filter = m => m.author.id === message.author.id
    message.channel.send(`${message.author.username} you are searching inside the kingdom, where do you want to search?\n\n__${search1}__\n__${search2}__\n__${search3}__`).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(async message => {
          message = message.first()
          if (message.content.toLowerCase() == `${search1}`) {
            const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
              let prize1 = (generateRandomNumber(5, 25))
              let luck = (generateRandomNumber(2, 6))
              if(luck > 3) {
            let currentBalance = await db.get(`wallet_${message.author.id}`)
            let searched1Embed = new Discord.MessageEmbed().setTitle(`you searched at the ${search1} ${message.author.username}!`).setColor("GREEN").setDescription(`you've earned ${prize1} PigCoins!`)
            message.channel.send(searched1Embed)
            await db.set(`wallet_${message.author.id}`, currentBalance + prize1)
            } else {
                if(search1 === "my house") {
                  const generateRandomNumber = (min, max) =>  {
                   return Math.floor(Math.random() * (max - min) + min);
                  };
                  let currentBalance = await db.get(`wallet_${message.author.id}`)
                  let unlucky = (generateRandomNumber(1, 5))
                  let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search1} ${message.author.username}!`).setColor("RED").setDescription(`only to find out that the police pigs is at your house\nyou lost ${unlucky} PigCoins`)

                message.channel.send(unluckyEmbed)
                await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)

                } else if(search1 === "playground") {
                  const generateRandomNumber = (min, max) =>  {
                return Math.floor(Math.random() * (max - min) + min);
                 };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search1} ${message.author.username}!`).setColor("RED").setDescription(`and then you accidently hit a piglet, now their parents are mad\nyou lost ${unlucky} PigCoins`)
                
               message.channel.send(unluckyEmbed)
               await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)

                } else if(search1 === "main town") {
                  const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search1} ${message.author.username}!`).setColor("RED").setDescription(`there was a parade there but then you accidently throwed a trash at King Pig instead of the trash bin\nyou lost ${unlucky} PigCoins`)
            message.channel.send(unluckyEmbed)
            await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)
              } else if(search1 === "beach") {
                  const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search1} ${message.author.username}!`).setColor("RED").setDescription(`and then you accidently stepped on a piglet's sancastle, their parents are mad now\nyou lost ${unlucky} PigCoins`)
            message.channel.send(unluckyEmbed)
            await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)
              }
            }

          } else if (message.content.toLowerCase() == `${search2}`) {
            const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
              let prize1 = (generateRandomNumber(5, 25))
              let luck = (generateRandomNumber(2, 6))
              if(luck > 3) {
            let currentBalance = await db.get(`wallet_${message.author.id}`)
            let searched1Embed = new Discord.MessageEmbed().setTitle(`you searched at the ${search2} ${message.author.username}!`).setColor("GREEN").setDescription(`you've earned ${prize1} PigCoins!`)
            message.channel.send(searched1Embed)
            await db.set(`wallet_${message.author.id}`, currentBalance + prize1)
            } else {
                if(search2 === "castle") {
                  const generateRandomNumber = (min, max) =>  {
                   return Math.floor(Math.random() * (max - min) + min);
                  };
                  let currentBalance = await db.get(`wallet_${message.author.id}`)
                  let unlucky = (generateRandomNumber(1, 5))
                  let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search2} ${message.author.username}!`).setColor("RED").setDescription(`but the guards wont let you in,then you accidently punched one of the guard, They are very mad now\nyou lost ${unlucky} PigCoins`)

                message.channel.send(unluckyEmbed)
                await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)

                } else if(search2 === "workplace") {
                  const generateRandomNumber = (min, max) =>  {
                return Math.floor(Math.random() * (max - min) + min);
                 };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search2} ${message.author.username}!`).setColor("RED").setDescription(`then you accidently slap your boss, you got fired\nyou lost ${unlucky} PigCoins`)
                
               message.channel.send(unluckyEmbed)
               await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)

                } else if(search2 === "building site") {
                  const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search2} ${message.author.username}!`).setColor("RED").setDescription(`you accidently hit your head on a pole, you were sent to the hospital.\nyou lost ${unlucky} PigCoins`)
            message.channel.send(unluckyEmbed)
            await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)
              } else if(search2 === "lab") {
                  const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search2} ${message.author.username}!`).setColor("RED").setDescription(`then you accidently pushed a bunch of things on the table, professor pig is mad now\nyou lost ${unlucky} PigCoins`)
            message.channel.send(unluckyEmbed)
            await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)
              }
            }
          } else if (message.content.toLowerCase() == `${search3}`) {
            const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
              let prize1 = (generateRandomNumber(5, 25))
              let luck = (generateRandomNumber(2, 6))
              if(luck > 3) {
            let currentBalance = await db.get(`wallet_${message.author.id}`)
            let searched1Embed = new Discord.MessageEmbed().setTitle(`you searched at the ${search3} ${message.author.username}!`).setColor("GREEN").setDescription(`you've earned ${prize1} PigCoins!`)
            message.channel.send(searched1Embed)
            await db.set(`wallet_${message.author.id}`, currentBalance + prize1)
            } else {
                if(search3 === "army base") {
                  const generateRandomNumber = (min, max) =>  {
                   return Math.floor(Math.random() * (max - min) + min);
                  };
                  let currentBalance = await db.get(`wallet_${message.author.id}`)
                  let unlucky = (generateRandomNumber(1, 5))
                  let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search3} ${message.author.username}!`).setColor("RED").setDescription(`corporal pig thought you were an army too so now you got to pay the army lessons fee\nyou lost ${unlucky} PigCoins`)

                message.channel.send(unluckyEmbed)
                await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)

                } else if(search3 === "trash pile") {
                  const generateRandomNumber = (min, max) =>  {
                return Math.floor(Math.random() * (max - min) + min);
                 };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search3} ${message.author.username}!`).setColor("RED").setDescription(`then a cleaner came and accidently pour some trash on you. So you went back home to find out your soap has ran out, now you got to buy a new one\nyou lost ${unlucky} PigCoins`)
                
               message.channel.send(unluckyEmbed)
               await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)

                } else if(search3 === "crashtest field") {
                  const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search3} ${message.author.username}!`).setColor("RED").setDescription(`then you accidently kicked a piglet into the pool, their parents are mad at you rn\nyou lost ${unlucky} PigCoins`)
            message.channel.send(unluckyEmbed)
            await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)
              } else if(search3 === "crashtest field") {
                  const generateRandomNumber = (min, max) =>  {
             return Math.floor(Math.random() * (max - min) + min);
              };
                let currentBalance = await db.get(`wallet_${message.author.id}`)
                let unlucky = (generateRandomNumber(1, 5))
                let unluckyEmbed = new Discord.MessageEmbed().setTitle(`you searched at the ${search3} ${message.author.username}!`).setColor("RED").setDescription(`then corporal pig tought you were a crashtest pig. You were tested on a rocket. The rocket crashed\nyou lost ${unlucky} PigCoins`)
            message.channel.send(unluckyEmbed)
            await db.set(`wallet_${message.author.id}`, currentBalance - unlucky)
              }
            }
            
          } else {
            message.channel.send(`thats not an available place to go right now`)
          }
        })
        .catch(collected => {
            message.channel.send('Timeout');
        });
    })
      
      }    
      await db.set(`searchcheck_${message.author.id}`, Date.now())
  }
 }
 if (message.content.toLowerCase() == 'ok' || message.content.toLowerCase() == 'oke') {
   let okpig = "<a:okpig:877100592319852544>"

   message.channel.send(okpig)
 }
if(message.content.toLowerCase() == 'piglb' || message.content.toLowerCase() == 'pigleaderboard') {
  
  const { Client, Message, MessageEmbed, Collection } = require('discord.js');
     const collection = new Collection();

 await Promise.all(
   message.guild.members.cache.map(async(member) => {
     const id = member.id;
     const kingpig = await db.get(`kingpig_${member.user.id}`);
     console.log(`${member.user.tag} -> ${kingpig}`)
     return kingpig !== 0 ? collection.set(id, {
       id,
       kingpig,
     })
     : null;
       if(kingpig === null) kingpig = 0
   })
 );
 const data = collection.sort((a, b) => b.kingpig - a.kingpig).first(10);
 let happy = "<:happykp:865542069329592320>"


 message.channel.send(
   new MessageEmbed()
   .setTitle(`**KING PIG FAVOURITES**`)
   .setDescription(
     data.map((v, i) => {
       return `${i+1}] **${client.users.cache.get(v.id).tag}  │  __${v.kingpig}__ ${happy}**`
     })
   )
   .setColor("GREEN")
   .setThumbnail("https://cdn.discordapp.com/attachments/865048273424351302/877516915545866280/images.png")
   )
  }
}
)

const discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json')

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.queue = new Map();



const Categories = ["misc"]; //Commands => Category => Command

Categories.forEach(async function(Category) { //
    fs.readdir(`./commands/${Category}`, async function(error, files) {
      if (error) throw new Error(`Error In Command - Command Handler\n${error}`);
      files.forEach(async function(file) {
        if (!file.endsWith(".js")) throw new Error(`A File Does Not Ends With .js - Command Handler!`);
        let command = require(`./commands/${Category}/${file}`);
   
        if (!command.name || !command.aliases) throw new Error(`No Command Name & Command Aliases In A File - Command Handler!`);
        if (command.name) client.commands.set(command.name, command);
        if (command.aliases) command.aliases.forEach(aliase => client.aliases.set(aliase, command.name));
        if (command.aliases.length === 0) command.aliases = null;
      });
    });
});

client.on("message", async message => {

  let Prefix = config.prefix

  if (message.author.bot || !message.guild || message.webhookID) return;

  if (!message.content.startsWith(Prefix)) return;

  let args = message.content.slice(Prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return console.log(`No Command Found!`);



  if (command) {
    command.run(client, message, args);
  };
});



client.login(process.env.TOKEN).catch(err => console.log(`Invalid Token Provided!`));