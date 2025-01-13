module.exports = {
    name: 'server-status',
    description: "returns server status text",
    devOnly: false,

    callback: (client, interaction) => {
        interaction.reply(`This is dummy server status text!`);
    }
}