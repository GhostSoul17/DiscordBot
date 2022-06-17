import messageCommand from "../commands/baseCommands.js";

class GameBot {

    constructor(starterG) {
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
        const command = (message) => {
            const { author } = message;
            const msgFilter = m => m.author.id == author.id;
                
            if(message.content.toLowerCase().includes("play")) {
                message.channel.send("What would you like to play? \nGames: 0, 1, 2");

                message.channel.awaitMessages({ filter: msgFilter,  max: 1, time: 15000, errors: ["time"] })
                .then(m => {
                    switch (m.first().content) {
                        case "0":
                            message.channel.send("I am thinking of a number between 1 and 10.\nWhat number am I thinking of?");
                            
                            message.channel.awaitMessages({ filter: msgFilter,  max: 1, time: 15000, errors: ["time"] })
                            .then(m => {
                                const botAnswer = Math.floor((Math.random() * 10) + 1);
                                const userAnwser = m.first().content;
                                
                                if (userAnwser.toLowerCase() == botAnswer) {
                                    message.channel.send(`Yes! I was totally thinking of ${botAnswer}!`)
                                }
                                else {
                                    message.channel.send(`Womp womp, I was thinking of ${botAnswer}. You lose.`)
                                }
                            }).catch(() => {
                                message.channel.send('Game timed out. Try again.');
                            });
                            break;
                        case "1":
                            message.channel.send("What animal am I thinking of?");

                            message.channel.awaitMessages({ filter: msgFilter,  max: 1, time: 15000, errors: ["time"] }).then(m => {
                                let animal = this.animalARRAY[Math.floor(Math.random * this.animalARRAY.length)];

                                if(m.content.toLowerCase().includes(animal)){
                                    message.channel.send(`You sly dog! ${animal} died though, but you won!`);
                                }else{
                                    message.channel.send(`${animal} decided to eat you...try again`);
                                }
                            });
                            break;
                        case "2":
                            message.channel.send("Totally gonna add a game later, pick a different game");
                            break;
                        default:
                            message.channel.send("Nothing would make me happier");
                            break;
                    }
                }).catch(() => {
                    message.channel.send('Game timed out. Try again.');
                });
            }
        };

        messageCommand(command, new Array(this.starterG));
    };

}

export default GameBot;