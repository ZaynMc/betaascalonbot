module.exports = class AvatarCommand {
    constructor() {
        this.name = "avatar",
        this.alias = ['avatar', 'av'],
        this.usage = "a!avatar"
    }

    run(bot, message, args) {
        message.channel.send("Generating avatar...");
        let target = message.mentions.users.first() || message.author;

     message.channel.send({files: [
    {
    attachment: target.displayAvatarURL,
    name: "avatar.png"
    }
]});
}
    }