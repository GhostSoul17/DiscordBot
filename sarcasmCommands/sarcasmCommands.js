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
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        args: [sarcasmPhrase]
    };

    PythonShell.runString('sarcasmScript.py', options, function (error,results) {
        if (error) throw error;

        phrase = results[0];

        console.log(phrase);
    });

    return phrase;
}

export default SarcasmCommands;