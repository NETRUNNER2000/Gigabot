const ping = require('ping');

async function checkIfPCOnline(host) {
    let result = false;
    try {
        const response = await ping.promise.probe(host, {
            timeout: 2, // Timeout in seconds
        });
        result = response.alive; // Use the `alive` property to check the status
    } catch (error) {
        console.error(`Error pinging ${host}:`, error.message);
    }

    return result;
}

module.exports = checkIfPCOnline;
