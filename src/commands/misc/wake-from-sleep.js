const { exec } = require('child_process');

const macAddress = '18:31:bf:bd:71:2c'; // Replace with the target machine's MAC address

/**
 * Sends a Wake-on-LAN (WOL) magic packet using the wakeonlan system command.
 * @param {string} macAddress - The MAC address of the target machine.
 * @returns {Promise<void>} - Resolves if the command succeeds, rejects if it fails.
 */
function sendWakeOnLan(macAddress) {
    return new Promise((resolve, reject) => {
        exec(`wakeonlan ${macAddress}`, (error, stdout, stderr) => {
            if (error) {
                return reject(`Error running wakeonlan: ${error.message}`);
            }
            if (stderr) {
                return reject(`stderr: ${stderr}`);
            }
            console.log(`stdout: ${stdout}`);
            resolve();
        });
    });
}

module.exports = {
    name: 'wake-from-sleep',
    description: "wake the Godzilla up",
    devOnly: false,

    callback: (client, interaction) => {
        sendWakeOnLan(macAddress)
        .then(() => console.log('WOL packet sent successfully'))
        .catch((err) => console.error(`Failed to send WOL packet: ${err}`));
        interaction.reply('Sending magic packet to Wake On LAN ✨');
    }
}