

module.exports = {
    name: 'power-on',
    description: "Start the server!",
    devOnly: false,

    callback: async (client, interaction) => {
        await interaction.deferReply();

        const { exec } = require('child_process');

        exec('/usr/bin/python3 /home/netrunner/Documents/testpower.py', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(`Output: ${stdout}`);
            console.log('Sucessfully sent power on signal')
        });

        interaction.editReply("======================\n**Starting Server Up**\n**Sit tight** 😉\n======================");
    }
}
//