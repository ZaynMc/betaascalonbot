const CommandTable = require("./CommandTable.js");

class CommandReader {


    /**
     * This function analyses the passed message and calls the associated function if there is one.
     * @param message - A command posted by an user.
     */
    handleMessage(message) {
        console.log(`${message.author.username} passed ${message.content}\n`);
        let command = CommandReader.getCommandFromMessage(message);
        let args = CommandReader.getArgsFromMessage(message);
        if (CommandTable.has(command))
            CommandTable.get(command)(message, args)
    }

    /**
     * Sanitizes the string and return the command. The command should always be the 1st argument.
     * @param message - The message to extract the command from.
     * @returns {String} - The command, extracted from the message.
     */
    static getCommandFromMessage(message) {
        return CommandReader.getArgsFromMessage(message).shift().toLowerCase();
    }

    /**
     * Sanitizes the string and return the args. The 1st argument is not an args.
     * @param message - The message to extract the command from.
     * @returns [string] - args, extracted from the message.
     */
    static getArgsFromMessage(message) {
        return message.content.slice(Config.prefix.length).trim().split(/ +/g);
    }

}

module.exports = CommandReader;