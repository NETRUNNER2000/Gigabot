module.exports = {
    name: 'hard-reset',
    description: "Hard reset the server",
    devOnly: false,

    callback: async (client, interaction) => {
        await interaction.deferReply();
        interaction.editReply("======================\n**This functionality is in development**\n**Sit tight** 😉\n======================");
    }
}