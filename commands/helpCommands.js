import messageCommand from './baseCommands.js';

class HelpCommands {
    constructor(starter) {
        this.starter = starter;
    };

    helpCall() {
        const command = (message) => {
            if(message.content.toLowerCase().includes("help")) {
                message.channel.send("Please be more specific");
            }
        };

        messageCommand(command, new Array(this.starter));
    };

};

export default HelpCommands;