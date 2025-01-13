module.exports = {
    name: 'power-on',
    description: "Start the server!",
    devOnly: false,

    callback: (client, interaction) => {
        interaction.reply("Attempting to start the server...");
    }
}