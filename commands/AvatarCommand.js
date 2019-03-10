



module.exports = class TestCommand {
    constructor() {
        this.name = "avatar",
        this.alias = ['avatar', 'av'],
        this.usage = "a!avatar"
    }

    run(bot, message, args) {
        var get_message = await message.channel.send("Generating avatar...");
        let target = message.mentions.users.first() || message.author;

    await message.channel.send({files: [
    {
    attachment: target.displayAvatarURL,
    name: "avatar.png"
    }
]});

get_message.delete();

        }
    }