class UserCommands{
    constructor(client, starter) {
        this.client = client;
        this.starter = starter;
    }

    kickUser() {
        this.client.on("messageCreate", (message) => {
            const { member, mentions } = message;
            const tag = `<@${member.id}>`;

            if (!message.content.toLowerCase().startsWith(this.starter) && !message.content.toLowerCase().includes('kick')) return;        
            
            if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')){
                const target = mentions.users.first();

                if (target) {
                    const targetMember = message.guild.members.cache.get(target.id);

                    targetMember.kick();

                    messsage.reply(`${tag} That user has been kicked.`);
                } else {
                    message.reply(`${tag} Please specify someone to kick.`)
                }
            } else {
                message.reply(`${tag} You do not have permission to use this command.`)
            }
        })
    }

    banUser() {
        this.client.on("messageCreate", (message) => {
            const { member, mentions } = message;
            const tag = `<@${member.id}>`;

            if (!message.content.toLowerCase().startsWith(this.starter) && !message.content.toLowerCase().includes('ban')) return;        
            
            if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')){
                const target = mentions.users.first();

                if (target) {
                    const targetMember = message.guild.members.cache.get(target.id);

                    targetMember.ban();

                    messsage.reply(`${tag} That user has been banned.`);
                } else {
                    message.reply(`${tag} Please specify someone to ban.`)
                }
            } else {
                message.reply(`${tag} You do not have permission to use this command.`)
            }
        })
    }
}

export default UserCommands;