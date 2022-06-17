import messageCommand from "./baseCommands.js";

class SpeechHammer {
    constructor(starter) {
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
        const command = (message) => {
            const messageArr = message.content.toLowerCase().split(" ");

            for (let i = 0; i < this.naughtyWords.length; ++i)
            {
                if (messageArr.includes(this.naughtyWords[i]))
                {
                    message.channel.send(this.randomReply[Math.floor(Math.random() * this.randomReply.length)]);
                    break;
                }
            }
        };

        messageCommand(command);
    }

    welcomeSpeech() {
        const command = (message) => {
            if(message.content.toLowerCase().includes("hey") || message.content.toLowerCase().includes("yo")){
                message.channel.send("I notice you...")
            }
        };

        messageCommand(command, new Array(this.starter));
    }
}

export default SpeechHammer;