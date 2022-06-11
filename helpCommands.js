class HelpCommands {

    constructor(client) {
        this.client = client;
    };

    helpCall(){
        this.client.on("messageCreate", (message) => {
            if(message.content.toLowerCase() == "help"){
                message.reply("Please be more specific")
            }
        })
    };

}

export default HelpCommands;