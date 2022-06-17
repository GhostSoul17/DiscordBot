import messageCommand from "./baseCommands";

class UserCommands{
    constructor(starter) {
        this.starter = starter;
    }

    kickUser() {
        const command = (message) => {
            const { user, mentions } = message;
            const tag = `<@${member.id}>`;     
            
            if(user.hasPermission('ADMINISTRATOR') || user.hasPermission('KICK_MEMBERS')){
                const target = mentions.users.first();

                if (target) {
                    const targetMember = message.guild.users.cache.get(target.id);

                    targetMember.kick();

                    message.channel.send(`${tag} That user has been kicked.`);
                } else {
                    message.channel.send(`${tag} Please specify someone to kick.`)
                }
            } else {
                message.channel.send(`${tag} You do not have permission to use this command.`)
            }
        };

        messageCommand(command,  new Array(this.starter, 'kick'));
    }

    banUser() {
        const command = (message) => {
            const { member, mentions } = message;
            const tag = `<@${member.id}>`;       
            
            if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')){
                const target = mentions.users.first();

                if (target) {
                    const targetMember = message.guild.members.cache.get(target.id);

                    targetMember.ban();

                    messsage.channel.send(`${tag} That user has been banned.`);
                } else {
                    message.channel.send(`${tag} Please specify someone to ban.`)
                }
            } else {
                message.channel.send(`${tag} You do not have permission to use this command.`)
            }
        };
        
        messageCommand(command,  new Array(this.starter, 'ban'));
    }
}

export default UserCommands;