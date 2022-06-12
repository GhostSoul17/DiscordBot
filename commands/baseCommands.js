
import Discord from 'discord.js';
import env from 'dotenv';

env.config();

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

export function messageCommand(callback, starter) {
    client.on("messageCreate", (message) => {
        if (starter)
        {
            if (!message.content.startsWith(starter)) return;

            callback(message);
        }
    })
}

export default function startBot() {
    client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}`);
    });
}