const {ApplicationCommandOptionType, PermissionFlagsBits} =  require("discord.js");
const {Rcon} = require('rcon-client');
const { mcServerIp } = require('../../../config.json');

/**
 * Send a command to a Minecraft server via RCON.
 * 
 * @param {string} host - The IP address or hostname of the Minecraft server.
 * @param {number} port - The RCON port of the server (default: 25575).
 * @param {string} password - The RCON password for the server.
 * @param {string} command - The command to execute on the server.
 * @returns {Promise<string>} - Resolves with the server's response.
 */
async function sendRconCommand(host, port, password, command) {
    const rcon = new Rcon({
        host,
        port,
        password,
    });

    try {
        await rcon.connect();
        const response = await rcon.send(command);
        rcon.end(); // Close the connection
        return response;
    } catch (error) {
        rcon.end(); // Ensure the connection is closed on error
        throw new Error(`RCON Error: ${error.message}`);
    }
}

module.exports = {
    name: 'rcon',
    description: "Send commands to server",
    devOnly: false,
    options: [
        {
            name: "cmd-text",
            description: "rcon command",
            required: true,
            type: ApplicationCommandOptionType.String
        }
    ],
    
    callback: async (client, interaction) => {
        const cmdText = interaction.options.get('cmd-text').value;
        console.log(cmdText);
        (async () => {
            try {
                const response = await sendRconCommand(mcServerIp, 25575, 'yeet!123', cmdText);
                interaction.reply(`Command '${cmdText}' executed on server sucessfully 😎\n\nServer Response: ${response}`);
                console.log('Server Response:', response);
            } catch (error) {
                interaction.reply("😢 Something broke: " + error.response);
            }
        })();
    }
}