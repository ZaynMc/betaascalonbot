module.exports = class HelpCommand {
    constructor() {
        this.name = "roles",
        this.alias = ['partie', "par"],
        this.usage = "a!pp"
    }

    //"🛒", "🏅", "🔑", "📰", "📜", "🌐", "📄"

    run(bot, message, args) {

        message.channel.send("Test").then(msg => {
            msg.react("🛒");
            msg.react("🏅");
            msg.react("🔑");
            msg.react("📰");
            msg.react("📜");
            msg.react("🌐");

        });

        
    }
}