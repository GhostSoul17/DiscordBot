import HelpCommands from './helpCommands.js';
import SpeechHammer from './speechHammer.js';
// import UserCommands from './userCommands.js';
import GameBot from './gameBot.js';
import Discord from 'discord.js';
import env from 'dotenv';

env.config();

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

const starter = "stalkerbot";
const starterG = "gamebot";
const helper = new HelpCommands(client, starter);
const hammer = new SpeechHammer(client, starter);
// const users = new UserCommands(client, starter);
const gameBot = new GameBot(client, starterG);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)

});

client.on("messageCreate", message => {
    const filter = m => {
       return m.author.id == message.author.id;
    }

    if (message.content.toLowerCase() == "?hello") {
        message.channel.send("what is your name?");

        message.channel.awaitMessageComponent(filter, { time: 5000 })
        .then(collected => {
            console.log(collected);
            message.reply("Thanks for the reply!");
        })
    }
})

helper.helpCall();

hammer.checkSpeech();

hammer.welcomeSpeech();

// users.banUser();

// users.kickUser();

gameBot.gameCall();

client.login(process.env.TOKEN)
