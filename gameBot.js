class GameBot {

    constructor(client, starterG) {
        this.client = client;
        this.starterG = starterG;
        this.animalARRAY = [
            "Leopard",
            "Bengal Tiger",
            "pussy",
            "squirrel",
            "Bear",
            "Lion",
            "Flying Fox",
            "Rabbit",
            "Peregrine Falcon",
            "chihuahua",
            "titmouse",
            "chipmunk",
            "mouse",
            "blue footed booby",
            "kea",
            "dodo bird",
            "lemming",
            "snek",
            "booplesnoot",
            "trash panda",
            "cow",
            "pig",
            "moo moo",
            "opossum",
            "vulture",
            "sugar glider",
            "hamster",
            "guinea pig",
            "crow",
            "wombat",
            "crocodile",
            "flat fuck"
        ];
    };

    gameCall() {
        this.client.on("messageCreate", (message) => {
            const { member } = message;

            if (!message.content.toLowerCase().startsWith(this.starterG)) return;
                
            if(message.content.toLowerCase().includes("play")){
                message.channel.send("What would you like to play? \nGames: 0, 1, 2").then(() => {
                    message.channel.awaitMessages(m => m.author.id == member.id, { max: 1, time: 3000 })
                    .then(m => {
                        let choice = m.first().content.toLowerCase();

                        switch (choice) {
                            case "0":
                                message.channel.send("I am thinking of a number between 1 and 100.\nWhat number am I thinking of?")
                                .then(() => {
                                    message.channel.awaitMessages(m => m.author.id == member.id, { max: 1, time: 3000 })
                                    .then(m => {
                                        let answer = Math.floor(Math.random * (1 - 100));

                                        if (m.content.toLowerCase() == answer) {
                                            message.reply(`Yes! I was totally thinking of ${answer}!`)
                                        }
                                        else {
                                            message.reply(`Womp womp, I was thinking of ${answer}. You lose.`)
                                        }
                                    });
                                }).catch(collected => {
                                    message.reply('Game timed out. Try again.');
                                });
                                break;
                            case "1":
                                message.reply("What animal am I thinking of?")
                                let animal = this.animalARRAY[Math.floor(Math.random * this.animalARRAY.length)];
                                if(message.content.toLowerCase().includes(animal)){
                                    message.reply(`You sly dog! ${animal} died though, but you won!`);
                                }else{
                                    message.reply(`${animal} decided to eat you...try again`);
                                }
                                break;
                            case "2":
                                message.reply("Totally gonna add a game later, pick a different game");
                                break;
                            default:
                                message.reply("Nothing would make me happier");
                                break;
                        }
                    }).catch(collected => {
                        message.reply('Game timed out. Try again.');
                    });
                })
            }
        })
    };

}

export default GameBot;