const {ActivityType} = require("discord.js")
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

let playerCount = 0;

module.exports = (client) => {
    console.log("Creating recursive task to update player count");
   
    setInterval(()=>{
                
                (async () => {
                    try {
                        const response = await sendRconCommand(mcServerIp, 25575, 'yeet!123', 'list');
                        const match = response.match(/There are (\d+) of a max of (\d+) players online:/);

                        if (match) {
                            playerCount = parseInt(match[1], 10); // Extract the first number
                        } else {
                            console.error("Could not parse the player count from the text.");
                        }
                        
                    } catch (error) {
                        console.log("Something broke: " + error);
                    }
                })();
                 // get pc online status through api call
                let PCOnlineStatus = false;
                console.log("Players online: " + playerCount)
                if(PCOnlineStatus){
                    client.user.setPresence({
                        activities: [{ name: playerCount.toString(), type: ActivityType.Playing }],
                        status: 'online'
                    });
                }else{
                    client.user.setPresence({
                        activities: [{ name: playerCount.toString(), type: ActivityType.Playing }],
                        status: 'dnd'
                    })
                }
             
    }, 60000);
}