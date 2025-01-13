module.exports = {
    name: 'power-off',
    description: "Shutdown the server :-(",
    devOnly: false,
    callback: (client, interaction) => {
        interaction.reply("Attempting to shutdown the server...");
    }
}