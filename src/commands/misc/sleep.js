module.exports = {
    name: 'sleep',
    description: "Put the server to sleep",
    devOnly: false,

    callback: (client, interaction) => {
        interaction.reply("Attempting to put the server to sleep...");
    }
}