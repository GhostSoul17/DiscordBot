import { PythonShell } from 'python-shell';
import messageCommand from '../commands/baseCommands.js';

class SarcasmCommands {
    constructor() { }

    listenForSarcasm() {
        const command = (message) => {
            const phrase = runSarcasmCheck(message.content);
    
            if (phrase.toLowerCase() === "['sarcasm']") {
                message.channel.send("Thats sarcastic!");
            }
        };
    
        messageCommand(command);
    }
}

function runSarcasmCheck(sarcasmPhrase) {
    let phrase = '';
    let options = {
        args: [sarcasmPhrase]
    };

    PythonShell.run('sarcasmScript.py', options, function (error, results) {
        if (error) throw error;

        phrase = results[0];

        console.log(phrase);
    });

    return phrase;
}

export default SarcasmCommands;