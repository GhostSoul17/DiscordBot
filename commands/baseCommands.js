import { client } from "../main.js";

export default function messageCommand(callback, starter) {
    client.on("messageCreate", (message) => {
        if (starter)
        {
            for (const prefix in starter)
            {
                if (!message.content.startsWith(prefix)) return;
            }
        }

        callback(message);
    });
};