export function helpCall(client){
    client.on("messageCreate", (message) => {
        if(message.content.toLowerCase() == "help"){
            message.reply("Please be more specific")
        }
    })
}