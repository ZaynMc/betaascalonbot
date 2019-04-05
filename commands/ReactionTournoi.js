module.exports = class HelpCommand {
    constructor() {
        this.name = "pp",
        this.alias = ['partie', "par"],
        this.usage = "a!pp"
    }

    run(bot, message, args) {

        let initialMessage = `**:bell: __Réction Notification Partie Perso__ :bell:**`;
        const roles = ["🔑 Notif PP"];
        const reactions = ["🔑"];

        if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

        function generateMessages(){
            var messages = [];
            messages.push(initialMessage);
            for (let role of roles) messages.push(`\n Réagie à l'émojii :key: pour avoir le grade : **"${role}"** !`); //DONT CHANGE THIS
            return messages;
        }

        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                }
            });
        }
    }
}