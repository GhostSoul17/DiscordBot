import messageCommand from '../commands/baseCommands.js';
import httpHelper from '../utils/httpHelper.js';

class SarcasmCommands {
    constructor() { }

    listenForSarcasm() {
        const command = async (message) => {
            let phrase = '';
            const objectMessage = { 'answer': message.content };

            await httpHelper('https://sarcasam-api.herokuapp.com/containsSarcasm', 'POST', objectMessage)
            .then((response) => {
                if (response.status == 200) {
                    return response.json()
                }

                throw new Error();
            }).then((data) => phrase = data.answer)
            .catch(() => {});
    
            if (phrase.toLowerCase() === "sarcasm") {
                message.channel.send("Thats sarcastic! Stop it!");
            }
        };
    
        messageCommand(command);
    }
}

export default SarcasmCommands;