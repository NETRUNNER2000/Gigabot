const { Rcon } = require('rcon-client');

(async () => {
    const rcon = new Rcon({
        host: '192.168.1.130', // Replace with your server's IP
        port: 25575,           // Default RCON port
        password: 'yeet!123', // Replace with your RCON password
    });

    try {
        await rcon.connect();

        // Send a command to the server
        const response = await rcon.send('say Hello from RCON!');
        console.log('Server Response:', response);

        // Disconnect when done
        rcon.end();
    } catch (error) {
        console.error('Error communicating with RCON:', error);
    }
})();
