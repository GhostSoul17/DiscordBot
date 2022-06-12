import messageCommand from './baseCommands.js';

class HelpCommands {
    constructor(starter) {
        this.starter = starter;
    };

    helpCall() {
        const command = (message) => {
            if(message.content.toLowerCase().includes("help")) {
                message.reply("Please be more specific");
            }
        };

        messageCommand(command, [ this.starter ]);
    };

};

export default HelpCommands;