const Test = require("./commands/TestCommand.js");

const CommandTable = new Map(
    [
        ["test", Test.TestCommand],
    ]
);

module.exports = CommandTable;
