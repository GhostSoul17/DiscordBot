import { client } from "../main.js";

export default function messageCommand(callback, starter = []) {
    client.on("messageCreate", (message) => {
        console.log(starter);
        if (starter.length > 0)
        {
            for (const prefix in starter)
            {
                console.log(prefix);
                if (!message.content.startsWith(prefix)) return;
            }
        }

        callback(message);
    });
};