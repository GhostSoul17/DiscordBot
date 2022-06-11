class HelpCommands {

    constructor(client, starter) {
        this.client = client;
        this.starter = starter;
    };

    helpCall() {
        this.client.on("messageCreate", (message) => {
            
            if (!message.content.toLowerCase().startsWith(this.starter)) return;

            if(message.content.toLowerCase().includes("help")){
                message.reply("Please be more specific")
            }
        })
    };

}

export default HelpCommands;