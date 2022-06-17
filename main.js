import HelpCommands from './commands/helpCommands.js';
import SpeechHammer from './commands/speechHammer.js';
// import UserCommands from './userCommands.js';
// import SarcasmCommands from './sarcasmCommands/sarcasmCommands.js';
import GameBot from './games/gameBot.js';
import Discord from 'discord.js';
import env from 'dotenv';

env.config();

export const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

const starter = "stalkerbot";
const starterG = "gamebot";
const helper = new HelpCommands(starter);
const hammer = new SpeechHammer(starter);
// const users = new UserCommands(starter);
const gameBot = new GameBot(starterG);
// const sarcasmCommands = new SarcasmCommands();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

helper.helpCall();

hammer.checkSpeech();

hammer.welcomeSpeech();

// users.banUser();

// users.kickUser();

gameBot.gameCall();

// sarcasmCommands.listenForSarcasm();

client.login(process.env.TOKEN);