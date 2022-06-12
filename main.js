import startBot, { login} from './commands/baseCommands.js';
import HelpCommands from './commands/helpCommands.js';
import SpeechHammer from './commands/speechHammer.js';
// import UserCommands from './userCommands.js';
import GameBot from './games/gameBot.js';

const starter = "stalkerbot";
const starterG = "gamebot";
const helper = new HelpCommands(starter);
const hammer = new SpeechHammer(starter);
// const users = new UserCommands(client, starter);
const gameBot = new GameBot(starterG);

startBot();

helper.helpCall();

hammer.checkSpeech();

hammer.welcomeSpeech();

// users.banUser();

// users.kickUser();

gameBot.gameCall();

login();