module.exports = {
    name: 'ping',
    description: "Pong!",
    devOnly: false,

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    }
}