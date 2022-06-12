import { client } from "../main.js";

export default function messageCommand(callback, starter = []) {
    client.on("messageCreate", (message) => {
        if (starter.length > 0)
        {
            for (let i = 0; i < starter.length; ++i)
            {
                if (!message.content.startsWith(starter[i])) return;
            }
        }

        callback(message);
    });
};