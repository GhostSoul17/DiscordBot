import { client } from "../main.js";

export default function messageCommand(callback, starter) {
    client.on("messageCreate", (message) => {
        if (starter)
        {
            for (const starter in starter)
            {
                if (!message.content.startsWith(starter)) return;
            }
        }

        callback(message);
    });
};