const Discord = require('discord.js');
const TOKEN = "OTgzMTgzNDQxNjczNzQ4NTAw.GSveC6._2rZ8liVaHDkJu7_WNDRNcUgUmf-_qLE-q0bgo";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)

})

client.on("messageCreate", (message) => {
    if(message.content == "hey" || message.content == "yo"){
        message.reply("I notice you...")
    }
})

client.login(TOKEN)
