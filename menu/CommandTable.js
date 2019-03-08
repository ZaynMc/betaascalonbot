const Test = require("./commands/TestCommand.js");

const CommandTable = new Map(
    [
        ["a!test", Test.TestCommand],
    ]
);

module.exports = CommandTable;
