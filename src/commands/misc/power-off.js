module.exports = {
    name: 'power-off',
    description: "Shutdown the server :-(",
    devOnly: false,
    callback: async (client, interaction) => {
        await interaction.deferReply();
        interaction.editReply("======================\n**This functionality is in development**\n**Sit tight** 😉\n======================");
    }
}