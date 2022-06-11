class SpeechHammer {
    constructor(client, starter) {
        this.client = client;
        this.starter = starter;
        this.naughtyWords = new Array( 
            "moist",
            "lit",
            "yeet",
            "no cap",
            "sus",
            "yolo",
            "cray cray",
            "extra",
            "flex",
            "salty" 
        );
        this.randomReply = new Array(
            "We all float down here...",
            "I'm gonna tell on yoooooooou",
            "GO TO THE PRINCIPAL'S OFFICE!!",
            "YOU SAID A NO NO WORD!",
            "I'M TELLING!",
            "You done fucked up now",
            "We don't do that here.",
            "NO! Bad human!",
            "Ugh. Gross.",
            "Why are you like this?!"
        );
    }

    checkSpeech() {
        this.client.on("messageCreate", (message) => {
            for (let i = 0; i < this.naughtyWords.length; ++i)
            {
                if (message.content.toLowerCase().includes(this.naughtyWords[i]))
                {
                    message.reply(this.randomReply[Math.floor(Math.random() * this.randomReply.length)]);
                    break;
                }
            }
            
        })
    }

    welcomeSpeech() {
        this.client.on("messageCreate", (message) => {
            if (!message.content.toLowerCase().startsWith(this.starter)) return;
        
            if(message.content.toLowerCase().includes("hey") || message.content.toLowerCase().includes("yo")){
                message.reply("I notice you...")
            }
        })
    }
}

export default SpeechHammer;