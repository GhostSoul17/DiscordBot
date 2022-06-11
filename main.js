import HelpCommands from './helpCommands.js';
import Discord from 'discord.js';
import env from 'dotenv';

// const Discord = require('discord.js');
// require('dotenv').config();

env.config();

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

const starter = "stalkerbot";
const helper = new HelpCommands(client, starter);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)

})

client.on("messageCreate", (message) => {
    if (!message.content.toLowerCase().startsWith(starter)) return;

    if(message.content.toLowerCase().includes("hey") || message.content.toLowerCase().includes("yo")){
        message.reply("I notice you...")
    }
})

helper.helpCall();

client.login(process.env.TOKEN)
