const {Rcon} = require('rcon-client');


/**
 * Send a command to a Minecraft server via RCON.
 * 
 * @param {string} host - The IP address or hostname of the Minecraft server.
 * @param {number} port - The RCON port of the server (default: 25575).
 * @param {string} password - The RCON password for the server.
 * @param {string} command - The command to execute on the server.
 * @returns {Promise<string>} - Resolves with the server's response.
 */
module.exports = async (host, port, password, command) => {
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
