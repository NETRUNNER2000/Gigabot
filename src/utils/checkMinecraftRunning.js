const ping = require('ping');

// API call to check if Minecraft server is running
async function checkMinecraftRunning() {
    try {
      const response = await fetch('http://192.168.1.130:3000/is-minecraft-running');  // Change URL to your actual endpoint
      const data = await response.json(); // Parse the JSON response
      
      if (data.isMinecraftRunning !== undefined) {
        console.log('Is Minecraft running?', data.isMinecraftRunning);
      } else {
        console.error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching the server status:', error);
    }
  }

  
module.exports = checkMinecraftRunning;
