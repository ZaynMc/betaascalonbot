module.exports = class TestCommand {
    constructor() {
        this.name = "pourcentage",
        this.alias = ['pourcent', 'pou'],
        this.usage = "a!pourcentage"
    }

    run(bot, message, args) {

        function difference(a, b) {
            return Math.abs(a / b);
          }

        let args0 = parseInt(args[0]);
        let args1 = parseInt(args[1]);
        let args2 = parseInt(args[2]);

        console.log(difference(args0, args1));
            
        }
    }
   