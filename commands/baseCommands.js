import { client } from "../main";

export default function messageCommand(callback, starter) {
    client.on("messageCreate", (message) => {
        if (starter)
        {
            if (!message.content.startsWith(starter)) return;

            callback(message);
        }
    });
};