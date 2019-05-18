module.exports = class ClearCommand {
    constructor() {
        this.name = "pp",
        this.alias = ['perso', 'partie'],
        this.usage = "a!pprole"
    }

    run(bot, message, args) {

        const roles = ["🔑 Notif PP"];
        const reactions = ["🔑", "💬"];
        let initialMessage = `**:bell: __Réction Notification Partie Perso__ :bell:**`;

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