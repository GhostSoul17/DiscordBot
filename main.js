import { helpCall } from './helpCommands';

const Discord = require('discord.js');
require('dotenv').config();

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
    if(message.content.toLowerCase() == "hey" || message.content.toLowerCase() == "yo"){
        message.reply("I notice you...")
    }
})

helpCall(client);

client.login(process.env.TOKEN)
