class HelpCommands {

    constructor(client) {
        this.client = client;
    };

    helpCall() {
        this.client.on("messageCreate", (message) => {
            
            if (!message.content.toLowerCase().startsWith(starter)) return;

            if(message.content.toLowerCase().includes("help")){
                message.reply("Please be more specific")
            }
        })
    };

}

export default HelpCommands;