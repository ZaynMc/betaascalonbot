module.exports = class TestCommand {
    constructor() {
        this.name = "test",
        this.alias = ['t'],
        this.usage = "a!test"
    }

    run(bot, message,args) {
        message.reply("Proute");
    }
}